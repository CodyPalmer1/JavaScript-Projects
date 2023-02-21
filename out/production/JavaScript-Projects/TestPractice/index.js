const getElementById = (id) => document.getElementById(id);

const addEventListener = (id, event, callback) => getElementById(id).addEventListener(event, callback);

const showElement = (id) => getElementById(id).style.display = "block";

const hideElement = (id) => getElementById(id).style.display = "none";

const startButtonId = "startButton";
const firstModalId = "firstModal";
const secondModalId = "secondModal";
const errorMessageId = "errorMessage";
const yesButtonId = "yesButton";
const noButtonId = "noButton";
const yesButton2Id = "yesButton2";
const noButton2Id = "noButton2";

addEventListener(startButtonId, "click", () => showElement(firstModalId));

addEventListener(yesButtonId, "click", () => {
    hideElement(firstModalId);
    showElement(secondModalId);
});

addEventListener(noButtonId, "click", () => {
    hideElement(firstModalId);
    showElement(errorMessageId);
});

addEventListener(yesButton2Id, "click", () => {
    hideElement(secondModalId);
    showElement(firstModalId);
});

addEventListener(noButton2Id, "click", () => {
    hideElement(secondModalId);
    showElement(errorMessageId);
});
