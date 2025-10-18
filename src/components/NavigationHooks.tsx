"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Box from "./Box";

const NavigationHooks = () => {
  const router = useRouter();
  const pushStaticRendering = () => {
    router.push("/static-rendering");
  };

  const replaceStaticRendering = () => {
    router.replace("/static-rendering");
  };

  const refresh = () => {
    router.refresh();
  };

  return (
    <Box>
      <button onClick={pushStaticRendering}>
        Go to Static Rendering(push)
      </button>
      <button onClick={replaceStaticRendering}>
        Go to Static Rendering(replace)
      </button>
      <button onClick={refresh}>Refresh</button>
    </Box>
  );
};

export default NavigationHooks;
