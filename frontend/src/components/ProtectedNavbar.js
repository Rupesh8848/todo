import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../Slices/userReducer";
export default function ProtectedNavbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between overflow-hidden fixed top-0 w-full py-2.5 px-40">
      <div>Logo</div>
      <div>
        <ul className="flex justify-between flex-1">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to={"addTodo"}>Add Todo</Link>
          </li>
          <li onClick={() => dispatch(userLogOut())}>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
