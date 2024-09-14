
//fetch data from api
// 2ways to fetch data from api
// 1. fetch() method
// 2. async await method
// fetch() method

// +fetch is easy to use compared to XMLHttpRequest
// +fetch is promise based
// - retured promise will not reject on HTTP error status
// - fetch is not supported in IE

console.clear();
console.log(window.fetch);

fetch('https://jsonplaceholder.typicode.com/todos/1',{ // // use posts to show all
    method: "POST",
    headers: {
        'Content-Type': 'application/json ; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
})
 
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.log(error));