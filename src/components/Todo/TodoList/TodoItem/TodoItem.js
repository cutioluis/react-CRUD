import React from "react";
import "./TodoItem.css";
import { RiDeleteBin7Fill } from "react-icons/ri";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <section className="items">
      <div className="items_input">
        <input
          onClick={onComplete}
          className="items__checkbox"
          type="checkbox"
        />
        <p className={` ${completed ? "items__through" : "items__text"} `}>
          {text}
        </p>
        <RiDeleteBin7Fill
          onClick={onDelete}
          style={{
            cursor: "pointer",
            margin: '0 10px',
            textAlign: "end",
            color: "white",
          }}
        />
      </div>
    </section>
  );
};

export default TodoItem;
