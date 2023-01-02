import React from "react";
import { BsTrash } from "react-icons/bs";
import "./TodoContainerCard.styles.css";
export default function TodoContainerCard({ container }) {
  return (
    <div className="container-card">
      <span>{container.title}</span>
      <BsTrash />
    </div>
  );
}
