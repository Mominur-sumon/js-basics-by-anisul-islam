

console.log("welcome to synchronous promise");


// how to create a promise

const promise1 = new Promise((resolve, reject) =>{
    let completedPromise = false; // change to true to see the resolve
    if(completedPromise){
        resolve("completed promise 1");
    } else{
        reject("not completed promise 1");
    }
})

promise1.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
console.log("end");

const promise2 = new Promise((resolve, reject) =>{
    let completedPromise = true; // change to true to see the resolve
    if(completedPromise){
        resolve("completed promise 2");
    } else{
        reject("not completed promise 2");
    }
})

promise2.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// run all promises at the same time
Promise.all([promise1, promise2]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})