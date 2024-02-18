import React from "react";
import { Heading, Box, Flex } from "@radix-ui/themes";

const StickyHeader = () => {
  return (
    <Box
      style={{
        height: 72,
        color: "white",
        background: "#104D87",
        width: "calc(100vw - 112px)",
      }}
      position="sticky"
      top="0"
    >
      <Flex align="center" justify="center" style={{ height: "inherit" }}>
        <Heading>StickyHeader</Heading>
      </Flex>
    </Box>
  );
};

export default StickyHeader;
