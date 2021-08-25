import React, { useState } from "react";

import TodoUI from "./TodoUI";
/* 
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
]; */

function useLocalStorage(itemName, initialValue) {
  /* Nombre de nuestro localStorageItem */
  const localStorageItem = localStorage.getItem(itemName);
  /* Array por defecto para user NEWs */
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringTodos);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];
}

const Todo = () => {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    /* Metodo Splice */
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoUI
      totalTodos={totalTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      completedTodos={completedTodos}
      search={search}
      setSearch={setSearch}
      filterTodos={filterTodos}
    />
  );
};

export default Todo;
