/*
[문제] 아래 비동기 함수를 두 방식으로 호출해, 전체 실행 시간을 비교해보세요.

function asyncJob(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

- 1) await를 반복문(for of)에서 사용 (순차 실행)
- 2) Promise.all과 await로 병렬 실행

각 방식에서 콘솔로 각 작업의 시작/끝, 전체 소요시간을 출력해보세요.
*/

function asyncJob(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

const jobList = [asyncJob(1000), asyncJob(5000), asyncJob(500)];

async function asyncFor() {
  try {
    for (const job of jobList) {
      await job;
    }
  } catch (err) {
    console.log(err);
  }
}

// const forSumStart = new Date().getMilliseconds();
console.time("순차");
await asyncFor();
console.timeEnd("순차");
// const forSumEnd = new Date().getMilliseconds();
// console.log(`순차 코드 : ${forSumEnd - forSumStart}`);
// const allSumStart = new Date().getMilliseconds();

console.time("병렬");
await Promise.all(jobList);
console.timeEnd("병렬");
// const allSumEnd = new Date().getMilliseconds();
// console.log(`병렬 코드 : ${allSumEnd - allSumStart}`);
