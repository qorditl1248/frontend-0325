import React, { useState } from 'react'

//! Todo 리스트 관리

// 1. 할 일 내용(문자열) - stirng
// 2. 할 일 완료 상태(논리값) - boolena
// 3. 시간 기록(Date 날짜 타입) - Date
// 4. 할 일 삭제
//   : 삭제 버튼 클릭 시 배열에서 요소 제거

interface Todo {
  description: string; // 사용자로 부터 입력받은 데이터
  completed: boolean; // 기본값: false
  timestamp: Date; // 새로운 할 일이 생성되는 시점을 Date 객체로 생성 
}


export default function Practice01() {

  const [ todos, setTodos ] = useState<Todo[]>([]); // Todo의 배열(Todo 타입)을 가지는 빈 할 일 목록
  const [ inputTask, setInputTask ] = useState<string>(""); // input에 입력되는 내용(string 타입), 초기값은 빈 값


  //# 새로운 할 일 추가 
  const addTodo = () => {
    if(inputTask.trim() !== '') { // input에 내용이 적혀있다면 아래 실행 
      // 입력된 내용 값이 존재하는 경우 
      // : 새로운 할 일 생성
      const newTodo: Todo = {    // Todo 타입을 가지는 새로운 newTodo 생성 
        description: inputTask,  // description에는 input에 넣는 값을 넣어줌 
        completed: false,        // 완료는 기본값으로 false 부여 
        timestamp: new Date()    // 생성되는 시점은 현재 시간으로  
      };

      // 전체 할 일 배열의 요소를 가져와서 추가 내용을 마지막 요소로 추가 
      setTodos([...todos, newTodo]);

      setInputTask(''); // input안에 있는 값을 초기화
    }
  }

  //# 완료 여부를 토글하는 기능
  const toggleTodo = (index: number) => {  // 매개변수로 number 타입을 가지는 index를 가져옴 
    const newTodos = todos.map((todo, idx) => // todos 배열 안에있는 todo, idx를 순회 
      // 매개변수로 전달된 index값과 배열의 모든 요소를 순회하였을 떄
      //, 일치하는 idx값이 있는 경우 해당 요소의 완료 여부를 토글 
      idx === index ? {...todo, completed: !todo.completed} : todo // 가져온 idx와 index가 일치한다면 todo 배열 안에 완료를 true로 바꿔줌   
                                                                   // (completed의 기본값이 false) 아니라면 todo를 반환
    );
    setTodos(newTodos); // 할 일 목록에 newTodos를 넣어줌 
  }

  //# 할 일 삭제 가능
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <div style={{
      backgroundColor: 'lightblue',
      width: '400px',
      margin: '20px auto',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      <h3>할 일 목록 앱</h3>
      <input 
        type="text" 
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder='할 일을 입력해 주세요'
        />
        <button onClick={addTodo}>할 일 추가</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.description}
            (추가 시간: {todo.timestamp.toLocaleTimeString()})
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? '완료취소' : '할 일 완료'}
            </button>
            <button onClick={() => deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
