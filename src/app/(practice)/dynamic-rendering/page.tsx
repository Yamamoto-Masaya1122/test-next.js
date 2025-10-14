import React from "react";
import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import DynamicServerComponet from "@/components/DynamicServerComponet";
import Link from "next/link";

const DynamicRenderingPage = () => {
  return (
    <Box>
      <h1>Dynamic Rendering Page</h1>
      <DynamicServerComponet text="Dynamic Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
      <Link href="/static-rendering">Go to Static Rendering</Link>
    </Box>
  );
};

export default DynamicRenderingPage;
