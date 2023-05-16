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
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["France", "Germany", "Brazil", "Argentina"],
        answer: "France"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the largest country on Earth?",
        options: ["USA", "Russia", "China", "Australia"],
        answer: "Russia"
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["North America", "Europe", "Asia", "Australia"],
        answer: "Asia"
    },
    {
        question: "Who holds the record for most yards passed in an NFL career?",
        options: ["Tom Brady", "Peyton Manning", "Joe Montana", "Drew Brees"],
        answer: "Tom Brady"
    },
    {
        question: "Who holds the record for most yards rushed for in an NFL career?",
        options: ["Barry Sanders", "Adrian Peterson", "Emmit Smith", "Jim Brown"],
        answer: "Emmit Smith"
    },
    {
        question: "Who holds the record for most points scored in NBA history?",
        options: ["LeBron James", "Michael Jordan", "Tom Brady", "Steph Curry"],
        answer: "Lebron James"
    },
    {
        question: "Which United States, State get the most percipitaion per year?",
        options: ["Washington State", "Texas", "Florida", "Hawaii"],
        answer: "Hawaii"
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
