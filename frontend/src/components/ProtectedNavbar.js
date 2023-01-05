import React from "react";
import { SiTodoist } from "react-icons/si";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../Slices/userReducer";
export default function ProtectedNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(userLogOut());
    navigate("/signin");
  };

  return (
    <div className="flex justify-between overflow-hidden fixed top-0 w-full py-2.5 px-40 z-[10]">
      <div className="text-[2rem] opacity-70 flex justify-center items-center ">
        <SiTodoist />
        <div className="pl-[1rem]">
          {[..."TodoList"].map((letter) => (
            <span className="logo-letter font-bold">{letter}</span>
          ))}
        </div>
      </div>
      <div>
        <ul className="flex justify-between flex-1 text-[1.5rem] text-[rgba(0,0,0,0.5)] font-bold">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to={"addTodo"}>Add Todo</Link>
          </li>
          <li onClick={handleLogOut}>
            <span className="hover:cursor-pointer">LogOut</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
