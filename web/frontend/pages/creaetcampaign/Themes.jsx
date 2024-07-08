import { BlockStack, Box, Card, Text } from "@shopify/polaris";
import React, { useState } from "react";
import WinLabelInput from "./components/WinLabelInput";
import LossLableInput from "./components/LossLableInput";
import CustomizeLook from "./components/CustomizeLook";

const Themes = () => {
  const [winLabel, setWinLabel] = useState("");
  const [lossLabelValue, setLossLabelValue] = useState("");
  const [winTextLabel, setWinTextLabel] = useState("");
  const [winColor, setWinColor] = useState("");
  const [gravity, setGravity] = useState(0);
  const [lossColor, setLossColor] = useState("");
  return (
    <Box>
      <BlockStack gap="500">
        <WinLabelInput
          WinLable="01 Win"
          labelValue={winLabel}
          setLableValue={setWinLabel}
          winTextValue={winTextLabel}
          setWinTextValue={setWinTextLabel}
          coupon={winColor}
          setCoupon={setWinColor}
          gravity={gravity}
          setGravity={setGravity}
          color={winColor}
          setColor={setWinColor}
        />
        <LossLableInput
          LossLabel={"01 Loss"}
          color={lossColor}
          setColor={setLossColor}
          lossLabelValue={lossLabelValue}
          setLossLabelValue={setLossLabelValue}
        />
      </BlockStack>
      <Box paddingBlock="500">
        <Text variant="headingLg">Customize Look & Feel</Text>
      </Box>
      <Box>
        <Card>
          <CustomizeLook />
        </Card>
      </Box>
    </Box>
  );
};

export default Themes;
