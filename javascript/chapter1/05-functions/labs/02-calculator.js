// TODO: add, subtract, multiply, divide 함수 만들고 결과 출력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("첫번째 수를 입력하세요 : ", (a, b) => {
//   add(a, b);
//   subtract(a, b);
//   multiply(a, b);
//   divide(a, b);
//   rl.close();
// });

rl.question("첫번째 수를 입력하세요 : ", (a) => {
  console.log(a);
  rl.question("두번째 수를 입력하세요: ", (b) => {
    add(a, b);
    subtract(a, b);
    multiply(a, b);
    divide(a, b);
    rl.close();
  });
});

function add(a, b) {
  console.log(a + b);
}
function subtract(a, b) {
  console.log(a - b);
}
function multiply(a, b) {
  console.log(a * b);
}
function divide(a, b) {
  console.log(a / b);
}
