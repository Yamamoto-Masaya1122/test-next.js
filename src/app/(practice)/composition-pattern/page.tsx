import React from "react";
import Box from "@/components/Box";
import ClientBoundary from "@/components/ClientBoundary";
import StaticServerDataFetch from "@/components/StaticServerDataFetch";

const CompositionPatternPage = () => {
  return (
    <Box>
      <h1>Composition Pattern Page</h1>
      <ClientBoundary>
        <StaticServerDataFetch />
      </ClientBoundary>
    </Box>
  );
};

export default CompositionPatternPage;
