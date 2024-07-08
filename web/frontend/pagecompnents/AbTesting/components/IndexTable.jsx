import {
  IndexTable,
  Text,
  Badge,
  useBreakpoints,
  EmptySearchResult,
  Card,
  TextField,
  Select,
  Grid,
  Box,
  Link,
} from "@shopify/polaris";
import React, { useState, useCallback } from "react";

export default function DataTable({ campaigns }) {
  console.log("testing");
  const [orders, setOrders] = useState(campaigns);
  const [queryValue, setQueryValue] = useState("");
  const [campaignName, setCampaignName] = useState("");

  const handleQueryChange = useCallback(
    (value) => {
      setQueryValue(value);
      filterOrders(value, campaignName);
    },
    [campaignName]
  );

  const handleCampaignNameChange = useCallback(
    (value) => {
      setCampaignName(value);
      filterOrders(queryValue, value);
    },
    [queryValue]
  );

  const filterOrders = (query, campaignName) => {
    let filteredOrders = campaigns;

    if (query) {
      filteredOrders = filteredOrders.filter((campaign) =>
        campaign.campaign.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (campaignName) {
      filteredOrders = filteredOrders.filter(
        (campaign) => campaign.campaign === campaignName
      );
    }

    setOrders(filteredOrders);
  };

  const handleClearQuery = useCallback(() => {
    setQueryValue("");
    setCampaignName("");
    setOrders(campaigns);
  }, []);

  const campaignOptions = [
    { label: "All", value: "" },
    ...campaigns.map((campaign) => ({
      label: campaign.campaign,
      value: campaign.campaign,
    })),
  ];

  const resourceName = {
    singular: "campaign",
    plural: "campaigns",
  };

  const rowMarkup = orders.map(
    (
      {
        id,
        campaign,
        participants,
        createdTime,
        testEnds,
        leadingVariation,
        status,
        winner,
        url,
      },
      index
    ) => (
      <IndexTable.Row id={index} key={index} position={index}>
        <IndexTable.Cell>
          <Link target="_self" url={`${url}/${id}`}>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {campaign}
            </Text>
          </Link>
        </IndexTable.Cell>
        <IndexTable.Cell>{participants}</IndexTable.Cell>
        <IndexTable.Cell>{createdTime}</IndexTable.Cell>
        <IndexTable.Cell>{testEnds}</IndexTable.Cell>
        <IndexTable.Cell>
          {leadingVariation}
          <Box paddingInlineStart={"200"} as="span">
            {winner ? <Badge tone="success"> winner</Badge> : ""}
          </Box>
        </IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const emptyStateMarkup = (
    <EmptySearchResult
      title={"No campaigns found"}
      description={"Try changing the search term or filter"}
      withIllustration
    />
  );

  return (
    <Card>
      <Box paddingBlock={"400"}>
        <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
          <Box padding="4">
            <TextField
              value={queryValue}
              onChange={handleQueryChange}
              clearButton
              onClearButtonClick={handleClearQuery}
              placeholder="Search by campaign name"
            />
          </Box>
          <Box padding="4">
            <Select
              labelHidden
              options={campaignOptions}
              onChange={handleCampaignNameChange}
              value={campaignName}
            />
          </Box>
        </Grid>
      </Box>
      <IndexTable
        condensed={useBreakpoints().smDown}
        resourceName={resourceName}
        itemCount={orders.length}
        emptyState={emptyStateMarkup}
        headings={[
          { title: "Campaign" },
          { title: "Participants" },
          { title: "Created Time" },
          { title: "Test Ends" },
          { title: "Leading Variation" },
          { title: "Status" },
        ]}
        selectable={false}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );
}
