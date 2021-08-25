import React from 'react';
import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";
import TodoCounter from "../components/Todo/TodoCounter/TodoCounter";
import TodoAdd from "../components/Todo/TodoAdd/TodoAdd";

import TodoList from "../components/Todo/TodoList/TodoList";
import TodoItem from "../components/Todo/TodoList/TodoItem/TodoItem";

const TodoUI = ({
    totalTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    search,
    setSearch,
    filterTodos
}) => {
    return (
        <>
        <section
          style={{
            textAlign: "center",
          }}
        >
          <TodoWelcome />
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch search={search} setSearch={setSearch} />
          <TodoAdd />
          <TodoList>
            {filterTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </section>
      </>
    );
};

export default TodoUI;