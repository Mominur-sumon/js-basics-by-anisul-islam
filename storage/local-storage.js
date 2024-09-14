
// Set data to local storage with key-value pair
// localStorage.setItem('userName', 'Mominur');
// localStorage.setItem('password', '123456');

// const userName = localStorage.getItem('userName');
// const password = localStorage.getItem('password');
// console.log(userName, password);

// update local storage
// localStorage.setItem('userName', 'Mominur Rahman');
// localStorage.setItem('password', '123789654');

// remove item from local storage
// localStorage.removeItem('userName');
// localStorage.removeItem('password');

const countreis = ['Bangladesh', 'India', 'Pakistan', 'Nepal', 'Bhutan'];
localStorage.setItem('countries', JSON.stringify(countreis));


// get data from local storage of array
const countries = JSON.parse(localStorage.getItem('countries'));
console.log(countries);
