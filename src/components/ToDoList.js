import React from "react";

function ToDoList(props) {
  return (
    <div>
      {props.todoList.length
        ? props.todoList.map((item) => {
            return (
              <div key={item.id}>
                {item.title}{" "}
                <button onClick={() => props.handelDeleteBtn(item)}>
                  Delete
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default ToDoList;
