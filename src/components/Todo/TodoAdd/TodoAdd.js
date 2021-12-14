import React from "react";
import "./TodoAdd.css";

const TodoAdd = () => {
  const sayHello = () => {
    alert("Agreado tu tarea....");
  };

  return (
    <section>
      <button onClick={sayHello} className="add__btn">
        +
      </button>
    </section>
  );
};

export default TodoAdd;
