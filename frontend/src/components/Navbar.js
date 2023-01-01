import React from "react";
import { useSelector } from "react-redux";
import ProtectedNavbar from "./ProtectedNavbar";
import PublicNavbar from "./PublicNavbar";

export default function Navbar() {
  const { userName } = useSelector((state) => state.user);
  return <>{!userName ? <PublicNavbar /> : <ProtectedNavbar />}</>;
}
