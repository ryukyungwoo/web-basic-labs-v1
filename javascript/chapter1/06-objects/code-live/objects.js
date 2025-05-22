// 객체

console.log(typeof {});

const student = {
  name: "윤학생",
  age: 25,
  major: "컴퓨터공학",
  study() {
    console.log(`${this.name} 이 공부를 합니다`);
  },
};

console.log(student.age);
console.log(student["age"]);

student.grade = "A";

console.log(student.grade);
console.log(student);

console.log("age" in student);
delete student.age;
console.log("age" in student);

student.study();
