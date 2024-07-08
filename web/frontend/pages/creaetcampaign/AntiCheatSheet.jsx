import {
  BlockStack,
  Box,
  Button,
  Grid,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";

const AntiCheatSheet = () => {
  return (
    <Box>
      <Grid gap={"300"} columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
        <Grid gap={"300"} columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <Text variant="headingLg">Limit Spin Wheel</Text>
          <Box paddingBlock={"100"}>
            <InlineStack blockAlign="center" align="space-between">
              <Text variant="headingMd">Limit Spin by E-mail Address</Text>
              <Button>Turn off</Button>
            </InlineStack>
          </Box>

          <Box paddingBlock={"100"}>
            <InlineStack blockAlign="center" align="space-between">
              <Text variant="headingMd">Limit Spin by Browser Cookies</Text>
              <Button>Turn off</Button>
            </InlineStack>
          </Box>

          <Box paddingBlock={"100"}>
            <InlineStack blockAlign="center" align="space-between">
              <Text variant="headingMd">Limit Spin by IP Address </Text>
              <Button>Turn off</Button>
            </InlineStack>
          </Box>
        </Grid>
        <Grid gap={"300"} columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <Text variant="headingLg">Manage Spin Duration</Text>
          <BlockStack gap={"400"}>
            <TextField label={"Max Spins Per User"} type="number" />
            <TextField label={"Reset Spin Counter After"} type="number" />
            <TextField label={"Limit Reached Text"} type="text" />
          </BlockStack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AntiCheatSheet;
