import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <section>
      <input
        onChange={handleChange}
        className="welcome__input"
        type="text"
        placeholder="Buscar tareas"
      />
    </section>
  );
};

export default TodoSearch;
