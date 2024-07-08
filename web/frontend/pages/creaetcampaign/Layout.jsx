import React from "react";
import {
  Box,
  Button,
  Grid,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import WinCouponLayout from "./components/WinCouponLayout";
import ColorInput from "../../components/ui/ColorInput/ColorInput";
import WinCardLayout from "./components/WinCardLayout";
import WinFormLayout from "./components/WinFormLayout";
import WinCouponFormLayout from "./components/WinCouponFormLayout";
const Layout = () => {
  return (
    <Box>
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Manage the heading and colors to be displayed on form along the spin
          wheel on your store front.
        </Text>
      </Box>
      <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
        <WinCardLayout />
        <WinCouponLayout />
      </Grid>
      <Box paddingBlock={"400"}>
        <Text variant="headingLg">Spin Wheel Form</Text>
      </Box>
      <WinFormLayout />
      <Box paddingBlock={"400"}>
        <Text variant="headingLg">Winning Form</Text>
      </Box>
      <WinCouponFormLayout />
    </Box>
  );
};

export default Layout;
