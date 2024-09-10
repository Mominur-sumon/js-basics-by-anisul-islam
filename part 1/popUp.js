// alert("Error occured") ;
// confirm("Are you sure you want to continue?") ;

function deleteSomething(){
    let value = confirm("Do you want to delete this?") ;
    if(value){
        console.log("file deleted") ;
    }
    else{
        console.log("file not deleted") ;
    }
}

// deleteSomething() ;

// Js prompt

function welcomeUser(){
    let h1 = document.createElement('h1') ;
    let text ;
    let name = prompt("Enter your name") ;
    if(name === null || name === ""){
        console.log("Welcome Guest") ;
    }
    else{
    text = "Welcome " + name ;
    }

    let textNode = document.createTextNode(text) ;
    h1.appendChild(textNode) ;
    document.body.appendChild(h1) ;
}

welcomeUser() ;