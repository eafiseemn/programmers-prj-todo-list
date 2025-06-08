const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const inputWrap = todoForm.getElementsByClassName("input_wrap")[0];

const todoInput = todoForm.querySelector("input");
const todoInputBtn = todoForm.querySelector("button");

const todoListItem = [];

/* li 요소 HTML에 삽입 */
function createToDo(newTodo, id) {
    const newLi = document.createElement("li");
    newLi.dataset.id = id;
    newLi.innerHTML = `
        <label class="todo_label">
            <input type="checkbox" class="todo_chkbox" />
            <span class="chkmark"></span>
            <span class="todo_text">${newTodo}</span>
        </label>
        <button type="button" class="delete_btn"><span class="blind">삭제</span></button>
    `;
    todoList.appendChild(newLi);
}

/* li 리스트에 저장 */
function getToDoList(newTodo, id) {
    todoListItem.push({
        dataId: id,
        text: newTodo,
        deleted: false,
    })
}


/* input으로 빈 문자열을 받았을 때 에러 메시지 추가 */
function createErrorMsg() {
    const errorMsg = document.createElement("div");
    errorMsg.className = "inputErrorMsg";
    errorMsg.innerHTML = `
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.9991 15.375V12M11.9991 8.625V8.70959M20.9983 12C20.9983 13.2938 20.7253 14.5238 20.2338 15.6356L21 20.9991L16.4039 19.85C15.1019 20.5823 13.5993 21 11.9991 21C7.02906 21 3 16.9706 3 12C3 7.02944 7.02906 3 11.9991 3C16.9692 3 20.9983 7.02944 20.9983 12Z"
                stroke="#FF6174"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
		</svg>
		<span>할 일을 입력해주세요!</span>`

    if (!inputWrap.querySelector(".inputErrorMsg")) {
    inputWrap.appendChild(errorMsg);
  } 
}


/* event 발생 시 create 또는 error 함수 실행 */
let liCounter = 0;      // data-id 추가를 위한 counter

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();

    // input이 없을 때 오류 메시지 생성
    if (!newTodo) {
        createErrorMsg();
        return;
    }

    // 할 일 추가하기
    const dataId = liCounter++;
    getToDoList(newTodo, dataId);
    createToDo(newTodo, dataId);

    // 할 일이 추가되면 오류 메시지 제거하기
    const existingErrorMsg = inputWrap.querySelector(".inputErrorMsg");
    if (existingErrorMsg) existingErrorMsg.remove();

    // 할 일 추가 완료 후 input창 비우기
    todoInput.value = '';
}

todoForm.addEventListener("submit", handleToDoSubmit);
todoInputBtn.addEventListener("click", handleToDoSubmit);

