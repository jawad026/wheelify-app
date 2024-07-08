import { Box, Card, Divider, Grid, Text, TextField } from "@shopify/polaris";
import React from "react";
import ColorInput from "../../../components/ui/ColorInput/ColorInput";

const LossLableInput = ({
  LossLabel,
  lossLabelValue,
  setLossLabelValue,
  color,
  setColor,
}) => {
  return (
    <Card padding={"400"}>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
          <Card background="bg-fill-active" padding={"300"}>
            <Text variant="bodySm" alignment="center">
              {LossLabel}
            </Text>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 11, sm: 11, md: 11, lg: 11, xl: 11 }}>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <TextField
                label="Loss Label"
                placeholder="Enter loss label"
                value={lossLabelValue}
                onChange={(e) => setLossLabelValue(e)}
                autoComplete="off"
              />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <ColorInput
                color={color}
                setColor={setColor}
                label={"Slice Color"}
              />
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
    </Card>
  );
};

export default LossLableInput;
