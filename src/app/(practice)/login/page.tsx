import React from "react";
import Box from "@/components/Box";
import { login } from "@/actions/login";

const loginPage = () => {
  return (
    <Box>
      <h1>Login Page</h1>
      <form action={login}>
        <button type="submit">Login</button>
      </form>
    </Box>
  );
};

export default loginPage;
