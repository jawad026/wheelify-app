import {
  Box,
  Grid,
  InlineStack,
  RadioButton,
  Text,
  TextField,
} from "@shopify/polaris";
import React, { useState } from "react";

const CreateCampaignForm = () => {
  const [status, setStatus] = useState("manual");

  return (
    <Box>
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Learn how many subscribers are collected and additional sales &
          revenue are generated.
        </Text>
      </Box>
      <Box paddingBlock={"400"}>
        <Text variant="headingLg">Campaign Details</Text>
      </Box>

      <Box paddingBlock={"400"}>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <TextField
              label="Campaign Title"
              placeholder="Enter campaign name"
              value="value"
              onChange={() => {}}
              autoComplete="off"
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <TextField
              label="Campaign Description"
              placeholder="Enter campaign description"
              value="value"
              onChange={() => {}}
              autoComplete="off"
            />
          </Grid.Cell>
        </Grid>
      </Box>
      <Box paddingBlock={"400"}>
        <Text variant="headingLg">How long to show it</Text>
      </Box>
      <Box paddingBlockStart={"200"}>
        <Text variant="headingLg">Period Format</Text>
      </Box>
      <Box paddingBlock={"400"}>
        <InlineStack gap={"500"}>
          <RadioButton
            label={"Manual"}
            name="status"
            id="manual"
            checked={status === "manual"}
            onChange={() => setStatus("manual")}
          />
          <RadioButton
            label={"Fixed Schedule"}
            name="status"
            id="fixed"
            checked={status === "fixed"}
            onChange={() => setStatus("fixed")}
          />
        </InlineStack>
        <Box paddingBlock={"400"}>
          {status === "fixed" && (
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                  label="Start Date"
                  placeholder="Enter campaign name"
                  value="value"
                  type="date"
                  onChange={() => {}}
                  autoComplete="off"
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                  label="End Date"
                  placeholder="Enter campaign name"
                  value="value"
                  type="date"
                  onChange={() => {}}
                  autoComplete="off"
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                  label="Start Time"
                  type="time"
                  placeholder="Enter campaign name"
                  value="value"
                  onChange={() => {}}
                  autoComplete="off"
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <TextField
                  type="time"
                  label="End Time"
                  placeholder="Enter campaign name"
                  value="value"
                  onChange={() => {}}
                  autoComplete="off"
                />
              </Grid.Cell>
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCampaignForm;
