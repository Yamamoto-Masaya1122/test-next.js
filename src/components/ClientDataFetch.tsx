"use client";
import React, { useState, useEffect } from "react";
import Box from "@/components/Box";

type Todo = {
  id: number;
  todo: string;
};

const ClientDataFetch = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  useEffect(() => {
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then(setTodo);
  }, []);
  if (todo === null) return <Box>Client Data Fetch Loading...</Box>;
  return (
    <>
      <Box>
        <h2>Client Data Fetch</h2>
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

export default ClientDataFetch;
