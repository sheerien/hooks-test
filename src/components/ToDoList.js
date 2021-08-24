import React from "react";
import ZeroState from "./ZeroState";

function ToDoList(props) {
  return (
    <div>
      {props.todoList.length ? (
        props.todoList.map((item) => {
          return (
            <div key={item.id}>
              {item.title}{" "}
              <button onClick={() => props.handelDeleteBtn(item)}>
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <ZeroState />
      )}
    </div>
  );
}

export default ToDoList;
