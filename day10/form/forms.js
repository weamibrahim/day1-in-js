// id for body

var bgbody=document.getElementById("body")
bgbody.style.backgroundImage='url(4110786-959008197.jpg)'


// id button
var btn=document.getElementById("main")

btn.style.backgroundColor="green"
btn.style.color="white"
btn.onmouseover=function(){
    btn.style.backgroundColor="rgb(22, 202, 127)";
    btn.style.color="white";
}
btn.onmouseout=function(){
    btn.style.backgroundColor="green"
    btn.style.color="white"
}

//id for div for form
var bgform=document.getElementById("container")
bgform.style.backgroundColor="rgba(255, 255, 255,0.1)"




// id name
var na=document.getElementById("na")
// id password
var pass=document.getElementById("pass")

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



pass.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


pass.onblur = function() {
  document.getElementById("message").style.display = "none";
}


pass.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pass.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(pass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }}

//function for not direct 
function onFormSubmit(){
  return false;
}


