const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDo() {
  const toDoString = JSON.stringify(toDos); //배열모양의 문자열로 저장
  localStorage.setItem("todos", toDoString); //문자열을 localStorage에 저장할때 형식은?
  console.log(localStorage.getItem("todos")); //문자열에 대한 console.log의 반환값은 문자열이 아니다?
  console.log(JSON.parse(localStorage.getItem("todos")));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  toDoInput.value = "";
  paintToDo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDo);
}
