/*
학생 점수를 A, B, C, F 등급으로 변환하여 출력하세요.
힌트: map 사용, 조건문 포함
*/

const scores = [92, 77, 45, 88, 64];

// TODO: map을 사용해 점수를 등급으로 변환하세요.
// 90 이상: A, 80 이상: B, 70 이상: C, 60 이상: D, 나머지: F

console.log(
  scores.map((n) => {
    if (n >= 90) {
      return (n = "A");
    } else if (n >= 80) {
      return (n = "B");
    } else if (n >= 70) {
      return (n = "C");
    } else if (n >= 60) {
      return (n = "D");
    } else {
      return (n = "F");
    }
  })
);
