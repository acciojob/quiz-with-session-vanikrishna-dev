const questionsContainer = document.getElementById("questions");
const submitBtn = document.getElementById("submit");
const scoreDiv = document.getElementById("score");

let userAnswers = [];

let savedProgress = JSON.parse(sessionStorage.getItem("progress"));

function saveProgress() {
  sessionStorage.setItem("progress", JSON.stringify(userAnswers));
}

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

      // restore session selection
      if (userAnswers[i] === q.choices[j]) {
        input.checked = true;
      }

      input.addEventListener("change", function () {
        userAnswers[i] = q.choices[j];
        saveProgress();
      });

      div.appendChild(input);
      div.appendChild(document.createTextNode(q.choices[j]));
    }

    questionsContainer.appendChild(div);
  }
}

submitBtn.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreDiv.textContent = `Your score is ${score} out of 5.`;
  localStorage.setItem("score", score);
});

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

if (savedProgress) {
  userAnswers = savedProgress;
} else {
  userAnswers = new Array(questions.length).fill("");
}

renderQuestions();