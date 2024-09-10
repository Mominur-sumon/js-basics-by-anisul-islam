// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const numbers = [10,20,30,40,50,5,6,7,8,9];

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 10

const firstOdd = numbers.find(num => num % 2 !== 0);
console.log(firstOdd); // 5

// findIndex
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 0