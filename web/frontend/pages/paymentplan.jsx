import { Box, Grid, InlineStack, Page, Text } from "@shopify/polaris";
import React from "react";
import Paymentcard from "../components/Paymentcard";

const paymentplan = () => {
  const list = [
    "Up to 300 Wheel impressions",
    "Multiple campaigns",
    "A/B testing",
    "Smart Trigger",
    "Conversion Booster bars",
    "Show on specific pages",
    "All other features",
  ];
  const litePlan = [
    "Up to 1,000 Wheel impressions",
    "Multiple campaigns",
    "A/B testing",
    "Smart Trigger",
    "Conversion Booster bars",
    "Show on specific pages",
    "All other features",
  ];
  const plusPlan = [
    "Up to 5,000 Wheel impressions",
    "Multiple campaigns",
    "A/B testing",
    "Smart Trigger",
    "Conversion Booster bars",
    "Show on specific pages",
    "All other features",
  ];
  const primiumPlan = [
    "Up to 50,000 Wheel impressions",
    "All available features",
    "Additional $1/1,000 impressions",
  ];
  return (
    <Page>
      <Text as="h4" variant="headingXl" alignment="center">
        Subscription Plan
      </Text>
      <Box paddingBlock={600}>
        <Text as="p" alignment="center">
          All charges are billed in USD. Recurring and usage-based charges are
          billed every 30 days.
        </Text>
      </Box>
      <InlineStack align="center" gap={"400"} blockAlign="stretch">
        <Paymentcard list={list} title={"Free"} price={"$0.00"} />
        <Paymentcard list={litePlan} title={"Lite"} price={"$6.99 /month"} />
        <Paymentcard list={plusPlan} title={"Plus"} price={"$13.99 /month"} />
        <Paymentcard
          list={primiumPlan}
          title={"Primium"}
          price={"$27.99 /month"}
        />
      </InlineStack>
    </Page>
  );
};

export default paymentplan;
