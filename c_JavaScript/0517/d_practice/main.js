//! 로컬 스토리지 활용 문제 

// 할 일 목록 저장 
let todos = [];

document.addEventListener('DOMContentLoaded', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
});

function addTodo() {
  const input = document.getElementById('todoInput');
  const newTodo = input.value.trim();
  if(newTodo) {
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value = ''; // 할 일이 끝나면 비워주기 
  }
}


function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  todos.forEach((todo, index)=> {
    const li = document.createElement('li');
    li.textContent = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => removeTodo(index);

    li.appendChild(deleteBtn);
    list.appendChild(li);
  })
}

function removeTodo(index) {
  todos.splice(index, 1); // splice >>  배열에서 해당 인덱스로 부터 몇개의 인덱스를 삭제함
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos); 
}