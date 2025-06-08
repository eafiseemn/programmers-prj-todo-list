export function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}


// 추가로 해야할 일
// 1. checked 확인해서 글자로 받고 -> .todo-done > span에 넣기
// 2. .todo-done > button click event listener -> delete all checked
// 3. .profile-pic 부분 input으로 바꾸고 프로필 이미지 변경 가능하도록 만들기
// 4. li 가 삭제될 때 transition 효과 주기
// 5. 할 일이 너무 많아졌을 때 스크롤 요소 넣기
// 6. 