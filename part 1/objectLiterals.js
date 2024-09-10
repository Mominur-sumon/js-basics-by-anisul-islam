function studentInfo(name, age, address) {
  return {
    name: name,
    age: age,
    address: address,
  };
}
console.log(studentInfo("John Doe", 25, "Canada"));

// shorthand
function studentInfo(name, age, address) {
  return {
    name,
    age,
    address,
  };
}
console.log(studentInfo("John Doe", 25, "Canada"));

//concise method
let message = {
    body: function(){
        return 'Hello World';
    }
};
console.log(message.body());



let message1 = {
    body(){
        return 'Hello World';
    }
};
console.log(message1.body());



let message2 = {
    'body name'(){
        return 'Hello World';
    }
};
console.log(message2['body name']());
