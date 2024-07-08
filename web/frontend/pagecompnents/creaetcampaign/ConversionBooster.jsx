import {
  Banner,
  Box,
  Button,
  Card,
  Grid,
  Image,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";
import ConversionBoosterLayout from "./components/ConversionBoosterLayout";
import BannerNotification from "../../components/ui/Banner/Banner";
import ColorInput from "../../components/ui/ColorInput/ColorInput";
import Top from "../../assets/Svg/Top.svg";
import Bottom from "../../assets/Svg/Bottom.svg";
const ConversionBooster = () => {
  return (
    <Box>
      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Use below settings to show urgency elements which will boost your
          conversions
        </Text>
      </Box>
      <ConversionBoosterLayout />
      <Box paddingBlock={"400"}>
        <BannerNotification
          tone="warning"
          text={`Your coupon code: {{coupon_code}} is reserved {{time}}. You can apply it at checkout.`}
        />
      </Box>

      <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <InlineStack align="space-between" blockAlign="center">
            <Text variant="headingLg">Urgency Time Bar (After Spin)</Text>
            <Button>Turn on</Button>
          </InlineStack>
        </Grid.Cell>
        <Grid.Cell
          columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
        ></Grid.Cell>
        <ColorInput label={"Bar Background Color"} />
        <ColorInput label={"Bar Text Color"} />
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <TextField
            label={"Urgency Timer Bar Text"}
            placeholder="You can apply discount code {{coupon_code}} at checkout"
          />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
          <Text variant="headingSm">Urgency Time bar Position on Screen</Text>
        </Grid.Cell>

        <InlineStack gap={"400"}>
          <Button pressed={''}>
            <Image source={Top} alt="Top" />
          </Button>
          <Button>
            <Image source={Bottom} alt="Bottom" />
          </Button>
        </InlineStack>
      </Grid>
    </Box>
  );
};

export default ConversionBooster;
