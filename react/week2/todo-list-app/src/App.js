import React, { useState } from 'react';
import Header from './Components/Header';
import './App.css';
import todoArray from './data.json';
import Timer from './Components/Timer';
import Todolist from './Components/TodoList';
function App() {
  const randomList = ["do dishes", "party on next door", "Do laundry", "make food"]
  const [todoList, setTodoList] = useState(todoArray);
  const addTodo = () => {
    const randomIndex = Math.floor(Math.random() * randomList.length);
    setTodoList([...todoList, {
      id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
      description: randomList[randomIndex],
      complete: false
    }])
    console.log(todoList);
  }
  function deleteTodo(id){
    const myNewTodoList= todoList.filter((todo)=>todo.id !==id);
    setTodoList(myNewTodoList);
  }
  return (
    <div className="main-Container">
      <Header />
      <Timer />
      <Todolist toDoList={todoList} deleteTodo={deleteTodo} />
      <button className="add-button"onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
