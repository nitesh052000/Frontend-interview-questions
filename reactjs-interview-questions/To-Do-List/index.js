(function () {
  const todoInput = document.getElementById("todo-input");
  const addtodoBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const todoCount = document.getElementById("todo-count");

  let todos = [];

  window.onload = () => {
    const savedTodos = localStorage.getItem("todos");
    todos = savedTodos ? JSON.parse(savedTodos) : [];
    renderTodos();
  };

  addtodoBtn.addEventListener("click", function () {
    const text = todoInput.value.trim();

    if (text === "") return;

    todos.push({ id: Date.now(), text, completed: false });
    todoInput.value = "";
    saveandrender();
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = e.target.parentElement.dataset.id;
      todos = todos.filter((todo) => todo.id != id);
    }
    saveandrender();
  });

  //   saveandrender todos

  function saveandrender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    sessionStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }

  // render todos
  function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.dataset.id = todo.id;

      const span = document.createElement("span");
      span.textContent = todo.text;

      const delBtn = document.createElement("button");
      delBtn.textContent = "X";
      delBtn.className = "delete-btn";

      li.appendChild(span);
      li.appendChild(delBtn);
      todoList.appendChild(li);
    });
  }
})();
