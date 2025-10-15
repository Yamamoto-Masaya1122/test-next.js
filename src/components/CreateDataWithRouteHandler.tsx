"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Box from "./Box";

const CreateDataWithRouteHandler = () => {
  const [info, setInfo] = useState({ name: "", email: "" });
  const [message, setMessage] = useState<string | null>(null);
  const onChangeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/sample", {
      method: "POST",
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <Box>
      <h2>Create Data With Route Handler</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={onChangeInfo}
          className="border"
        />
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={onChangeInfo}
          className="border"
        />
        <button type="submit" className="border">
          Create
        </button>
      </form>
      {message !== null && <p className="text-center mt-5">{message}</p>}
    </Box>
  );
};

export default CreateDataWithRouteHandler;
