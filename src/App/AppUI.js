import React from "react";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";
import TodoCounter from "../components/Todo/TodoCounter/TodoCounter";

import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoAdd from "../components/Todo/TodoAdd/TodoAdd";
import TodoList from "../components/Todo/TodoList/TodoList";
import TodoItem from "../components/Todo/TodoList/TodoItem/TodoItem";

const AppUI = ({
  todos,
  filterTodos,
  completedTodos,
  allTodos,
  search,
  setSearch,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <section className="container-todo">
        <TodoWelcome />
        <TodoCounter all={allTodos} completed={completedTodos} />
        <section className="container-search">
          <TodoSearch search={search} setSearch={setSearch} />
          <TodoAdd />
        </section>
        <TodoList>
          {filterTodos.map((todo, index) => (
            <TodoItem
              key={index}
              title={todo.title}
              isDone={todo.isDone}
              onCompleteTodo={() => completeTodo(todo.title)}
              onDeleteTodo={() => deleteTodo(todo.title)}
            />
          ))}
        </TodoList>
      </section>
    </>
  );
};

export default AppUI;
