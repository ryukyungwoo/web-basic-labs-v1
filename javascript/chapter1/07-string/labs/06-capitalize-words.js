/* 모든 단어의 첫 글자를 대문자로 바꾸기 */
function capitalizeWords(sentence) {
  // TODO: split → map → join

  return sentence.replace("h", "H").replace("j", "J").replace("w", "W");
}
console.log(capitalizeWords("hello javascript world")); // "Hello Javascript World"
