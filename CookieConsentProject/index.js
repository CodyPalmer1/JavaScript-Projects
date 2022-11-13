const modal = document.getElementById("modal");
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500);

const modalOnClose = document.getElementById("modal-close-btn");
modalOnClose.addEventListener('click', function() {
    modal.style.display = 'none'
});

const sectionContainer = document.getElementById("section-container");
sectionContainer.addEventListener('click', function() {
    sectionContainer.style.display = 'none'
});
