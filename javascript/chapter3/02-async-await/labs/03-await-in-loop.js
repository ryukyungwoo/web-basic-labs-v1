/*
[문제] 아래 배열의 userId로 하나씩 fetch 요청을 보내 user 정보를 순서대로 출력하세요.

const userIds = [1, 2, 3];

- https://jsonplaceholder.typicode.com/users/{userId}
- async/await와 for...of 문 사용
- (순서대로 출력되어야 함)
*/

async function fetchId(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const userIds = [1, 2, 3];

for (const userId of userIds) {
  fetchId(userId);
}
