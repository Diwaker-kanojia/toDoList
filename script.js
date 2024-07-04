let addBtn = document.querySelector("button");
let taskList = document.querySelector(".task-list");
let countTask = document.querySelector("span");
let counter = 0;
let inputTask = document.querySelector("#input-field");
let task;
addBtn.addEventListener("click", (e) => {
  if (inputTask.value == "" || inputTask.value == " ") {
    alert("Enter Task");
  } else {
    task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
            
            <li>${inputTask.value}</li>
            <div>
              <button id="done-btn"><i class="fa-regular fa-circle-check"></i></button>
              <button id="remove-btn"><i class="fa-regular fa-trash-can"></i></button>
            </div>
    `;
    counter++;
    inputTask.value = "";
    taskList.prepend(task);
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.id == "remove-btn") {
    const taskItem = e.target.parentElement.parentElement;
    taskItem.remove();
  } else if (e.target.parentElement.id == "remove-btn") {
    const taskItem = e.target.parentElement.parentElement.parentElement;
    taskItem.remove();
  }
  if (e.target.id == "done-btn") {
    const taskItem = e.target.parentElement.parentElement;
    const li = taskItem.childNodes;
    li[1].classList.toggle("completed");
  } else if (e.target.parentElement.id == "done-btn") {
    const taskItem = e.target.parentElement.parentElement.parentElement;
    const li = taskItem.childNodes;
    li[1].classList.toggle("completed");
  }
});

// let addBtn = document.querySelector('button');
// let taskList = document.querySelector('.task-list');

// addBtn.addEventListener('click', (e) => {
//   let inputTask = document.querySelector('#input-field').value;
//   const task = document.createElement('div');
//   task.classList.add('task');

//   // Create the list item and buttons container
//   task.innerHTML = `
//     <li>${inputTask}</li>
//     <div class="buttons">
//       <button id="done-btn"><i class="fa-regular fa-circle-check"></i></button>
//       <button id="remove-btn"><i class="fa-regular fa-trash-can"></i></button>
//     </div>
//   `;

//   // Clear the input field after adding a task
//   inputTask.value = "";

//   // Prepend the new task to the list
//   taskList.prepend(task);
// });

// // Handle clicks on the task list
// taskList.addEventListener('click', (e) => {
//   // Check if the click target is a "remove-btn" button
//   if (e.target.id === "remove-btn") {
//     // Get the "task" element containing the button
//     const taskItem = e.target.parentElement.parentElement;
//     // Remove the task element from the list
//     taskItem.remove();
//   }
// });
