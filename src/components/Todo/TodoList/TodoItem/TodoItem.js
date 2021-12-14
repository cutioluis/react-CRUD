import React from "react";
import "./TodoItem.css";
import { RiDeleteBin7Fill } from "react-icons/ri";

const TodoItem = () => {
  return (
    <section className="items">
      <div className="items_input">
        <input className="items__checkbox" type="checkbox" />
        <p>Esta es mi nueva tarea espero que completes</p>
        <RiDeleteBin7Fill className="icon-delete" />
      </div>
    </section>
  );
};

export default TodoItem;
