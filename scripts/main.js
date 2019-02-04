var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mylogountitled.png') {
      myImage.setAttribute ('src','images/iphonexsmax.png');
    } else {
      myImage.setAttribute ('src','images/mylogountitled.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
   var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Samsung is quality, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Samsung is quality, ' + storedName;
}	
myButton.onclick = function() {
  setUserName();
}