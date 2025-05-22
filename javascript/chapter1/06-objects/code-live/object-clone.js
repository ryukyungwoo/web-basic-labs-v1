// 객체 복사 : 얕은 복사 vs 깊은 복사
// 개념 숙지!!!

const student = {
  name: "윤학생",
  scores: {
    math: 90,
    english: 100,
    sciences: { 물: 50, 화: 30, 생: 20, 지: 40 },
  },
};

// 얕은 복사
const shallowStudent = { ...student };

shallowStudent.name = "전학생";
shallowStudent.scores.math = 100;

console.log(student.name);
console.log(student.scores.math);

// 깊은 복사
const deepStudent = JSON.parse(JSON.stringify(student));

deepStudent.scores.math = 50;
console.log(student.scores.math);
console.log(deepStudent.scores.math);
