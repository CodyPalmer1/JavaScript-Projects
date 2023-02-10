const startButton = document.getElementById("startButton");
const firstModal = document.getElementById("firstModal");
const secondModal = document.getElementById("secondModal");
const errorMessage = document.getElementById("errorMessage");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesButton2 = document.getElementById("yesButton2");
const noButton2 = document.getElementById("noButton2");

startButton.addEventListener("click", function() {
    firstModal.style.display = "block";
});

yesButton.addEventListener("click", function() {
    firstModal.style.display = "none";
    secondModal.style.display = "block";
});

noButton.addEventListener("click", function() {
    firstModal.style.display = "none";
    errorMessage.style.display = "block";
});

yesButton2.addEventListener("click", function() {
    secondModal.style.display = "none";
    firstModal.style.display = "block";
});

noButton2.addEventListener("click", function() {
    secondModal.style.display = "none";
    errorMessage.style.display = "block";
});
