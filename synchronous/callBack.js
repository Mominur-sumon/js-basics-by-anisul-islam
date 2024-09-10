
//CallBack and higher order function 

function squre(x){
    console.log(x*x);
}

// const y = squre;
// y(5);


// higher order function

function higherOrderFunction(num, callback){
    callback(num);
}
// higherOrderFunction(6, squre);



function task1(callback) {
    console.log("task 1");
    callback();
}

function task2(callback) {
    setTimeout(() => {
        console.log("task 2 Data loading");
    }, 2000);
    callback();
   
}

function task3(callback) {
    console.log("task 3");
    callback();
}

function task4(callback) {
    console.log("task 4");
    callback();
}

function task5(callback) {
    console.log("task 5");
    callback();
}

function task6() {
    console.log("task 6");
}


task1(function f1(){
    task2(function f2(){
        task3(function f3(){
            task4(function f4(){
                task5(function f5(){
                    task6(function f6(){
                        console.log("task 6");
                    });
                });
            });
        });
    });
});

// or

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        console.log("task 6");
                    });
                });
            });
        });
       
    });
});