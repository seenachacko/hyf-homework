import React, { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const newInput = (e) => {
    setUserInput(e.target.value);
  };

  const addTask = () => {
    if (userInput === "") {
      alert("please enter a task");
    } else if (!startDate) {
      alert("please enter deadline");
    } else {
      addTodo(userInput, startDate);

      setUserInput("");
    }
  };
  return (
    <div>
      <input
        value={userInput}
        type="text"
        onChange={newInput}
        placeholder="Enter new todo..."
      />
      <br />
      <DatePicker
        selected={startDate}
        minDate={new Date()}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
      />
      <br />
      <button className="green-button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
//This validation with propTypes is not working.I am not sure how to do that
//plese give a suggetion 
AddTodo.propTypes = {
  userInput: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
};
