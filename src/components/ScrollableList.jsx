import React from "react";
import { Box, ScrollArea, Text } from "@radix-ui/themes";

const ScrollableList = () => {
  return (
    <Box
      style={{
        background: "#F76B15",
        height: "calc(100vh - 72px)",
        color: "white",
      }}
    >
      <ScrollArea scrollbars="vertical" size="1">
        <Text>ScrollableList</Text>
      </ScrollArea>
    </Box>
  );
};

export default ScrollableList;
