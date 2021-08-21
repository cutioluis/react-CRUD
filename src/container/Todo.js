import React from "react";
import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";
import TodoCounter from "../components/Todo/TodoCounter/TodoCounter";
import TodoAdd from "../components/Todo/TodoAdd/TodoAdd";

import TodoList from "../components/Todo/TodoList/TodoList";
import TodoItem from "../components/Todo/TodoList/TodoItem/TodoItem";

const todos = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur dod",
    completed: true,
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur dod",
    coplevel: false,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur dod",
    completed: true,
  },
];

const Todo = () => {
  return (
    <>
      <section
        style={{
          textAlign: "center",
        }}
      >
        <TodoWelcome />
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <TodoAdd />
      </section>
    </>
  );
};

export default Todo;
