// async await : Promise 객체를 처리하는 문법

// Promise 객체를 반환하는 함수
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // Promise 상태가 fullfill 상태가 됨
    }, ms);
  });
}

delay(1000).then(() => {
  console.log("Promise 객체 결과 성공");
});

async function main() {
  await delay(1000);
  console.log("1초 후 출력");
}

main();
console.log("코드 실행");
