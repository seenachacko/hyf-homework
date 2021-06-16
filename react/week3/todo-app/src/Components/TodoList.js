import React from "react";
import Todo from "./Todo";
function TodoList({ todoList, deleteTodo, updateTodo }) {
  return (
      <ul>
        {todoList.length > 0
          ? todoList.map((item) => {
              return(
                <li>
                <Todo
                  key={item.id}
                  todo={item}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
                </li>
              )
          }
           
          )
          : "No items left !!!"}
      </ul>
  
  );
}

export default TodoList;
