const str = "Today is friday of sepember 2024";
// we c can add second parameter to specify the position of the string
console.log(str.startsWith('Today')); // true
console.log(str.startsWith('today')); // false
console.log(str.endsWith('2024')); // true
console.log(str.endsWith('2025')); // false
console.log(str.includes('friday')); // true, case sensitive we can use toLowerCase() or toUpperCase() to make it case insensitive
console.log(str.includes('Friday')); // false
console.log(str.repeat(5)); // repeat the string 5 times