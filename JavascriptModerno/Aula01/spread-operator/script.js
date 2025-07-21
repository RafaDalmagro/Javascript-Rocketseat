const numbers = [1, 2, 3, 4, 5];

// Using the spread operator to create a new array with additional elements
const newNumbers = [...numbers, 6, 7, 8];
const test = [...numbers];

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(test); // Output: [1, 2, 3, 4, 5]
console.log(test === numbers); // Output: false, because they are different arrays

