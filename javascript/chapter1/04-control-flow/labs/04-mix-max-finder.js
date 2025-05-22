// 문제: 배열 내 최소값, 최대값을 찾아보세요.

const numbers = [15, 3, 20, 8, 42];

let min = 11111111111111111111111111;
let max = 0;

for (let int of numbers) {
  if (int < min) {
    min = int;
  }
  if (int > max) {
    max = int;
  }
}

console.log(min);
console.log(max);
