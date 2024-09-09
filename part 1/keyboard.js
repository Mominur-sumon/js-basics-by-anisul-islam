const texarea = document.querySelector('textarea');
texarea.addEventListener('keydown', function (e) {
    console.log('Key Down');
    console.log(e.target.value);
    console.log(e.key);
});
texarea.addEventListener('keyup', function (e) {
    console.log('Key Up');
    console.log(e.target.value);
});
texarea.addEventListener('keypress', function (e) {
    console.log('Key Press');
    console.log(e.target.value);
});