import React from "react";
import { Link } from "react-router-dom";
export default function PublicNavbar() {
  return (
    <div className="flex justify-between overflow-hidden fixed top-0 w-full py-2.5 px-40">
      <div>Logo</div>
      <div>
        <ul className="flex justify-between flex-1">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to={""}>About</Link>
          </li>

          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
