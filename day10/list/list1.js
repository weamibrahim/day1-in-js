let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");


let arrayOfTasks = [];

if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getfromlocal();


submit.onclick = function () {
  if (input.value !== "") {
    addtoarray(input.value); 
    input.value = ""; 
  }
  else{
    alert("you should enter value")
  }
};


tasksDiv.addEventListener("click", (e) => {
 
  if (e.target.classList.contains("del")) {
  
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
 
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains('complete')) {
  

  
  e.target.parentNode.classList.toggle('finished')


  }
 
});

function addtoarray(taskText) {
 
  const task = {
    id: Date.now(),
    title: taskText,
   
  };

  arrayOfTasks.push(task);

 addtopage(arrayOfTasks);

  adddatatolocal(arrayOfTasks);
}

function addtopage(arrayOfTasks){
 
  tasksDiv.innerHTML = "";
 
  arrayOfTasks.forEach((task) => {
    
    let div = document.createElement("div");
    div.className = "task";
  
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));

 
      let completeElement = document.createElement("span");
      
       let completetext= document.createTextNode("complete");
       
      completeElement.appendChild(completetext);
      completeElement.className='complete';
      div.appendChild(completeElement)
   
    div.appendChild(span);
   
    tasksDiv.appendChild(div);
  });
}

function adddatatolocal(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getfromlocal() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
   addtopage(tasks);
  }
}

function deleteTaskWith(taskId) {
 
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  adddatatolocal(arrayOfTasks);
}

