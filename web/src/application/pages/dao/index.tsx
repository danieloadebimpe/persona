import { selectConnection } from "application/redux";
import React from "react";
import { useSelector } from "react-redux";

export default function AppDAO() {
  const conn = useSelector(selectConnection);
  console.log(conn);
  return <>this is the DAO</>;
}
