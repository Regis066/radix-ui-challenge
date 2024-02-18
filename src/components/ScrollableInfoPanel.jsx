import React from "react";
import { Box, ScrollArea, Text } from "@radix-ui/themes";

const ScrollableInfoPanel = () => {
  return (
    <Box style={{ background: "#F76B15", height: "calc(100vh - 72px)", color: "white" }}>
      <ScrollArea scrollbars="vertical" size="1">
        <Text>ScrollableInfoPanel</Text>
      </ScrollArea>
    </Box>
  );
};

export default ScrollableInfoPanel;
