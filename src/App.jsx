import React from "react";
import { Flex, Box, Grid } from "@radix-ui/themes";
import StickyHeader from "./components/StickyHeader";
import StickyNav from "./components/StickyNav";
import ScrollableList from "./components/ScrollableList";
import ScrollableInfoPanel from "./components/ScrollableInfoPanel";

const App = () => {
  return (
    <Box>
      <Flex>
        <StickyNav />
        <Flex direction="column">
          <StickyHeader />
          <Grid columns="1fr 3fr" gap="3">
            <ScrollableList />
            <ScrollableInfoPanel />
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
