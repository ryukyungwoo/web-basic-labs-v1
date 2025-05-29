const startBtn = document.querySelector("#start-btn");
const selectCount = document.querySelector("#select-count");
const viewQuiz = document.querySelector("#view-quiz");
const viewStart = document.querySelector("#view-start");
const quizStatus = document.querySelector("#quiz-status");
const progress = document.querySelector("#progress");
const timer = document.querySelector("#timer");
const quizBox = document.querySelector("#quiz-box");
const submitBtn = document.querySelector("#submit-btn");
const viewResult = document.querySelector("#view-result");
const restartBtn = document.querySelector("#restart-btn");
const score = document.querySelector("#score");

const questionDiv = document.createElement("div");
const radioDiv = document.createElement("div");
const resultDiv = document.createElement("div");
const timerDiv = document.createElement("div");

let selectedQuizCount = selectCount.value;
let visited = new Set();
let setQuiz = [];
let mapQuizResult = new Map();

let nowAnswer = 0;
let nowQuiz = "";

// 시작 버튼
startBtn.addEventListener("click", async () => {
  toggleSwitch(viewQuiz);
  toggleSwitch(viewStart);
  await randomQuiz();
  nowQuiz = quizPop();
  quizRenderer(nowQuiz);
});

// 문제 수 선택
selectCount.addEventListener("change", (e) => {
  selectedQuizCount = e.target.value;
});
// 화면 전환
function toggleSwitch(target) {
  if (target.style.display === "none") {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
}
// 버튼 활성화
function btnSelected(target) {
  if (target.disabled == true) {
    target.disabled = false;
  }
}
// 퀴즈 json에서 가져오기
async function fetchQuiz() {
  const quizs = await axios.get("./data/questions.json");
  return quizs.data;
}
// 랜덤 퀴즈 뽑기
async function randomQuiz() {
  const quizs = await fetchQuiz();
  while (setQuiz.length != selectedQuizCount) {
    const randomCount = Math.floor(Math.random() * (selectedQuizCount - 1) + 1);
    if (visited.has(randomCount)) return;
    visited.add(randomCount);
    const findQuiz = quizs.find((a) => a.id === randomCount);
    setQuiz.push(findQuiz);
  }
}
// 퀴즈를 퀴즈 박스에 마운트하기
function quizPop() {
  return setQuiz.pop();
}
// 가져온 퀴즈를 랜더링
function quizRenderer(nowQuiz) {
  // timerDiv.textContent = remainingTimer(nowQuiz);
  // quizBox.append(timerDiv);

  questionDiv.textContent = nowQuiz.question;

  const choices = nowQuiz.choices;

  for (let i = 1; i <= choices.length; i++) {
    const answer = document.createElement("input");
    let radioLabel = document.createElement("label");

    answer.type = "radio";
    answer.name = "choiceGroup";
    answer.id = i;
    radioLabel.textContent = choices[i - 1];

    radioLabel.appendChild(answer);
    radioDiv.append(radioLabel);
  }

  quizBox.append(questionDiv);
  quizBox.append(radioDiv);
}

// 가져온 퀴즈의 시간 활성화
function remainingTimer(nowQuiz) {
  let timeLimit = nowQuiz.timeLimit;
  let currentTime = timeLimit;

  while (currentTime !== 0) {
    setTimeout(() => {
      currentTime--;
    }, 1000);
  }
  return `${currentTime} / ${timeLimit}`;
}

// 라디오 선택했을 때 제출 버튼 토글화
radioDiv.addEventListener("change", (e) => {
  btnSelected(submitBtn);
});

// 제출 눌렀을 때
submitBtn.addEventListener("click", () => {
  toggleSwitch(viewQuiz);
  toggleSwitch(viewResult);
  deleteChildTagBtn(radioDiv);
  resultSaveToMap();
  resultRender();
});

// 다시하기 눌렀을 때
restartBtn.addEventListener("click", () => {
  toggleSwitch(viewResult);
  toggleSwitch(viewStart);
  selectedQuizCount = selectCount.value;
  visited = new Set();
  setQuiz = [];
  mapQuizResult = new Map();
});

// 답 체크하기
radioDiv.addEventListener("change", (e) => {
  nowAnswer = e.target.id;
  console.log(nowAnswer);
});

// 하위 태그 내용 지우기
function deleteChildTagBtn(target) {
  target.innerText = "";
}

// 결과 맵에 저장
function resultSaveToMap() {
  const result = nowQuiz.answer === nowAnswer ? "O" : "X";
  const question = nowQuiz.question;
  const myAnswer = `내 선택  ${nowAnswer}번 : ${nowQuiz.choices[nowAnswer]}`;
  const answer = `정답 ${nowQuiz.answer}번 :${nowQuiz.choices[nowQuiz.answer]}`;

  mapQuizResult.set(nowQuiz.id, {
    result,
    question,
    myAnswer,
    answer,
  });
  console.log(mapQuizResult.get(nowQuiz.id));
}

// 결과 랜더링
function resultRender() {
  for (const map of mapQuizResult) {
    const result = document.createElement("div");
    for (const each of map) {
      const res = document.createElement("div");
      res.textContent = each;
      result.append(res);
    }
    viewResult.append(result);
  }
}
