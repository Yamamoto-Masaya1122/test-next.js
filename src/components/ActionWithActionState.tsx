"use client";

import { actionCalledClientWithActionState } from "@/actions/action-called-client-with-action-state";
import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Box from "./Box";
import { ERROR_MESSAGES } from "@/constants";

const initialState = {
  success: false,
  data: {
    name: "",
    email: "",
  },
  errors: [],
};

const ActionWithActionState = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    actionCalledClientWithActionState,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/static-rendering");
    }
  }, [state.success, router]);
  return (
    <Box>
      <h2>Action With Action State</h2>
      <form action={formAction} className="flex flex-col items-center gap-2">
        <input
          type="text"
          name="name"
          className="border"
          defaultValue={state.data.name}
        />
        <input
          type="email"
          name="email"
          className="border"
          defaultValue={state.data.email}
        />
        {state.errors?.map((error) => (
          <p key={error} className="text-red-500 text-sm">
            {ERROR_MESSAGES[error]}
          </p>
        ))}
        <button type="submit" className="border" disabled={isPending}>
          {isPending ? "Loading..." : "Create"}
        </button>
      </form>
    </Box>
  );
};

export default ActionWithActionState;
