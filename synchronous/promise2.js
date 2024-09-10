const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 1 is completed');
    });
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2 is completed');
        }, 2000);
    });
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 3 is completed');
    });
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 4 is completed');
    });
}
const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 5 is completed');
    });
}

console.log("welcome to synchronous promise");

taskOne().then((res) => {
    console.log(res);
    return taskTwo();
})
.then((res) => {
    console.log(res);
    return taskThree();
}
).then((res) => {
    console.log(res);
    return taskFour();
}
).then((res) => {
    console.log(res);
    return taskFive();
}
).then((res) => {
console.log(res);
console.log('All tasks are completed');
}

).catch((err) => {
console.log(err);
}
);
