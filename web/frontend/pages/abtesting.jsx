import {
  Box,
  Card,
  Grid,
  Icon,
  InlineGrid,
  InlineStack,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";
import AnalyticsCard from "../components/ui/AnalyticsCard/AnalyticsCard";
import { SearchIcon } from "@shopify/polaris-icons";
import DataTable from "../pagecompnents/AbTesting/components/IndexTable";
const ABTesting = () => {
  const data = [
    {
      heading: "Active Test",
      subheading: "No. of running tests",
      percentage: "0",
    },
    {
      heading: "Finished Test",
      subheading: "No. of test(s) completed",
      percentage: "3",
    },
    {
      heading: "Total tests",
      subheading: "No. of total tests created",
      percentage: "4",
    },
    {
      heading: "Draft Tests",
      subheading: "No. of tests not processed",
      percentage: "1",
    },
  ];

  const campaigns = [
    {
      id: "450",
      campaign: "Default Campaign",
      participants: 0,
      createdTime: "Mar 07, 2024 - 01:25",
      testEnds: "-",
      leadingVariation: "Variant 2",
      status: "Draft",
      winner: true,
      url: "/campaigndetails",
    },
    {
      id: "519",
      campaign: "Home Page Campaign",
      participants: 0,
      createdTime: "2 days ago",
      testEnds: "-",
      leadingVariation: "-",
      status: "Draft",
      winner: false,
      url: "#",
      url: "/campaigndetails",
    },
  ];

  return (
    <Page title="A/B Tests">
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Learn how many subscribers are collected and additional sales &
          revenue are generated.
        </Text>
      </Box>
      <Card>
        <InlineGrid columns={4}>
          {data.map((item, index) => (
            <AnalyticsCard
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              percentage={item.percentage}
            />
          ))}
        </InlineGrid>
      </Card>
      <Box paddingBlock={"400"}>
        <DataTable campaigns={campaigns} />
      </Box>
    </Page>
  );
};

export default ABTesting;
