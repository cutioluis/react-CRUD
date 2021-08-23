import React, { useState } from "react";
import "./TodoSearch.css";

const TodoSearch = () => {

    const onSearchValueChanged = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

  const [search, setSearch] = useState('');
  return (
    <section>
      <input
        className="welcome__input"
        type="text"
        value={search}
        onChange={onSearchValueChanged}
        placeholder="Buscar tareas"
      />
      <p>{search}</p>
    </section>
  );
};

export default TodoSearch;
