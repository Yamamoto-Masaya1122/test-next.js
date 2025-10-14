"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Box from "@/components/Box";

export default function StreamingSsrError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box>
      <span>Streaming SSR Error</span>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </Box>
  );
}
