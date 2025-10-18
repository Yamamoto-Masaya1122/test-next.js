"use client";

import { User } from "@/generated/prisma";
import React, { useEffect, useState } from "react";
import Box from "./Box";
import { useSearchParams } from "next/navigation";

const GetDataFromRouteHandler = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/sample")
      .then((res) => res.json())
      .then((data) =>
        setUsers(
          q === null
            ? data
            : data.filter((user: User) => user.name?.includes(q))
        )
      );
  });

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
