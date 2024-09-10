// JS BOM 
// JS Timeouts
// setTimeout setInterval

setTimeout(() => {
    console.log('Hello World');
}, 2000); // this will display hello world after 2 seconds

//setTimeout(display, 2000); // this will display hello world after 2 seconds

function display() {
    console.log('Hello World from display function');
}

const saveButton = document.querySelector('.save-button');
const message = document.querySelector('.message');

saveButton.addEventListener('click', saveUser) ;

function saveUser() {
    message.textContent = 'User registration successfully completed';
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}

 