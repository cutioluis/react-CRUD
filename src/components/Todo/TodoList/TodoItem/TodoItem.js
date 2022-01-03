import React from "react";
import "./TodoItem.css";
import { RiDeleteBin7Fill } from "react-icons/ri";

const TodoItem = ({ title, isDone, onCompleteTodo, onDeleteTodo }) => {
  return (
    <section className="items">
      <div className="items_input">
        <input
          onClick={onCompleteTodo}
          className="items__checkbox"
          type="checkbox"
        />
        <p className={isDone ? "items__through" : "items-text"}>{title}</p>
        <RiDeleteBin7Fill onClick={onDeleteTodo} className="icon-delete" />
      </div>
    </section>
  );
};

export default TodoItem;
