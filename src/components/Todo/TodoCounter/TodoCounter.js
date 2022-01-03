import React from "react";

const TodoCounter = ({ all, completed }) => {
  return (
    <div>
      <p className="welcome_text">
        Haz completado{" "}
        <b>
          {" "}
          {completed} tareas de {all}
        </b>
      </p>
    </div>
  );
};

export default TodoCounter;
