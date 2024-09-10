function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));

// Arrow function
const add1 = (num1, num2) => num1 + num2;
console.log(add1(5, 10));

// if we use only one parameter, we can omit the parentheses
// const square = num => num * num;
// if we don't have any parameter, we need to use parentheses
// const greet = () => 'Hello World';
// if we have more than one line of code, we need to use curly braces
// const greet = () => {
//     console.log('Hello World');
//     console.log('Hello World');
// };

const students = [
    {
        name: 'John Doe',
        age: 25,
        country: 'Canada',
    },
    {
        name: 'Jane Doe',
        age: 22,
        country: 'USA',
    },
    {
        name: 'Jack Doe',
        age: 32,
        country: 'Australia',
    },
    {
        name: 'Jill Doe',
        age: 28,
        country: 'UK',
    }

];
console.log(students);
const names = students.filter(student => student.age > 25)
.map(student => student.name);
console.log(names); // ['Jack Doe', 'Jill Doe']
