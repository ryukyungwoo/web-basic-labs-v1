const words = ["Hello", "World", "!"];

console.log(words.join(" "));

console.log(words.includes("Hello"));

console.log(words.includes("hello"));

console.log(words.slice(1, 3));

console.log(words.concat("good", "morning", "!"));

let nums = [1, 2, 3];

console.log(nums);

console.log(nums.map((n) => n * 3));

console.log(nums.filter((n) => n % 2 === 0));

console.log(nums.reduce((acc, cur) => acc + cur, 0));

console.log(nums.sort());
