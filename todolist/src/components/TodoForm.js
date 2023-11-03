import React, { useState } from "react";

export const TodoForm = () => {
  // TODO: Melakukan handleSubmit
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Apa yang ingin kamu lakukan?" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
