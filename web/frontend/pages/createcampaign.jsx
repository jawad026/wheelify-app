import {
  Box,
  Card,
  Grid,
  InlineStack,
  Page,
  RadioButton,
  Tabs,
  Text,
  TextField,
} from "@shopify/polaris";
import React, { Component, useCallback, useState } from "react";
import Themes from "./creaetcampaign/Themes";
import Layout from "./creaetcampaign/Layout";
import ConversionBooster from "./creaetcampaign/ConversionBooster";
import DisplayOptions from "./creaetcampaign/DisplayOptions";
import AntiCheatSheet from "./creaetcampaign/AntiCheatSheet";
import StepTabSystem from "./creaetcampaign/components/CustomTabs";
import CreateCampaignForm from "./creaetcampaign/CreateCampaign";

const CreateCampaign = () => {
  const secondaryAction = [
    {
      content: "Canel",
      onAction: () => console.log("clicked"),
      accessibilityLabel: "Create",
    },
    {
      content: "Activate Now",
      onAction: () => console.log("clicked"),
      accessibilityLabel: "Active",
    },
  ];

  const tabs = [
    {
      id: "create-campaign",
      content: "Create Campaign",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
      Component: <CreateCampaignForm />,
    },
    {
      id: "themes",
      content: "Theme",
      panelID: "accepts-marketing-content-1",
      Component: <Themes />,
    },
    {
      id: "layout",
      content: "Layout",
      panelID: "repeat-customers-content-1",
      Component: <Layout />,
    },
    {
      id: "conversion-booster",
      content: "Conversation Booster",
      panelID: "prospects-content-1",
      Component: <ConversionBooster />,
    },
    {
      id: "display-options",
      content: "Display Options",
      panelID: "prospects-content-1",
      Component: <DisplayOptions />,
    },
    {
      id: "anit-cheat-sheet",
      content: "Anit-Cheat Sheet",
      panelID: "prospects-content-1",
      Component: <AntiCheatSheet />,
    },
  ];
  const steps = [
    {
      name: "Step 1",
      content: <div>Content for Step 1</div>,
    },
    {
      name: "Step 2",
      content: <div>Content for Step 2</div>,
    },
    {
      name: "Step 3",
      content: <div>Content for Step 3</div>,
    },
  ];

  return (
    <Page title="Create Campaign " secondaryActions={secondaryAction}>
      <StepTabSystem steps={tabs} />
    </Page>
  );
};

export default CreateCampaign;
