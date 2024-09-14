console.clear();
// onload , onerror
//property 
// function open() , send() , setRequestHeader() , getResponseHeader() , getAllResponseHeaders() , overrideMimeType() , responseType , response , responseText , responseXML , status , statusText , readyState , onreadystatechange , ontimeout , onabort , onloadstart , onprogress , onabort , onerror , onload , ontimeout , onloadend , upload , withCredentials

const getdata = () =>{
    const xml = new XMLHttpRequest() ;
    xml.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xml.onload = () =>{
        let data = JSON.parse(xml.responseText);
        console.log(data);
    }
    xml.send();
}

getdata();