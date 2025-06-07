const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskContainer = document.getElementById("new-elements");
const remainingCapsule = document.getElementById("remaining-capsule");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (!taskText) return;

  const task = {
    id: Date.now().toString(),
    text: taskText
  };

  addTaskToDOM(task);
  saveTask(task);
  input.value = "";
});

function addTaskToDOM(task) {
  remainingCapsule.style.display = "flex";

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("data-id", task.id);

  const taskContent = document.createElement("p");
  taskContent.classList.add("task-text");
  taskContent.textContent = task.text;

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "https://img.icons8.com/quill/50/filled-trash.png";
  deleteIcon.classList.add("task-delete");
  deleteIcon.addEventListener("click", () => {
    taskItem.remove();
    removeTask(task.id);
    if (taskContainer.children.length === 0) {
      remainingCapsule.style.display = "none";
    }
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteIcon);
  taskContainer.appendChild(taskItem);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    remainingCapsule.style.display = "flex";
    tasks.forEach(addTaskToDOM);
  }
}

loadTasks();
