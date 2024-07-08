import { Banner, Box, Card, Link } from "@shopify/polaris";
import React from "react";
import PropTypes from "prop-types";
const BannerNotification = ({ text, link = "", url = "",tone="",onDismiss }) => {
  return (
    <Box paddingBlock={"400"}>
      <Card background="bg-surface-transparent" padding={"0"}>
        <Banner tone={tone} onDismiss={onDismiss}>
          <p>
            {text} <Link url={url}>{link}</Link>
          </p>
        </Banner>
      </Card>
    </Box>
  );
};

BannerNotification.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
};

export default BannerNotification;
