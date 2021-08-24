import React from "react";

function ToDoForm(props) {
  return (
    <form onSubmit={props.handelOnSubmit}>
      <input
        type="text"
        autoComplete="off"
        placeholder="enter your todo"
        value={props.newTodo}
        onChange={props.handelOnChange}
      />
      <input type="submit" />
    </form>
  );
}

export default ToDoForm;
