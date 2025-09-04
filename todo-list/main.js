let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "Удалить";
    btn.onclick = () => removeTask(index);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);