const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("값을 입력해주세요!");
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";

  deleteButton.style.backgroundColor = "#e74c3c";
  deleteButton.style.color = "white";
  deleteButton.style.padding = "5px";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "3px";
  //   deleteButton.style.marginLeft = "10px";
  deleteButton.style.cursor = "pointer";
  //   deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(newTask);
  });

  newTask.appendChild(deleteButton);

  todoList.appendChild(newTask);

  todoInput.value = "";
});
