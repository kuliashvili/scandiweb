// Here's the JavaScript code that listens to changes on the product type select
const productTypeSelect = document.getElementById('productType');
const dvdDetailsDiv = document.getElementById('dvd-details');
const bookDetailsDiv = document.getElementById('book-details');
const furnitureDetailsDiv = document.getElementById('furniture-details');



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