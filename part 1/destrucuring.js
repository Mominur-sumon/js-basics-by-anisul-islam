// Array destructuring
const numbers = [10,20,30,40,50];
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1, num2, num3, num4, num5); // 10 20 30 40 50

// objecr destructuring

const person = {
    id: 1,
    name: 'John Doe',
    age: 25,
    country: 'Canada',
};

const {id, name, age, country} = person;
console.log(id, name, age, country); // 1 John Doe 25 Canada

// Nested object destructuring
const person1 = {
    id: 1,
    name: 'John Doe',
    age: 25,
    country: 'Canada',
    address: {
        city: 'Toronto',
        street: '123 Main Street',
    },
};

const {id: id1, name: name1, age: age1, country: country1, address: {city, street}} = person1;
console.log(id1, name1, age1, country1, city, street); // 1 John Doe 25 Canada Toronto 123 Main Street

const students ={
    id: 1,
    name: 'John Doe', 
}

const studentInfo = ({id, name}) => {
    console.log(id, name);
};
studentInfo(students); // 1 John Doe