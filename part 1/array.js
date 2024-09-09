const names = ['mominur', 'rahman', 'sumon', 'mehedi', 'sagor'];
console.log(names);
// names.splice(1, 3, "karim", 'jadu');
// names.splice(2,5) ;
const slice1 = names.slice(1);
console.log(slice1);
console.log(names);



const numbers = [20, 100, 50, 70, 550, -10];
function highestScore(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) max = numbers[i]
    }
    return max;
}
console.log(highestScore(numbers));

// 2D array 
playersInfo = [
    ['Tamim', 200],
    ['Sakib', 300],
    ['Mushfiq', 100],
    ['Mashrafi', 50]

]
function highestScore2D(playersInfo) {
    let max = 0;
    let maxName = '';
    for (let i = 0; i < playersInfo.length; i++) {
        if (playersInfo[i][1] > max) {
            max = playersInfo[i][1]
            maxName = playersInfo[i][0];
        }
    }
    return maxName;
}
console.log(highestScore2D(playersInfo));

// student details 
// function constructor

function Student(name, age, roll, cgpa) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.cgpa = cgpa;
    this.display = function () {
        console.log(this.name, this.age, this.roll, this.cgpa);
    }
}
studen1 = new Student('Mominur', 22, 101, 3.50);
studen2 = new Student('Rahman', 23, 102, 3.70);
studen3 = new Student('Sumon', 24, 103, 3.90);
studen1.display();
studen2.display();
studen3.display();