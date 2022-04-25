/* global document */ //to make it global object which can be accessed 
// from anywhere in documnet.
var myHeading = document.querySelector('h1')
       myHeading.textContent='HELLO !!!!!!!!!!!!'
'use strict'; 
var image = document.querySelector('img');
image.onclick=function (){
    var myimage = image.getAttribute('src');
    if (myimage ==='images/download.png'){
        image.setAttribute('src', 'images/logo new.png');
    }else{
        image.setAttribute('src', 'images/download.png');
    }
};
// PERSONALIZED WELCOME MESSAGE CODE--
var nameButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName() {
    'use strict';
    var myName = window.prompt('Please Enter your name:');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Have A Nice Day, '+myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent='Have A Nice Day, '+storedName;
}
nameButton.onclick = function (){
    'use strict';
    setUserName();
};