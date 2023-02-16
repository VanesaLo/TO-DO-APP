import React from "react";
import { useAppSelector } from "../redux/hooks/hooks";

const TotalCompleteItems = () => {
  const complete = useAppSelector((state) =>
    state.todos.filter((todo) => todo.complete === true)
  );
  return <h5>Total Complete Items: {complete.length}</h5>;
};

export default TotalCompleteItems;
