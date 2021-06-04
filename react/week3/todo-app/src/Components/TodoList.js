import React from "react";
import Todo from "./Todo";
function Todolist({ toDoList, deleteTodo, updateTodo }) {
  return (
    <div>
      <ul>
        {toDoList.length > 0
          ? toDoList.map((item) => (
              <Todo
                key={item.id}
                toDo={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          : "No items left !!!"}
      </ul>
    </div>
  );
}

export default Todolist;
