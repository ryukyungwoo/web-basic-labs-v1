// 객체 생성 방법

//1) 객체 리터럴
let s1 = {
  name: "이학생",
  age: 15,
};

// 2) 생성자 함수
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// 메모리 최적화 (함수 공유)
Student.prototype.study = function () {
  console.log("학생이 공부를 합니다");
};

const s2 = new Student("윤학생", 15);
s2.study();

console.log(s1);
console.log(s2);

// 클래스 방식
class StudentClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  study() {
    console.log(`${this.name}이 공부를 합니다!`);
  }
}

const s3 = new StudentClass("조학생", 15);
console.log(s3);
