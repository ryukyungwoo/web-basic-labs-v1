// 비동기 처리
// 콜백, promise, async/await

function getUsetData(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "윤유저" });
  }, 1000);
}

getUsetData((user) => {
  console.log(user);
});
console.log("실행");
