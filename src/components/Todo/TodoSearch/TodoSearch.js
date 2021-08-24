import React, { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = ({ search, setSearch }) => {

  return (
    <section>
      <input
        className="welcome__input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Buscar tareas"
      />
      <p>{search}</p>
    </section>
  );
};

export default TodoSearch;
