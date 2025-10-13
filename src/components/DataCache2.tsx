import React from "react";
import Box from "@/components/Box";

type Todo = {
  id: number;
  todo: string;
};

const DataCache2 = async () => {
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "force-cache",
  });
  const todo: Todo = await res.json();
  return (
    <>
      <Box>
        <h2>Data Cache 2</h2>
        <dl>
          <dt>ID</dt>
          <dd>{todo.id}</dd>
          <dt>Todo</dt>
          <dd>{todo.todo}</dd>
        </dl>
      </Box>
    </>
  );
};

export default DataCache2;
