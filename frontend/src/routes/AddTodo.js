import React from "react";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.css";
import {
  createContainer,
  getAllContainerTitle,
} from "../Slices/containerSlice";
import TodoContainerCard from "../components/TodoContainerCard";
import { addTodo, getTodos } from "../Slices/todoSlice";
import TodoCard from "../components/TodoCard";
export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(createContainer(title));
    setTitle("");
    await dispatch(getAllContainerTitle());
  };

  React.useEffect(() => {
    dispatch(getAllContainerTitle());
  }, []);

  const containerTitleList = useSelector(
    (state) => state?.container?.containerTitles
  );

  const selectedContiner = useSelector(
    (state) => state?.container?.selectedContainer
  );
  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    dispatch(getTodos(selectedContiner));
  };

  const { todoList } = useSelector((state) => state?.todo);

  return (
    <section className="addTodo-section">
      <div className="main-container">
        {/* Left side of the container */}
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
          {containerTitleList?.map((container) => (
            <TodoContainerCard key={container?._id} container={container} />
          ))}
        </div>

        {/* Right side of the container */}
        <div className="container-todos">
          <div className="add-todo-input">
            <InputField
              type="text"
              value={todo}
              placeholder="Add Todo"
              onChange={(event) => setTodo(event.target.value)}
            />
            <button className="add-title-button" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
          <div className="todos-list">
            {todoList?.map((todo) => (
              <TodoCard todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
