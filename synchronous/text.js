
// synchronous programming

function task1() {
    console.log("task 1");
}

function task2() {
    setTimeout(() => {
        console.log("task 2");
    }, 2000);
    // console.log("task 2");
}

function task3() {
    console.log("task 3");
}

function task4() {
    console.log("task 4");
}

function task5() {
    console.log("task 5");
}

function task6() {
    console.log("task 6");
}

task1();
task2();
task3();
task4();
task5();
task6();
