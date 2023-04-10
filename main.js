document.getElementById("add").addEventListener("click", function() {
    window.location.href = "add-product.html";
});

// shlis axalshekmnil items butonze dacheris dros

const deleteBtn = document.getElementById('delete-product-btn');
deleteBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.delete-checkbox:checked');
    const buttonClicks = JSON.parse(localStorage.getItem('buttonClicks')) || [];

    checkboxes.forEach((checkbox) => {
        const div = checkbox.parentNode.parentNode;
        const index = Array.from(downDiv.children).indexOf(div);
        downDiv.removeChild(div);
        buttonClicks.splice(index, 1);
    });

    localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));
});







// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mushaobs


// kmnis elements

const downDiv = document.querySelector('.down');
const itemDiv = document.querySelector('.item');
let buttonClicks = JSON.parse(localStorage.getItem('buttonClicks')) || [];

// loop through buttonClicks array and create divs with same class and content as item div
buttonClicks.forEach((timestamp) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = itemDiv.innerHTML;
    downDiv.appendChild(div);
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mushaobs


//  -----------------sku
const skuItem = document.getElementById('sku');

// Get the value of the SKU input field from localStorage
const skuText = localStorage.getItem('sku');

if (skuText) {
    skuItem.textContent = skuText;
}


//  -----------------name
const nameItem = document.getElementById('name');

// Get the value of the SKU input field from localStorage
const nameText = localStorage.getItem('name');

if (nameText) {
    nameItem.textContent = nameText;
}



//  -----------------price
const priceItem = document.getElementById('price');

// Get the value of the SKU input field from localStorage
const priceText = localStorage.getItem('price');

if (priceText) {
    priceItem.textContent = priceText + "$";
}


//  -----------------dvd size
const sizeItem = document.getElementById('size');

// Get the value of the SKU input field from localStorage
const sizeText = localStorage.getItem('size');

if (sizeText) {
    sizeItem.textContent = "Size: " + sizeText + " MB";
}


//  -----------------dvd weight
const weightItem = document.getElementById('weight');

// Get the value of the SKU input field from localStorage
const weightText = localStorage.getItem('weight');

if (weightText) {
    weightItem.textContent = weightText + " KG";
}
//  -----------------dvd weight
const dimensionsItem = document.getElementById('dimensions');

// Get the value of the SKU input field from localStorage
const heightText = localStorage.getItem('height');
const widthText = localStorage.getItem('width');
const lengthText = localStorage.getItem('length');

if (heightText) {
    dimensionsItem.textContent = heightText + "CM    " +
        widthText + "CM    " + lengthText + "CM";
}