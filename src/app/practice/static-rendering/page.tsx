import React from "react";
import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import StaticServerComponent from "@/components/StaticServerComponent";
import Link from "next/link";

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <StaticServerComponent text="Static Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
      <Link href="/practice/streaming-ssr" prefetch={true}>
        Go to Streaming SSR
      </Link>
    </Box>
  );
};

export default StaticRenderingPage;
