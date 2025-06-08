/* 버튼 클릭 시 특정 li 삭제 */
todoList.addEventListener("click", function(event) {
    const deleteBtn = event.target.closest(".delete_btn");
    if (deleteBtn) {
        const li = deleteBtn.closest("li");
        const liDataId = li.dataset.id;

        todoListItem[liDataId].deleted = true;
        li.remove();
    }
})

/* 전체 삭제 버튼 클릭 시 모든 li 삭제 */
const allDelBtn = document.getElementById("allDelBtn");
allDelBtn.addEventListener("click", function(event) {
    const confirmAns = confirm('할 일 목록을 전부 삭제하시겠습니까?');
    if(confirmAns) {
        for (element of todoListItem) {
           element.deleted = true;
        }
        todoList.innerHTML = '';
    }
})