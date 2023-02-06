// id for body

var bgbody=document.getElementById("body")
bgbody.style.backgroundColor="green"


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
bgform.style.backgroundColor="white"




// id name
var na=document.getElementById("na")
// id password
var pass=document.getElementById("pass")




//function for condition
btn.onclick=function(){
if(na.value==="admin"&&pass.value=="123"){
 
  alert('welcom')

}
else{
  alert( ' warning you not register')
}

}

//function for not direct 
function onFormSubmit(){
  return false;
}


