

const arr = [1, 2, 2, 3, 1];
const unique = {...new Set(arr)}; // [1, 2, 3]
console.log(unique);
