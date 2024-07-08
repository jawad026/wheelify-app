import {
  Button,
  Grid,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";
import ColorInput from "../../../components/ui/ColorInput/ColorInput";

const WinFormLayout = () => {
  return (
    <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
      <TextField
        label="Win An Exclusive Prize!"
        placeholder="Win 10% OFF on your next order!"
      />
      <TextField
        label="Sub Title"
        placeholder="Enter your full name and email to spin the wheel for a chance to win"
      />
      <TextField
        label="Placeholder For your Name"
        placeholder="Enter your Name"
      />
      <TextField
        label="Placeholder For your Email"
        placeholder="Enter your Email!"
      />
      <TextField
        label="Conset Text"
        placeholder="I agree to my personal data being stored and used to receive the newsletter"
      />
      <TextField label="Try Your Luck" placeholder="Try Your Luck!" />
      <ColorInput label={"Button Background Color"} />
      <ColorInput label={"Button Text Color"} />
      <InlineStack blockAlign="center" gap={"200"}>
        <Button>Turn off</Button>
        <Text>Collect Phone Numbers</Text>
      </InlineStack>
      <InlineStack blockAlign="center" gap={"200"}>
        <Button>Turn off</Button>
        <Text>Accept International Phones </Text>
      </InlineStack>
    </Grid>
  );
};

export default WinFormLayout;
