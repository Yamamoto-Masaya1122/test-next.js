import React from "react";
import Box from "@/components/Box";

type Todo = {
  id: number;
  todo: string;
};

const DelayServerDataFetch = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  });
  const todo: Todo = await res.json();
  return (
    <>
      <Box>
        <h2>Delay Server Data Fetch</h2>
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

export default DelayServerDataFetch;
