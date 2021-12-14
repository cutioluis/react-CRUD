import React from "react";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";
import TodoCounter from "../components/Todo/TodoCounter/TodoCounter";

import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoAdd from "../components/Todo/TodoAdd/TodoAdd";
import TodoList from "../components/Todo/TodoList/TodoList";
import TodoItem from "../components/Todo/TodoList/TodoItem/TodoItem";

/* Css */
import "./Todo.css";

const Todo = () => {
  return (
    <>
      <section className="container-todo">
        <TodoWelcome />
        <TodoCounter />
        <section className="container-search">
          <TodoSearch />
          <TodoAdd />
        </section>

        <TodoList>
          <TodoItem />
        </TodoList>
      </section>
    </>
  );
};

export default Todo;
