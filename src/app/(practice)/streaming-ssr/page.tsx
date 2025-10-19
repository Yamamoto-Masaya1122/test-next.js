import React, { Suspense } from "react";
import Box from "@/components/Box";
import DelayServerDataFetch from "@/components/DelayServerDataFetch";

const StreamingSsrPage = () => {
  // throw new Error("Streaming SSR Page Error");
  return (
    <Box>
      <h1>Streaming SSR Page</h1>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <DelayServerDataFetch />
      {/* </Suspense> */}
    </Box>
  );
};

export default StreamingSsrPage;
