
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

async function runAllTasks() { // const runAllTasks = async () => {
    try {
        const task1 = await taskOne();
        console.log(task1);
        const task2 = await taskTwo();
        console.log(task2);
        const task3 = await taskThree();
        console.log(task3);
        const task4 = await taskFour();
        console.log(task4);
        const task5 = await taskFive();
        console.log(task5);
        console.log('All tasks are completed');
    } catch (error) {
        console.log(error);
    }
}

runAllTasks();