let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let numbers = [...numbers1, ...numbers2];
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const person1 = {
    name: 'John Doe',
    age: 25
};
const person2 = {
    ocupassion: 'Software Developer',
    country: 'Canada'
};

const person = {...person1, ...person2};
console.log(person); // {name: "John Doe", age: 25, ocupassion: "Software Developer", country: "Canada"}