// operator 
// let  num1 = parseFloat(prompt("Enter the first number")) ;
// let  num2 = parseFloat(prompt("Enter the second number")) ;
// console.log(num1, typeof num1);
// document.write(num1  +" * " + num2 +" = " + (num1 - num2) + "<br>") ;
// document.write(num1  +" + " + num2 +" = " + (num1 + num2) + "<br>") ;
// document.write(num1  +" * " + num2 +" = " + (num1 * num2) + "<br>") ;
// document.write(num1  +" / " + num2 +" = " + (num1 / num2) + "<br>") ;
// document.write(num1  +" % " + num2 +" = " + (num1 % num2) + "<br>") ;

//farenheight to celcius  convert
// const  farentHeight = parseFloat(prompt("Enter the the farenheight temparature")) ;
// const celcius = (farentHeight -32)*5 /9 ;
// document.write(farentHeight + "F = "+celcius+" C");


// JS function 
function squre (a){
    return a**2 ;

}
console.log(squre(10));
console.log(squre(10000));

const x = function add (a,b){
    return a + b ;
}
console.log(x(10,20));

(function add(a,b){
    console.log(a+b);
})(10,20) ;
(function add(a,b){
    console.log(a+b);
})(30,50);

const d = new Date();
console.log(d);