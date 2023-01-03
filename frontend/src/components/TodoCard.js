import React, { useLayoutEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, getTodos } from "../Slices/todoSlice";
import "./TodoCard.styles.css";
export default function TodoCard({ todo }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteTodo(todo._id));
    dispatch(getTodos());
  }
  function handleClick() {}
  return (
    <div className={`todo-card`} onClick={handleClick}>
      <span>{todo.todo}</span>
      <div className="todo-trash-icon" onClick={handleDelete}>
        <BsTrash />
      </div>
    </div>
  );
}
