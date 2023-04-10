// Here's the JavaScript code that listens to changes on the product type select
const productTypeSelect = document.getElementById('productType');
const dvdDetailsDiv = document.getElementById('dvd-details');
const bookDetailsDiv = document.getElementById('book-details');
const furnitureDetailsDiv = document.getElementById('furniture-details');



// valuebs cvlis

productTypeSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'dvd') {
        dvdDetailsDiv.style.display = 'block';
        bookDetailsDiv.style.display = 'none';
        furnitureDetailsDiv.style.display = 'none';

    } else if (selectedValue === 'book') {
        bookDetailsDiv.style.display = 'block';
        dvdDetailsDiv.style.display = 'none';
        furnitureDetailsDiv.style.display = 'none';

    } else if (selectedValue === 'furniture') {
        furnitureDetailsDiv.style.display = 'block';
        bookDetailsDiv.style.display = 'none';
        dvdDetailsDiv.style.display = 'none';
    } else {
        furnitureDetailsDiv.style.display = 'none';
        bookDetailsDiv.style.display = 'none';
        dvdDetailsDiv.style.display = 'none';
    }
});



document.getElementById("cancel").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("save").addEventListener("click", function() {
    window.location.href = "index.html";
});




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mushaobs


// kmnis elements

const saveButton = document.getElementById('save');

saveButton.addEventListener('click', () => {
    // get existing array from local storage or create a new one
    let buttonClicks = JSON.parse(localStorage.getItem('buttonClicks')) || [];
    // push current timestamp to array
    buttonClicks.push(Date.now());
    // set updated array in local storage
    localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mushaobs
//  -----------------sku
const skuInput = document.getElementById('sku');

skuInput.addEventListener('input', () => {
    const skuText = skuInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('sku', skuText);
});

//  -----------------name
const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
    const nameText = nameInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('name', nameText);
});


//  -----------------price
const priceInput = document.getElementById('price');

priceInput.addEventListener('input', () => {
    const priceText = priceInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('price', priceText);
});
//  -----------------size
const sizeInput = document.getElementById('size');

sizeInput.addEventListener('input', () => {
    const sizeText = sizeInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('size', sizeText);
});

//  -----------------weight
const weightInput = document.getElementById('weight');

weightInput.addEventListener('input', () => {
    const weightText = weightInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('weight', weightText);
});

//  -----------------furniture
// const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const widthInput = document.getElementById('width');
const lengthInput = document.getElementById('length');

heightInput.addEventListener('input', () => {
    const heightText = heightInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('height', heightText);
});
widthInput.addEventListener('input', () => {
    const widthText = widthInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('width', widthText);
});
lengthInput.addEventListener('input', () => {
    const lengthText = lengthInput.value;
    // Save the value of the SKU input field in localStorage
    localStorage.setItem('length', lengthText);
});