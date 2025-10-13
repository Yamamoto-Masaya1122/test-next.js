import React from "react";
import Box from "@/components/Box";
import DynamicServerDataFetch from "@/components/DynamicServerDataFetch";
// import StaticServerDataFetch from "@/components/StaticServerDataFetch";
import ClientDataFetch from "@/components/ClientDataFetch";

const DataFetchPage = () => {
  return (
    <Box>
      <h1>Data Fetch Page</h1>
      {/* <StaticServerDataFetch /> */}
      <DynamicServerDataFetch />
      <ClientDataFetch />
    </Box>
  );
};

export default DataFetchPage;
