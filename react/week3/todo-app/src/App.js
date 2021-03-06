import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Timer from "./Components/Timer";
import TodoList from "./Components/TodoList";
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const api =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then(
        (fetchedTodoList) => {
          setIsLoaded(true);
          setTodoList(fetchedTodoList);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (!isLoaded) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error:{error.message}</div>;
  }

  const addTodo = (userInput, startDate) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        description: userInput,
        deadline: startDate.toISOString().substring(0, 10),
      },
    ]);
  };
  const deleteTodo = (id) => {
    const myNewTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(myNewTodoList);
  };

  const updateTodo = (id, newdescription) => {
    todoList.map((item) => {
      if (item.id === id) {
        item.description = newdescription;
      }
      return item;
    });
  };
  return (
    <div className="main-Container">
      <Header />
      <Timer />
      <AddTodo addTodo={addTodo} />

      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
