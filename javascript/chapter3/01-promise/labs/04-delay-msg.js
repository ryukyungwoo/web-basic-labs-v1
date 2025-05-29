// [문제] Promise객체를 이용해 ms초 후에 문자열 msg를 출력하는 비동기 함수를 작성해보세요.

function printMsg() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("msg");
    }, 500);
  });
}

printMsg().then((e) => console.log(e));
