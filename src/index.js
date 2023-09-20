// make an array to store the project
const myTask = [];

function project(title, description, duedate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  // the constructor...
}

project.prototype.checklistBtn = function(){
    this.checklist = !this.checklist;
}





document.getElementById('newtask-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevents the form from being submitted
    // Retrieve form input values
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var duedate = document.getElementById('duedate').value;
    var priority = document.getElementById('priority').value;
    var notes = document.getElementById('notes').value;
    var checklist = document.getElementById('checklist').checked;
    // Create an object to store the form data
    var task = {
      title: title,
      description: description,
      duedate: duedate,
      priority: priority,
      notes: notes,
      checklist: checklist
    };
    // Store the form data in local storage
    localStorage.setItem('taskData', JSON.stringify(task));
    // Optionally, you can display a confirmation message
    alert('Task has been added.');
    // Reset the form
    document.getElementById('newtask-form').reset();
  });


  




function addProjectToTask() {
    let title = document.querySelector("#title").value ;
    let description = document.querySelector("#description").value ;
    let duedate = document.querySelector("#duedate").value;
    let priority = document.querySelector("#priority").value ;
    let notes = document.querySelector("#notes").value;
    let checklist = document.querySelector("#checklist").checked ;

    let newProject = new project(title, description, duedate, priority, notes, checklist);
    myTask.push(newProject);

    displayProject();

  // do stuff here
}

function displayProject(){
    let allProject = document.querySelector("#task");//#books
    allProject.innerHTML = " ";
    for(let i = 0; i < myTask.length; i++){
        let project = myTask[i];
        let projectElement = document.createElement("div");
        projectElement.innerHTML = `
        <div class="outputcontainer">

        <form class="outputProject">
        <h2 class="title">Title -- ${project.title}</h2>
        <h4 class="description"> Description -- ${project.description}</h4>
        <p> DueDate -- ${project.duedate} </p>
        <p>Priority-- ${project.priority}  </p>
        <p>Notes-- ${project.notes} </p>
        <p class="checklist"> Status -- ${project.checklist ? "Done" : "Not Done "} </p>
        <button class="remove-btn" onclick="removeProject(${i})">Remove</button>
        <button class="checklist-btn" onclick="checklistBtn(${i})">Edit status</button>
        </div>
       
        </form>
        
        `;
        allProject.appendChild(projectElement);

    }
}//style="display: none ;"

function removeProject(index){
    myTask.splice(index, 1);
    displayProject();
}

function checklistBtn(index){
    myTask[index].checklistBtn();
    displayProject()
}

let newProjectBtn = document.querySelector('#newproject');
newProjectBtn.addEventListener("click",function(){
    let newProjectForm = document.querySelector("#newproject-form");
    newProjectForm.style.display = "block";
})


let addProjectBtn = document.querySelector("#newproject-form");
addProjectBtn.addEventListener("submit",function(event){
event.preventDefault();
addProjectToTask();
})

//project localstorage 


//todo 

const myTodo = [];

function todo(todoinput, todocheck, todoDate) {
    this.todoinput = todoinput;
    this.todocheck = todocheck;
    this.todoDate = todoDate;
   
  // the constructor...
}

todo.prototype.checklisttodoBtn = function(){
    this.todocheck = !this.todocheck;
}

function addTodoToMytodo() {
    let todoinput = document.querySelector("#todoinput").value ;
    let todoDate = document.querySelector("#todoDate").value;
    let todocheck = document.querySelector("#todocheck").checked ;
  
    
   

    let newTodo = new todo(todoinput, todoDate, todocheck);
    myTodo.push(newTodo);

    displayTodo();

  // do stuff here
}

function displayTodo(){
    let allTodo = document.querySelector("#todo");//#books
    allTodo.innerHTML = " ";
    for(let i = 0; i < myTask.length; i++){
        let todo = myTodo[i];
        let todoElement = document.createElement("div");
        todoElement.innerHTML = `
        <div class="outputcontainer2>

        <form class="outputTodo">
        <p class="title">(1) Todo -- ${todo.todoinput}</p>
        <p> DueDate -- ${todo.duedate} </p>
        <p class="checklist"> Status -- ${todo.todocheck ? "Done" : "Not Done "} </p>
        <button class="remove-btn" onclick="removetodo(${i})">Remove</button>
        <button class="checklist-btn" onclick="todoCheckBtn(${i})">Edit status</button>
        </div>
        <button id="addTodo"  > Add More To-Do </button>
        </form>
        
        `;
        allTodo.appendChild(todoElement);

    }
}


function removetodo(i){
    myTodo.splice(i, 1);
    displayTodo();
}

function todoCheckBtn(i){
    myTask[i].todoCheckBtn();
    displayProject()
}

let addTodoBtn = document.querySelector(".todo-form");
addProjectBtn.addEventListener("submit",function(event){
event.preventDefault();
addTodoToMytodo();
})

// function begintodo(){
//     let newTodoBtn = document.querySelector('.todo-form');
//     newTodoBtn.style.display = "block";
//     newProjectForm.appendChild(newTodoBtn);
// }
let addNewTodoBtn = document.querySelector('.addTodo');
addNewTodoBtn.addEventListener("click",function(){
    let addNewTodo = document.querySelector(".todo-form");
    addNewTodo.style.display = "block";
})