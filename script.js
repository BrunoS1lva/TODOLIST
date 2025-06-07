const form = document.getElementById('task-form');
const input = document.getElementById('input-element');
const remainingCapsule = document.getElementById('remaining-capsule');
const completedCapsule = document.getElementById('completed-capsule');
const newElements = document.getElementById('new-elements');
const completedElements = document.getElementById('completed-elements');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  newElements.innerHTML = '';
  completedElements.innerHTML = '';

  const remainingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  if (remainingTasks.length === 0) {
    remainingCapsule.classList.add('hidden');
  } else {
    remainingCapsule.classList.remove('hidden');
  }

  if (completedTasks.length === 0) {
    completedCapsule.classList.add('hidden');
  } else {
    completedCapsule.classList.remove('hidden');
  }

  remainingTasks.forEach(task => {
    const taskItem = createTaskElement(task);
    newElements.appendChild(taskItem);
  });

  completedTasks.forEach(task => {
    const taskItem = createTaskElement(task);
    completedElements.appendChild(taskItem);
  });
}

function createTaskElement(task) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
  taskItem.dataset.id = task.id;

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = task.text;
  taskText.title = "Click to toggle completion";
  taskText.addEventListener('click', () => toggleTask(task.id));

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.addEventListener('click', () => deleteTask(task.id));

  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);

  return taskItem;
}

function toggleTask(id) {
  tasks = tasks.map(task => 
    task.id === id ? {...task, completed: !task.completed} : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  input.value = '';
  input.focus();
});

// Inicializa la app
renderTasks();
