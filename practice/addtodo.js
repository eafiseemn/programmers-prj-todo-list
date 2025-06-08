import { deleteToDo } from "./deletetodo.js";

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const todoInput = todoForm.querySelector("input");

function paintToDo(newTodo='') {
    /*
    <li>
        <input type = "checkbox">
            <span>newTodo</span>
            <button>Delete</button>
        </input>
    </li>
    */
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    const button = document.createElement('button');
    checkbox.type = 'checkbox';
    button.innerText = '✕';
    button.addEventListener("click", deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
