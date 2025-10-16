import React from "react";
import { ERROR_MESSAGES } from "@/constants";
import Box from "@/components/Box";
import ActionWithServer from "@/components/ActionWithServer";
import ActionWithClient from "@/components/ActionWithClient";

type PropsType = {
  searchParams: Promise<{
    errors: keyof typeof ERROR_MESSAGES | (keyof typeof ERROR_MESSAGES)[];
  }>;
};

const CallServerActionPage = async ({ searchParams }: PropsType) => {
  return (
    <Box>
      <h1>Call Server Action</h1>
      <ActionWithServer searchParams={searchParams} />
      <ActionWithClient />
    </Box>
  );
};

export default CallServerActionPage;
