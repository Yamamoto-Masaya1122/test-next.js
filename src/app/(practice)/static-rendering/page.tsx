import React from "react";
import Box from "@/components/Box";
import StaticClientComponent from "@/components/StaticClientComponent";
import StaticServerComponent from "@/components/StaticServerComponent";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { logout } from "@/actions/logout";
import { notFound, redirect } from "next/navigation";

const StaticRenderingPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value ?? "なし";

  if (token !== "abc") {
    notFound();
  }
  return (
    <Box>
      <h1>Static Rendering Page</h1>
      <p>{token}</p>
      <StaticServerComponent text="Static Server ComponentへのProps" />
      <StaticClientComponent text="Static Client ComponentへのProps" />
      <Image src="/150x150.png" alt="サンプル画像" width={150} height={150} />
      <Link href="/practice/streaming-ssr" prefetch={true}>
        Go to Streaming SSR
      </Link>
      <Link href="/dynamic-rendering" prefetch={true}>
        Go to Dynamic Rendering
      </Link>
      <Link href="/intercepting-route" prefetch={true}>
        Go to Intercepting Route
      </Link>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </Box>
  );
};

export default StaticRenderingPage;
