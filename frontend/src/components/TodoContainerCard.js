import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContainer,
  getAllContainerTitle,
  selected,
} from "../Slices/containerSlice";
import { getTodos } from "../Slices/todoSlice";
import "./TodoContainerCard.styles.css";

export default function TodoContainerCard({ container }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteContainer(container._id));
    await dispatch(getAllContainerTitle());
  };

  const handleClick = () => {
    dispatch(selected(container._id));
    dispatch(getTodos(container._id));
  };

  const selectedCardId = useSelector(
    (state) => state?.container?.selectedContainer
  );

  return (
    <div
      className={`container-card ${
        selectedCardId === container._id ? "selected" : null
      }`}
      onClick={handleClick}
    >
      <span>{container.title}</span>
      <div className="container-trash-icon" onClick={handleDelete}>
        <BsTrash />
      </div>
    </div>
  );
}
