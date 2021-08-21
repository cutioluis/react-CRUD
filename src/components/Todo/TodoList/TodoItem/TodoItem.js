import React from "react";
import "./TodoItem.css";
import { RiDeleteBin7Fill } from "react-icons/ri";


const TodoItem = ({ text, completed }) => {
  
  function showThrough() {
    
  }

  return (
    <section className="items">
      <div className="items_input">
        <input className="items__checkbox" type="checkbox" />
        <p className={` ${completed ? "items__through" : "items__text"} `}>
          {text}
        </p>
        <RiDeleteBin7Fill style={{
          textAlign: "end",
          color: 'white',
        }} />
      </div>
    </section>
  );
};

export default TodoItem;
