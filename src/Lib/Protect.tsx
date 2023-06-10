import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedstate } from "../Store/Slices/AuthSlice";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Protected({ children }: Props) {
  const isloggedin = useSelector(selectLoggedstate);
  if (!isloggedin) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
}
