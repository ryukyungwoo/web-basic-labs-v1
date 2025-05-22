function greet(name, callback) {
  console.log("유저가 입장했습니다...");
  callback(name);
}

function greetKorean(name) {
  console.log(`안녕하세요 ${name} 님`);
}

greet("윤유저", greetKorean);
greet("김유저", (name) => {
  console.log(`Hello, ${name}!`);
});

// 비동기 처리에서의 콜백

// loginUser : 고차함수
function loginUser(name, callback) {
  console.log(`${name}님 로그인 중...`);
  setTimeout(() => {
    console.log("로그인 완료!");
    callback(name);
  }, 2000);
}

loginUser("윤유저", (name) => {
  console.log(`${name}님 반갑습니다`);
});
