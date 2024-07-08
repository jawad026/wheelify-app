import {
  Page,
} from "@shopify/polaris";
import Themes from "../pagecompnents/creaetcampaign/Themes";
import Layout from "../pagecompnents/creaetcampaign/Layout";
import ConversionBooster from "../pagecompnents/creaetcampaign/ConversionBooster";
import DisplayOptions from "../pagecompnents/creaetcampaign/DisplayOptions";
import AntiCheatSheet from "../pagecompnents/creaetcampaign/AntiCheatSheet";
import StepTabSystem from "../pagecompnents/creaetcampaign/components/CustomTabs";
import CreateCampaignForm from "../pagecompnents/creaetcampaign/CreateCampaign";

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
