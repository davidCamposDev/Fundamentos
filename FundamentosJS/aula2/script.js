function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 54, 31, 43, 5));
