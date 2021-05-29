import React, { useState } from 'react';
import Header from './Components/Header';
import './App.css';
import todoArray from './Components/Mylist.json';
import Timer from './Components/Timer';
import Todolist from './Components/TodoLsit';
function App() {
  const randomList = ["do dishes", "party on next door", "Do laundry", "make food"]
  const [toDoList, setToDoList] = useState(todoArray);
  const addTodo = () => {
    const randomIndex = Math.floor(Math.random() * randomList.length);
    setToDoList([...toDoList, {
      id: toDoList.length + 1,
      description: randomList[randomIndex],
      complete: false
    }])
  }
  function deleteTodo(id){
    const myNewTodoList= toDoList.filter((todo)=>todo.id !==id);
    setToDoList(myNewTodoList);
  }
  return (
    <div className="mainContainer">
      <Header />
      <Timer />
      <Todolist toDoList={toDoList} deleteTodo={deleteTodo} />
      <button className="addbutton"onClick={addTodo}>Add Button</button>
    </div>
  );
}

export default App;
