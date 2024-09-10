class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return `name is ${this.name} and id is ${this.id}`;
    }
}
const student1 = new Student('John', 1);
// console.log(student1.id);

// // set the name of the student and check the name
// student1.studentName = 'Jane';
// console.log(student1.name);

console.log(student1.studentInfo);


