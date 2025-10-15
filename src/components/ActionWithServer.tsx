import React from "react";
import { ERROR_MESSAGES } from "@/constants";
import Box from "./Box";
import { actionCalledServer } from "@/actions/action-called-server";

type PropsType = {
  searchParams: Promise<{
    errors: keyof typeof ERROR_MESSAGES | (keyof typeof ERROR_MESSAGES)[];
  }>;
};

const ActionWithServer = async ({ searchParams }: PropsType) => {
  const { errors: queryErrors } = await searchParams;
  let errors: (keyof typeof ERROR_MESSAGES)[] = [];
  if (typeof queryErrors === "string") {
    errors = [queryErrors];
  }

  if (Array.isArray(queryErrors)) {
    errors = queryErrors;
  }

  return (
    <Box>
      <h2>Action With Server</h2>
      <form
        action={actionCalledServer}
        className="flex flex-col items-center gap-2"
      >
        <input type="text" name="name" className="border" />
        <input type="email" name="email" className="border" />
        {errors.map((error) => (
          <p key={error} className="text-red-500 text-sm">
            {ERROR_MESSAGES[error]}
          </p>
        ))}
        <button type="submit" className="border">
          Create
        </button>
      </form>
    </Box>
  );
};

export default ActionWithServer;
