import React, { useState } from "react";
import AppUI from "../App/AppUI";

/* Css */
import "./Todo.css";

// make arrats with tasks
const defaultTodos = [
  {
    title: "Learn React",
    isDone: false,
  },
  {
    title: "Learn Redux",
    isDone: false,
  },
  {
    title: "Learn React Router",
    isDone: false,
  },
  {
    title: "Learn React Hooks",
    isDone: false,
  },
];

//create arrays with tasks

const Todo = () => {
  /* Local Storage using Local Storage */
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1')
  }


  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState("");

  const completedTodos = todos.filter((tod) => !!tod.isDone).length;
  const allTodos = todos.length;


  /* Toods Filter */
  const filterTodos = todos.filter((tod) => {
    return tod.title.toLowerCase().includes(search.toLowerCase());
  });

  /* Todo Complete */
  const completeTodo = (title) => {
    const todoIndex = todos.findIndex((tod) => tod.title === title);
    const newTodos = [...todos];
    newTodos[todoIndex].isDone = true;
    setTodos(newTodos);
  };

  const deleteTodo = (title) => {
    const todoIndex = todos.findIndex((tod) => tod.title === title);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      todos={todos}
      allTodos={allTodos}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      filterTodos={filterTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default Todo;
