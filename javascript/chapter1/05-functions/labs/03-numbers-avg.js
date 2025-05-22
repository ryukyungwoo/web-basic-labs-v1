// 문제 : 세 개의 숫자를 입력받아 평균을 반환하는 함수를 작성하세요.
function add(a, b, c) {
  console.log((a + b + c) / 3);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("첫번째 수를 입력하세요 : ", (a) => {
  rl.question("두번째 수를 입력하세요 : ", (b) => {
    rl.question("세번째 수를 입력하세요 : ", (c) => {
      add(a, b, c);
      rl.close();
    });
  });
});
