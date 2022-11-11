const modal = document.getElementById("modal");

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500);

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display
   property of the modal to 'none' when the
   close button is clicked.
*/

const exit = document.getElementById("modal-close-btn");
onclick(
    exit.style.display = 'none'
)