// 문제: 사용자가 정답 숫자를 맞힐 때까지 계속 입력받는 게임을 만들어보세요. (while 사용)
// Math.random()으로 1~10 중 하나를 고르고 맞힐 때까지 반복
// prompt()

let guessNum;
let isMatch = false;
let randomNum = Math.floor(Math.random() * 10) + 1;
while (true) {
  guessNum = prompt("1~10 까지 숫자 중 아무거나 입력하세요");
  // 종료 조건
  if (guessNum == randomNum) {
    alert("정답입니다.");
    break;
  } else {
    alert("오답입니다.");
  }
}

let targetNum = Math.floor(Math.random() * 10 + 1);

let keepGoing = true;

while (keepGoing) {
  let input = prompt("1~10 중 하나를 고르세요 : ");
  alert(`랜덤수 : ${targetNum}, 고른수 : ${input} `);
  if (input == targetNum) {
    alert("맞았습니다.");
    keepGoing = false;
  }
}

rl.close();
