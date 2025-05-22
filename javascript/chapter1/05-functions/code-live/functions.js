// 기본 함수 선언식 (호이스팅)

sayHello();

function sayHello() {
  console.log("안녕하세요!");
  return "Hello";
}

let word = sayHello();
console.log(word);

// 함수 표현식

// greet(); (호이스팅 x)

const greet = function () {
  console.log("Greeting!!");
};

console.log(greet);
greet();

// 화살표 함수

const sayHi = () => {
  console.log("하이");
};

sayHi();
