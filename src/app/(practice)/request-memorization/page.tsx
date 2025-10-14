import React from "react";
import Box from "@/components/Box";
import RequestMemorization from "@/components/RequestMemorization";
import DynamicServerDataFetch from "@/components/DynamicServerDataFetch";
import ClientDataFetch from "@/components/ClientDataFetch";

const RequestMemorizationPage = () => {
  return (
    <Box>
      <h1>Request Memorization Page</h1>
      <DynamicServerDataFetch />
      <RequestMemorization />
      <ClientDataFetch />
    </Box>
  );
};

export default RequestMemorizationPage;
