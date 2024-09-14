// sessionStorage.setItem('key', 'value');

sessionStorage.setItem("userName", "Mominur");
sessionStorage.setItem("password", "123456987");
const userName = sessionStorage.getItem("userName");
const password = sessionStorage.getItem("password");
console.log(userName, password);