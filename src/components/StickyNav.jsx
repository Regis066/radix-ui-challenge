import React from "react";
import { Heading, Box } from "@radix-ui/themes";

const StickyNav = () => {
  return (
    <Box
      style={{
        width: 112,
        height: "100vh",
        background: "#12A594",
        color: "white",
      }}
      position="sticky"
      left="0"
      top="0"
    >
      <Heading size="5">StickyNav</Heading>
    </Box>
  );
};

export default StickyNav;
