import React, { useState } from "react";
import TodoSearch from "../components/Todo/TodoSearch/TodoSearch";
import TodoWelcome from "../components/Todo/TodoWelcome/TodoWelcome";
import TodoCounter from "../components/Todo/TodoCounter/TodoCounter";
import TodoAdd from "../components/Todo/TodoAdd/TodoAdd";

import TodoList from "../components/Todo/TodoList/TodoList";
import TodoItem from "../components/Todo/TodoList/TodoItem/TodoItem";

const defaultTodos = [
  {
    id: 0,
    text: "Pasear a mis perros y darles de comer ",
    completed: false,
  },
  {
    id: 1,
    text: "Aprobar el curso de reactjs de platzi",
    coplevel: false,
  },
  {
    id: 2,
    text: "Hacer un ecomerce con el stack MEARN para mejorar",
    completed: false,
  },
  {
    id: 3,
    text: "Terminar toda nuestra aplicacion CRUD",
    completed: false,
  },
];

const Todo = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState("");

  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  const completeTodo = (text) => {
    /* Buscar la posicion de array INDEX */
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    /* Metodo Splice */
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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

export default Todo;
