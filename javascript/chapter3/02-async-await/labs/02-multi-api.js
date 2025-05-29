/*
[문제] 두 개의 외부 API를 fetch로 병렬 처리한 뒤, 둘의 결과를 모두 출력하세요.

1) https://jsonplaceholder.typicode.com/posts/2
2) https://jsonplaceholder.typicode.com/users/1

- async/await와 Promise.all을 활용
- 두 API 모두의 데이터를 받아서 각각 출력
*/

async function fetchData() {
  try {
    const fetchMock = [
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ];
    const results = await Promise.all(fetchMock);
    console.log(await results[0].json(), await results[1].json());
  } catch (err) {
    console.log(err);
  }
}

fetchData();
