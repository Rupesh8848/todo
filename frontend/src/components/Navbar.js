import React from "react";
import { useSelector } from "react-redux";
import ProtectedNavbar from "./ProtectedNavbar";
import PublicNavbar from "./PublicNavbar";

export default function Navbar() {
  const { userData } = useSelector((state) => state?.user);
  console.log(userData);
  return <>{!userData ? <PublicNavbar /> : <ProtectedNavbar />}</>;
}
