// 클로저 : 내부 함수에서 외부 함수의 변수를 기억하는 기능
// 전역 변수로 빼서 기능 구현하는 건 OK

// let count = 0; // 누구나 다 접근 가능

// function counter() {
//   count++;
//   console.log(count);
// }

// counter();
// counter();
// counter();

function makeCounter() {
  let count = 0; // private 기능
  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter();
counter();
counter();
