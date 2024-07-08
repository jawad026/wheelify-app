import React from "react";
import {
  BlockStack,
  Box,
  Button,
  Checkbox,
  Grid,
  Image,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import BottomRight from "../../assets/Svg/BottomRight.svg";
import BottomLeft from "../../assets/Svg/BottomLeft.svg";
import WinCardLayout from "./components/WinCardLayout";
import FullWheel from "../../assets/Svg/FullButton.svg";
import halfWheel from "../../assets/Svg/HalfButton.svg";
import SpinWheel from "./components/SpinWheel";

const DisplayOptions = () => {
  return (
    <Box>
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Manage the contents that will displayed on the form along with the
          spin wheel on your storefront.
        </Text>
      </Box>
      <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}>
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
            <WinCardLayout />
            <Box paddingBlock={"500"}>
              <InlineStack align="center" gap={"500"}>
                <SpinWheel background={''} />
              </InlineStack>
            </Box>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Grid gap={"400"} columns={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
              <Text variant="heading3xl">Display Settings</Text>
              <TextField label="Display Delay Time" type="number" />
            </Grid>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Box paddingBlock={"200"}>
              <InlineStack blockAlign="center" align="space-between">
                <Text variant="headingLg">Trigger Button on Desktop</Text>
                <Button>Turn off</Button>
              </InlineStack>
            </Box>
            <InlineStack gap={"400"}>
              <Button>
                <Image source={BottomLeft} alt="Botton Left" />
              </Button>
              <Button>
                <Image source={BottomRight} alt="Bottom Right" />
              </Button>
            </InlineStack>
            <Box paddingBlock={"200"}>
              <TextField label="Padding from Button" type="number" />
            </Box>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Box paddingBlock={"200"}>
              <InlineStack blockAlign="center" align="space-between">
                <Text variant="headingLg">Trigger Button on Mobile</Text>
                <Button>Turn off</Button>
              </InlineStack>
            </Box>
            <InlineStack gap={"400"}>
              <Button>
                <Image source={FullWheel} alt="Botton Left" />
              </Button>
              <Button>
                <Image source={halfWheel} alt="Bottom Right" />
              </Button>
            </InlineStack>
            <Box paddingBlock={"200"}>
              <TextField label="Padding from Button" />
            </Box>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Box paddingBlock={"200"}>
              <InlineStack blockAlign="center" align="space-between">
                <Text variant="headingLg">Exit Intent on Desktop</Text>
                <Button>Turn off</Button>
              </InlineStack>
            </Box>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Box paddingBlock={"200"}>
              <InlineStack blockAlign="center" align="space-between">
                <Text variant="headingLg">Scroll to Load Spinner</Text>
                <Button>Turn off</Button>
              </InlineStack>
            </Box>
            <TextField
              label="Percentage scroll to display wheel"
              type="number"
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Box paddingBlock={"200"}>
              <InlineStack blockAlign="center" align="space-between">
                <Text variant="headingLg">Remove Powered By</Text>
                <Button>Turn off</Button>
              </InlineStack>
            </Box>
          </Grid.Cell>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <BlockStack gap={"400"}>
            <Text variant="headingLg">Pages to Display</Text>
            <Checkbox label="Home Page" />
            <Checkbox label="Collections" />
            <Checkbox label="Blog post pages" />
            <Checkbox label="All other pages" />
            <Checkbox label="Products" />
            <Checkbox label="Cart" />
            <Checkbox label="Thank you page" />
            <Checkbox label="Custom pages" />
            <Button>Add Custom URL</Button>
            <TextField label="URL" placeholder="URL" />
          </BlockStack>
        </Grid.Cell>
      </Grid>
    </Box>
  );
};

export default DisplayOptions;
