import React from "react";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.css";
import {
  createContainer,
  getAllContainerTitle,
} from "../Slices/containerSlice";
import TodoContainerCard from "../components/TodoContainerCard";
export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(createContainer(title));
  };

  React.useEffect(() => {
    dispatch(getAllContainerTitle());
  }, []);

  const containerTitleList = useSelector(
    (state) => state?.container?.containerTitles
  );

  return (
    <section className="addTodo-section">
      <div className="main-container">
        <div className="container-titles">
          <div className="add-title-input-button">
            <InputField
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Title"
            />
            <button className="add-title-button" onClick={handleClick}>
              Add Title
            </button>
          </div>
          {containerTitleList.map((container) => (
            <TodoContainerCard key={container._id} container={container} />
          ))}
        </div>
      </div>
    </section>
  );
}
