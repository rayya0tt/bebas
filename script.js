const questions = [
  {
    question: "Apa ibu kota negara Indonesia?",
    options: ["Bandung", "Jakarta", "Surabaya", "Medan"],
    answer: 1
  },
  {
    question: "Berapakah hasil dari 5 x 6?",
    options: ["20", "25", "30", "35"],
    answer: 2
  },
  {
    question: "Planet manakah yang dikenal sebagai Planet Merah?",
    options: ["Venus", "Mars", "Yupiter", "Saturnus"],
    answer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectOption(button, index);
    optionsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  optionsElement.innerHTML = "";
}

function selectOption(selectedButton, index) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach(btn => btn.disabled = true);

  if (index === currentQuestion.answer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
    buttons[currentQuestion.answer].classList.add("correct");
  }

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultElement.style.display = "block";
  resultElement.textContent = `Kuis Selesai! Skor Anda: ${score} / ${questions.length}`;
}

loadQuestion();
