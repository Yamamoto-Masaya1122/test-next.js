import React, { ReactNode } from "react";
import Box from "@/components/Box";

type PropsType = {
  children: ReactNode;
};

const StreamingSsrLayout = ({ children }: PropsType) => {
  return (
    <Box>
      <span>Streaming SSR Layout</span>
      {children}
    </Box>
  );
};

export default StreamingSsrLayout;
