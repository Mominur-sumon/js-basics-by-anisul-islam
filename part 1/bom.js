let locationDiv = document.querySelector('.location-div') ;
let p1  = locationDiv.children[0] ;
p1.textContent = 'Location: ' + location.href ;
let p2 = locationDiv.children[1] ;
p2.textContent = 'Host: ' + location.host ;
let p3 = locationDiv.children[2] ;
p3.textContent = 'Pathname: ' + location.pathname ;
let p4 = locationDiv.children[3] ;
p4.textContent = 'Protocol: ' + location.protocol ;
let p5 = locationDiv.children[4] ;
p5.textContent = 'port: ' + location.port ;

const visitButton = document.getElementById('visit-button') ;
visitButton.addEventListener('click', () => {
    location.assign('https://www.google.com') ;
}) ;
