document.getElementById("add").addEventListener("click", function() {
    window.location.href = "add-product.html";
});

// const deleteButton = document.querySelector('.delete-product-btn');
// deleteButton.addEventListener('click', function() {
//     const checkboxes = document.querySelectorAll('.delete-checkbox:checked');
//     checkboxes.forEach(function(checkbox) {
//         checkbox.parentNode.parentNode.parentNode.removeChild(checkbox.parentNode.parentNode);
//     });
// });

const deleteBtn = document.getElementById('delete-product-btn');
deleteBtn.addEventListener('click', () => {
    const deleteCheckboxes = document.querySelectorAll('.delete-checkbox');
    deleteCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const itemDiv = checkbox.parentElement.parentElement;
            // Remove the item from the screen
            itemDiv.remove();
            // Remove the item from the local storage
            const buttonClicks = JSON.parse(localStorage.getItem('buttonClicks'));
            const timestamp = itemDiv.dataset.timestamp;
            const index = buttonClicks.indexOf(parseInt(timestamp));
            if (index > -1) {
                buttonClicks.splice(index, 1);
                localStorage.setItem('buttonClicks', JSON.stringify(buttonClicks));
            }
        }
    });
});







// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mushaobs

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