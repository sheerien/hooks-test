import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function ToDoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handelOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: newTodo, isComplete: false },
    ]);
    setNewTodo("");
  };

  const handelDeleteBtn = (item) => {
    const deleteItems = todoList.filter((ele) => ele.id != item.id);
    setTodoList(deleteItems);
  };
  const handelIsCompleted = (e, index) => {
    const todoCompleted = todoList.filter((todo) => {
      if (todo.id === index + 1) {
        todo.isComplete = e.target.checked;
      }
      return todo;
    });
    setTodoList(todoCompleted);
  };
  return (
    <div>
      <ToDoForm
        newTodo={newTodo}
        handelOnChange={handelOnChange}
        handelOnSubmit={handelOnSubmit}
      />
      <ToDoList
        todoList={todoList}
        handelDeleteBtn={handelDeleteBtn}
        handelIsCompleted={handelIsCompleted}
      />
    </div>
  );
}

export default ToDoApp;
