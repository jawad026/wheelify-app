import { Grid, TextField } from "@shopify/polaris";
import React from "react";

const WinCouponFormLayout = () => {
  return (
    <Grid gap={"400"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
      <TextField label="Winning Text" placeholder="You Win!" />
      <TextField
        label="Copy Message"
        placeholder="Don't forget to copy your coupon code before closing."
      />
      <TextField label="Copy" placeholder="Copy" />
      <TextField label="Copied Sate Text" placeholder="Copied" />
    </Grid>
  );
};

export default WinCouponFormLayout;
