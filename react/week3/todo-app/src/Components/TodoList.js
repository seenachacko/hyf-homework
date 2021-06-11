import React from "react";
import Todo from "./Todo";
function TodoList({ todoList, deleteTodo, updateTodo }) {
  return (
    <div>
      
        {todoList.length > 0
          ? todoList.map((item) => (
              <Todo
                key={item.id}
                todo={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          : "No items left !!!"}
      
    </div>
  );
}

export default TodoList;
