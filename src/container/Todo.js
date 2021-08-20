import React from "react";
import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";

const Todo = () => {
  return (
    <>
      <section style={{
        textAlign: 'center'
      }}>
        <TodoWelcome />
        <TodoSearch />
      </section>
    </>
  );
};

export default Todo;
