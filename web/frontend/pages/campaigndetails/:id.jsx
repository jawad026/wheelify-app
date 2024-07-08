import { Box, Card, InlineGrid, InlineStack, Page, Text } from "@shopify/polaris";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BannerNotification from "../../components/ui/Banner/Banner";
import AnalyticsCard from "../../components/ui/AnalyticsCard/AnalyticsCard";
import CampaignsCard from "../../components/ui/Campaigns/CampaignsCard";

const Campaigndetails = () => {
  const { id } = useParams();
  const [active, setActive] = useState(true);
  const data = [
    {
      heading: "Participants",
      subheading: "No. Of Participants",
      count: "20",
    },
    {
      heading: "No. of Variations ",
      subheading: "Total numbers of variations created",
      count: "20",
    },
    {
      heading: "Test Ends",
      subheading: "Your test will ends",
      count: "20",
    },
    {
      heading: "Status",
      subheading: "Your test current status",
      count: "Draft",
    },
  ];

  const campaigns = [
    {
      title: "Original",
      subtitle: "Traffic Percentage",
      status: "50%",

    },
    {
      title: "Variations",
      subtitle: "Traffic Percentage",
      status: "50%",
    },
    
  ];
  return (
    <Page
      title="Campaigndetails"
      secondaryActions={[
        {
          content: "Start Test",
          url: "#",
        },
        {
          content: "Reset Test",
          url: "#",
        },
        {
          content: "Delete Test",
          url: "#",
        },
      ]}
    >
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Determines your other variations for this experiment and define
          percentage of your overall traffic will be shown this variation
          relative to other variations.
        </Text>
      </Box>
      {active && (
        <BannerNotification
          tone="success"
          onDismiss={() => {
            setActive(false);
          }}
          text={
            "Hi  We've updated our Terms & Conditions and Privacy Policy. Please take a moment to review them. I Accept"
          }
        />
      )}
      <Card>
        <InlineGrid columns={4}>
          {data.map((item, index) => (
            <AnalyticsCard
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              count={item.count}
            />
          ))}
        </InlineGrid>
      </Card>
      <Box paddingBlock={"400"}>
        <Text variant="headingLg">Variations</Text>
      </Box>
      <Box paddingBlock={"200"}>
        <InlineStack align="" gap={"500"}>
          {campaigns.map((item) => (
            <CampaignsCard
              title={item.title}
              subtitle={item.subtitle}
              status={item.status}
              key={item.title}
              primaryButton="Eidt Variations"
            />
          ))}
        </InlineStack>
      </Box>
    </Page>
  );
};

export default Campaigndetails;
