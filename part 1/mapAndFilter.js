//Mapped array

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);
console.log(numbers);
console.log(squares);

// Filtered array

numbers2 = [10, 32, 45, 67, 89, 90, 12, 34, 56, 78, 90];
const filterNumbers = numbers2.filter(number => number > 50);
console.log(numbers2);
console.log(filterNumbers); // [67, 89, 90, 56, 78, 90]
