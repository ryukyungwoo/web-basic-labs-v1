console.log(typeof []);
let nums = [1, 2, 3];
console.log(nums[1]);
console.log(nums.length);

nums.push(4);
console.log(nums);

nums.pop();
console.log(nums);

nums.unshift(0);
console.log(nums);

nums.shift();
console.log(nums);

for (let num of nums) {
  console.log(num);
}

nums.forEach((n) => {
  console.log(n);
});
