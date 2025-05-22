const student = {
  name: "윤학생",
  age: 25,
  major: "컴퓨터공학",
  study() {
    console.log(`${this.name} 이 공부를 합니다`);
  },
};

student.study();
setTimeout(student.study, 2000); // this가 가리키는게 소실됨
setTimeout(student.study.bind(student), 2000); // this를 student 객체로 고정
