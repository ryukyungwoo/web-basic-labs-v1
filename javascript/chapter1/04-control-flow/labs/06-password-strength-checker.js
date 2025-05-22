/* 사용자가 입력한 비밀번호가 다음 조건을 만족하는지 확인하고 모든 조건 만족 시 "강한 비밀번호", 아니면 부족한 항목을 명시하세요.
조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)
 regex - 정규식
 - !/[A-Z]/.test(password)
*/

let password = prompt("비밀번호를 입력하세요");
let isStrong = true;

if (password.length < 8) {
  alert("길이가 8자 미만입니다.");
  isStrong = false;
}

if (!/[A-Z]/.test(password)) {
  alert("대문자가 1개 이상이어야 합니다. ");
  isStrong = false;
}

if (!/[0-9]/.test(password)) {
  alert("숫자가 1개 이상이어야 합니다. ");
  isStrong = false;
}

if (!/[!@#$%^&*]/.test(password)) {
  alert("특수문자 1개 이상이어야 합니다. ");
  isStrong = false;
}

if (isStrong) {
  alert("강한 비밀번호입니다!");
}

let input = prompt(`
    비밀번호를 입력해주세요.
    조건:
- 길이 8자 이상
- 대문자 1개 이상
- 숫자 1개 이상
- 특수문자 1개 이상 (!@#$%^&*)`);

function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
}

if (validatePassword(input)) {
  alert("강한 비밀번호");
}
