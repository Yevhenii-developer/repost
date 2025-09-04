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


