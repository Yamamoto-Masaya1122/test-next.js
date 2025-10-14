import React from "react";
import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import StaticServerComponent from "@/components/StaticServerComponent";
import Link from "next/link";
import Image from "next/image";

const StaticRenderingPage = () => {
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <StaticServerComponent text="Static Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
      <Image src="/150x150.png" alt="サンプル画像" width={150} height={150} />
      <Link href="/practice/streaming-ssr" prefetch={true}>
        Go to Streaming SSR
      </Link>
      <Link href="/dynamic-rendering" prefetch={true}>
        Go to Dynamic Rendering
      </Link>
    </Box>
  );
};

export default StaticRenderingPage;
