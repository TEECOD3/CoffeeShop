import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedstate } from "../Store/Slices/AuthSlice";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Protected({ children }: Props) {
  const location = useLocation();
  const isloggedin = useSelector(selectLoggedstate);
  if (!isloggedin) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <div>{children}</div>;
}
