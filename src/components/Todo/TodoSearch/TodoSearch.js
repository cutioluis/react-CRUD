import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section>
      <input
        className="welcome__input"
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Buscar tareas"
      />
      <p></p>
    </section>
  );
};

export default TodoSearch;
