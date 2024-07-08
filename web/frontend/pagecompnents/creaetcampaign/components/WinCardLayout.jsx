import {
  BlockStack,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  InlineStack,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";

const WinCardLayout = () => {
  return (
    <Card padding={"400"} background="bg-fill-magic-secondary">
      <Box minHeight="210px">
        <BlockStack gap={"400"} align="end">
          <Text variant="headingLg" tone>
            Win an Exclusive prize!
          </Text>
          <Text variant="bodySm">
            Enter your full name and email to spin the wheel for a chance to win
          </Text>
          <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
            <TextField
              label="Your Name"
              placeholder="Enter your name"
              variant=""
            />
            <TextField label="Your Email" placeholder="Enter your email" />
          </Grid>

          <InlineStack wrap={false} align="start" blockAlign="center">
            <Checkbox labelClassName="text-base" />
            <Text variant="bodySm">
              I agree to my personal data being stored and used to receive the
              newsletter
            </Text>
          </InlineStack>
          <Box position="relaive">

          <Box position="absolute" insetBlockEnd={"400"} insetInlineEnd={"400"}>
            <Button primary>Try Your Luck!</Button>
          </Box>
          </Box>
        </BlockStack>
      </Box>
    </Card>
  );
};

export default WinCardLayout;
