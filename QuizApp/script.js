const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitBtn = document.getElementById("submitBtn");
    const resultElement = document.getElementById("result");

    questionElement.innerText = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const option = document.createElement("button");
        option.innerText = questions[currentQuestion].options[i];
        option.addEventListener("click", () => selectAnswer(option.innerText));
        optionsElement.appendChild(option);
    }

    submitBtn.style.display = currentQuestion === questions.length - 1 ? "none" : "block";
    resultElement.innerText = "";
}

function selectAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Your score: ${score} out of ${questions.length}`;
}

displayQuestion();
