//your JS code here.

const questionsContainer = document.getElementById("questions");
const submitBtn = document.getElementById("submit");
const scoreDiv = document.getElementById("score");

let userAnswers =
  JSON.parse(sessionStorage.getItem("progress")) ||
  new Array(questions.length).fill("");

const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
  scoreElement.textContent = `Your score is ${savedScore} out of 5.`;
}

function saveProgress() {
  sessionStorage.setItem(
    "progress",
    JSON.stringify(userAnswers)
  );
}

submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreElement.textContent = `Your score is ${score} out of 5.`;
  localStorage.setItem("score", score);
});
// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  questionsContainer.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    const div = document.createElement("div");

    div.appendChild(document.createTextNode(q.question));

    for (let j = 0; j < q.choices.length; j++) {
      const input = document.createElement("input");

      input.type = "radio";
      input.name = `question-${i}`;
      input.value = q.choices[j];

      const labelText = document.createTextNode(q.choices[j]);

      div.appendChild(input);
      div.appendChild(labelText);
    }

    questionsContainer.appendChild(div);
  }
}