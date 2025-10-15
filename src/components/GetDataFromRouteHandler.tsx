"use client";

import { User } from "@/generated/prisma";
import React, { useEffect, useState } from "react";
import Box from "./Box";

const GetDataFromRouteHandler = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/sample")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Box>
      <h2>Get Data From Route Handler</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default GetDataFromRouteHandler;
