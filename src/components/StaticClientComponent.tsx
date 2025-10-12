"use client";
import React, { useState } from "react";
import Box from "@/components/Box";

type PropsType = {
  text: string;
};

const StaticClientComponent = ( { text }: PropsType ) => {
  const [count, setCount] = useState(0);
  const onClickCountup = () => {
    setCount(count + 1);
  };
  return (
    <Box>
      <h2>Static Client Component</h2>
      <p>{text}</p>
      <button onClick={onClickCountup}>Count up</button>
      <p>{count}</p>
    </Box>
  );
};

export default StaticClientComponent;