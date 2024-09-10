// for of loop is used to iterate over the values of an iterable object like an array or a string.

const names = ['John', 'Jane', 'Jack', 'Jill'];
for (const name of names) {
    console.log(name);
}

//for in loop is used to iterate over the properties of an object.
const person = {
    name: 'John Doe',
    age: 25,
    country: 'Canada'
};  

for (const key in person) {
    console.log(key, person[key]);
}

// forEach loop 
names.forEach(name => {
    console.log(name);
})

console.log("==================================");
names.forEach(function(x){
    console.log(x);
});
const numbers = [1, 2, 3, 4, 5];
const squares = []; 
numbers.forEach(number => {
    squares.push(number * number);
});
console.log(numbers);
console.log(squares);

// add 5 to each number
numbers.forEach((number, index, arr) =>{
    arr[index] = number + 5;
});
console.log(numbers);