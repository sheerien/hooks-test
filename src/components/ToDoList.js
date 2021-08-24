import React from "react";
import ZeroState from "./ZeroState";

function ToDoList(props) {
  return (
    <div>
      {props.todoList.length ? (
        props.todoList.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{
                textDecoration: item.isComplete ? "line-through" : "none",
              }}>
              <input
                type="checkbox"
                onChange={(e) => props.handelIsCompleted(e, index)}
              />
              {item.title}{" "}
              <button
                onClick={
                  item.isComplete ? () => props.handelDeleteBtn(item) : null
                }>
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
