import React from "react";
import { BlockStack, Box, Button, Card, Text } from "@shopify/polaris";
const WinCouponLayout = () => {
  return (
    <Card padding={"400"} background="bg-fill-magic-secondary">
      <Box minHeight="">
        <BlockStack gap={"400"}>
          <Text variant="headingLg">You won</Text>
          <Text variant="bodySm">
            Don't forget to copy your coupon code before closing.
          </Text>
          <Text variant="headingLg">"COUPON CODE"</Text>
          <Box position="absolute" insetBlockEnd={"400"} insetInlineEnd={"400"}>
            <Button primary>Try Your Luck!</Button>
          </Box>
        </BlockStack>
      </Box>
    </Card>
  );
};

export default WinCouponLayout;
