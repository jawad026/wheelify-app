import React from "react";
import {
  Box,
  Card,
  InlineGrid,
  InlineStack,
  Page,
  Text,
} from "@shopify/polaris";
import CampaignsCard from "../components/ui/Campaigns/CampaignsCard";
import AnalyticsCard from "../components/ui/AnalyticsCard/AnalyticsCard";
import BannerNotification from "../components/ui/Banner/Banner";

const Campaigns = () => {
  const AnalyticsData = [
    {
      heading: "Total Impressions",
      subheading: "Spinner display on store",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Subscribers",
      subheading: "No. of users subscribe till now",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Discount Used",
      subheading: "No. of discounts used",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Sales",
      subheading: "Additional sales by spinner",
      percentage: "910",
      count: "20",
    },
  ];
  const data = [
    {
      title: "Home Page Campaign",
      subtitle: "Your Wheelify account is connected to Shopify",
      status: "Active",
      impression: "10,000",
      subscriber: "20,000",
    },
    {
      title: "Home Page Campaign",
      subtitle: "Your Wheelify account is connected to Shopify",
      status: "Active",
      impression: "10,000",
      subscriber: "20,000",
    },
    {
      title: "Home Page Campaign",
      subtitle: "Your Wheelify account is connected to Shopify",
      status: "Active",
      impression: "10,000",
      subscriber: "20,000",
    },
    {
      title: "Home Page Campaign",
      subtitle: "Your Wheelify account is connected to Shopify",
      status: "Active",
      impression: "10,000",
      subscriber: "20,000",
    },
  ];
  return (
    <Page
      title="Spin Wheel Campaigns"
      secondaryActions={[
        {
          content: "Create Campaigns",
          url: "/createcampaign",
        },
      ]}
    >
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Offer discount coupons, collect emails and boost sales with spin wheel
          campaigns.
        </Text>
      </Box>

      <BannerNotification
        text={
          "Abandoned Cart Recovery Email. Push Notifications & Cart Reminder app. Get Free Now"
        }
      />
      <Box paddingBlock={"500"}>
        <Card>
          <InlineGrid columns={4} gap={400}>
            {AnalyticsData.map((item, index) => (
              <AnalyticsCard
                key={index}
                heading={item.heading}
                subheading={item.subheading}
                percentage={item.percentage}
                count={item.count}
              />
            ))}
          </InlineGrid>
        </Card>
      </Box>
      <InlineStack align="space-between" gap={"500"}>
        {data.map((item) => (
          <CampaignsCard
            title={item.title}
            subtitle={item.subtitle}
            status={item.status}
            impression={item.impression}
            subscriber={item.subscriber}
            primaryButton="Analysis"
            secondaryButton={"Active Campiaigns"}
          />
        ))}
      </InlineStack>
    </Page>
  );
};

export default Campaigns;
