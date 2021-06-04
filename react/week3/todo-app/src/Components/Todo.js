import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";
function Todo({ toDo, deleteTodo, updateTodo }) {
  const [status, setStatus] = useState(false);
  const [isEditing, setEditState] = useState(false);
  const [newdescription, setDescription] = useState(toDo.description);

  const check = () => {
    setStatus(!status);
  };

  const editStatus = () => {
    return setEditState(!isEditing);
  };

  const updateButton = () => {
    if (newdescription === "") {
      alert("plese enter the task");
    } else {
      updateTodo(toDo.id, newdescription);
      setEditState(!isEditing);
    }
  };
  const editingTemplate = (
    <>
      <li className="todo">
        <input
          value={newdescription}
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <button className="update-button" onClick={updateButton}>
          update
        </button>
        <button className="delete-button" onClick={() => deleteTodo(toDo.id)}>
          delete
        </button>
      </li>
    </>
  );

  const viewTemplate = (
    <>
      <Border>
        <li
          className="todo"
          style={{ textDecoration: status ? "line-through" : "none" }}
        >
          {toDo.description} - {toDo.deadline}
          <input type="checkbox" value={toDo.id} onClick={check}></input>
          <button className="delete-button" onClick={() => deleteTodo(toDo.id)}>
            delete
          </button>
          <button className="edit-button" onClick={editStatus}>
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
