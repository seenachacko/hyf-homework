import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";
function Todo({ todo, deleteTodo, updateTodo }) {
  const [status, setStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newdescription, setNewDescription] = useState(todo.description);

  const check = () => {
    setStatus(!status);
  };

  const editStatus = () => {
    return  setIsEditing(!isEditing);
  };

  const updateButton = () => {
    if (newdescription === "") {
      alert("plese enter the task");
    } else {
      updateTodo(todo.id, newdescription);
      setIsEditing(!isEditing);
    }
  };
  const editingTemplate = (
    <ul>
      <li className="todo">
        <input
          value={newdescription}
          type="text"
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
        <button className="green-button" onClick={updateButton}>
          update
        </button>
        <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>
      </li>
    </ul>
  );

  const viewTemplate = (
    <>
      <Border>
        <li
          className="todo"
          style={{ textDecoration: status ? "line-through" : "none" }}
        >
          {todo.description} - {todo.deadline}
          <input type="checkbox" value={todo.id} onClick={check}></input>
          <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
            delete
          </button>
          <button className="green-button" onClick={editStatus}>
            Edit
          </button>
        </li>
      </Border>
    </>
  );

  return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
}

export default Todo;
//This validation with propTypes is not working.I am not sure how to do that
//plese give a suggetion 

Todo.propTypes = {
  toDo: PropTypes.object,
  newdescription: PropTypes.string,
};
