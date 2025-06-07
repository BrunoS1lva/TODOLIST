const addBtn = document.getElementById("add-btn");
const form = document.getElementById("task-form");
const remainingCapsule = document.getElementById('remaining-capsule');
const newE = document.getElementById("new-elements");
const inputElement = document.getElementById("input-element");

document.addEventListener("DOMContentLoaded", loadTasks);
form.addEventListener("submit", e => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const data = inputElement.value.trim();
  if (!data) return;

  createTaskElement(data);
  saveTask(data);

  inputElement.value = '';
  remainingCapsule.hidden = false;
}

function createTaskElement(taskText) {
  const task = document.createElement('p');
  task.style.fontSize = '25px';
  task.textContent = taskText;

  const trashIcon = document.createElement('button');
  trashIcon.setAttribute('aria-label', 'Eliminar tarea');
  trashIcon.style.background = 'none';
  trashIcon.style.border = 'none';
  trashIcon.style.cursor = 'pointer';
  trashIcon.style.width = '30px';
  trashIcon.style.height = '30px';
  trashIcon.style.padding = '0';
  trashIcon.style.marginLeft = '10px';

  trashIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="30" height="30">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
      <path d="M10 11v6"></path>
      <path d="M14 11v6"></path>
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
    </svg>
  `;

  trashIcon.addEventListener('click', () => {
    newE.removeChild(task);
    newE.removeChild(trashIcon);
    removeTaskFromStorage(taskText);
    if (newE.children.length === 0) {
      remainingCapsule.hidden = true;
    }
  });

  newE.appendChild(task);
  newE.appendChild(trashIcon);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (tasks.length > 0) {
    remainingCapsule.hidden = false;
    tasks.forEach(task => createTaskElement(task));
  }
}
