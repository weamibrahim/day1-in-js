// input
let theInput = document.querySelector(".in input");
//div for all
let tasksContainer = document.querySelector(".content");

//button
var btn=document.getElementById("btn")

window.onload = function () {
    theInput.focus();
  };
  

btn.onclick = function () {
  
    // If Input is Empty
    if (theInput.value === '') {
  
      alert("you should enter value")
  
    } else {
  
      let noTasksMsg = document.querySelector(".word");
  

      if (document.body.contains(document.querySelector(".word"))) {
  
        // Remove No Tasks Message
        noTasksMsg.remove();
  
      }
  
      // Create Main Span Element
      let mainSpan = document.createElement("span");
  
      // Create Delete Button
      let deleteElement = document.createElement("span");
      // Create complete Button
      let completeElement = document.createElement("span");
      // Create The Main Span Text
      let text = document.createTextNode(theInput.value);
  
      // Create The Delete Button Text
      let deleteText = document.createTextNode("Delete");
      // Create The coplete Button Text
      let completetext= document.createTextNode("complete");
      // Add Text To Main Span
      mainSpan.appendChild(text);
  
      // Add Class To Main Span
     mainSpan.className = 'task-box';
  
      // Add Text To Delete Button
      deleteElement.appendChild(deleteText);
       // Add Text To complete Delete
  
      completeElement.appendChild(completetext);
      // Add Class To Delete Button
      deleteElement.className = 'delete';
  completeElement.className='complete';
      // Add Delete Button To Main Span
      mainSpan.appendChild(deleteElement);
  mainSpan.appendChild(completeElement)
      // Add The Task To The Container
      tasksContainer.appendChild(mainSpan);
  
      // Empty The Input
      theInput.value = '';
  
      // Focus On Field
      theInput.focus();
  
    }
  
  };
  
  document.addEventListener('click', function (e) {
  
    // Delete Task
    if (e.target.className == 'delete') {
  
      // Remove Current Task
      e.target.parentNode.remove();
  
     
    }

 
    // Finish Task
    if (e.target.classList.contains('complete')) {
  
      // Toggle Class 'finished'
    
    e.target.parentNode.classList.toggle('finished')
  
    }
  
  });