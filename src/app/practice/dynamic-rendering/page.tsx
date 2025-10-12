import React from "react";
import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import DynamicServerComponet from "@/components/DynamicServerComponet";

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>Dynamic Rendering Page</h1>
      <DynamicServerComponet text="Dynamic Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
    </Box>
  );
};

export default DynamicRenderingPage;