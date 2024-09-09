
console.clear();
// const div = document.querySelector('div');
// div.addEventListener('click', function (e) {
//     // console.log('Div clicked');
//     // console.log(e.target);
//     console.log(e.target.innerHTML);

// });

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

Array.from(buttons).map((button) => {
    button.addEventListener('click', function (e) {
        console.log(e.target.innerText);
    });
}
);


// div.addEventListener('dblclick',function(){
//     console.log('Div doubleclicked');
// });

// div.addEventListener('mouseup',function(){
//     console.log('Mouse up');
// });

// div.addEventListener('mousedown',function(){
//     console.log('Mouse Down');
// });

// div.addEventListener('mouseenter',function(){
//     console.log('Mouse Enter');
// });div.addEventListener('mouseleave',function(){
//     console.log('Mouse leave');
// });

// div.addEventListener('mousemove',function(){
//     // console.log('Mouse move');
//     // console.log('X: '+event.clientX+' Y: '+event.clientY);
// });
// div.addEventListener('mouseover',function(){
//     console.log('Mouse over ');
// });