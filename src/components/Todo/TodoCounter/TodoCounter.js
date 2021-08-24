import React from "react";

const TodoCounter = ({total, completed}) => {
  return (
    <div>
      <p className="welcome_text">
        Haz <b>completado {completed}</b> de {total} tareas
      </p>
    </div>
  );
};

export default TodoCounter;
