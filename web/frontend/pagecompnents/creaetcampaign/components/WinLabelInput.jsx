import {
  Bleed,
  Box,
  Card,
  Divider,
  Grid,
  InlineGrid,
  InlineStack,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";
import ColorInput from "../../../components/ui/ColorInput/ColorInput";

const WinLabelInput = ({
  WinLable,
  labelValue,
  setLableValue,
  winTextValue,
  setWinTextValue,
  coupon,
  setCoupon,
  gravity,
  setGravity,
  color,
  setColor,
}) => {
  return (
    <Card padding={"400"}>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 1, xl: 1 }}>
          <Card background="bg-fill-active" padding={"300"}>
            <Text variant="bodySm" alignment="center">
              {WinLable}
            </Text>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 11, xl: 11 }}>
          <Grid gap={"100"} columns={{ xs: 1, sm: 2, md: 2, lg: 5, xl: 5 }}>
            <TextField
              label="Win Label"
              placeholder="Enter win label"
              value={labelValue}
              onChange={(e) => setLableValue(e)}
              autoComplete="off"
            />
            <TextField
              label="Win Text"
              placeholder="Enter win Text"
              value={winTextValue}
              onChange={(e) => setWinTextValue(e)}
              autoComplete="off"
            />
            <Select
              label="Coupon"
              options={[{ value: "Coupon_One", label: "Coupon_One" }]}
              onChange={(e) => setCoupon(e)}
              value={coupon}
            />
            <TextField
              type="number"
              label="Gravity"
              min={1}
              max={100}
              value={gravity}
              onChange={(e) => setGravity(e)}
              autoComplete="off"
              suffix={`${gravity}%`}
            />
            <ColorInput
              color={color}
              setColor={(e) => setColor(e)}
              label={"Slice Color"}
            />
          </Grid>
        </Grid.Cell>
      </Grid>
    </Card>
  );
};

export default WinLabelInput;
