import {
  Box,
  Text,
  InlineGrid,
  Card,
  Image,
  BlockStack,
} from "@shopify/polaris";
import React from "react";
import PropTypes from "prop-types";
import LingSvg from "../../../assets/Svg/Line.svg";
const AnalyticsCard = ({ heading, subheading, percentage, count }) => {
  return (
    <BlockStack gap={"0"}>
      <Box paddingBlock={"200"}>
        <Text variant="headingLg" >{heading}</Text>
        <Text variant="bodyLg" tone="subdued">
          {subheading}
        </Text>
      </Box>
      <Box paddingBlock={"200"}>
        <Text variant="headingXl">{count}</Text>
      </Box>
      {percentage === "" && (
        <Box paddingBlockStart={"100"}>
          <InlineGrid columns={2} alignItems="center">
            <Text variant="bodyLg">+{percentage}%</Text>
            <Image source={LingSvg} alt="line" />
          </InlineGrid>
        </Box>
      )}
    </BlockStack>
  );
};

AnalyticsCard.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  percentage: PropTypes.string,
  count: PropTypes.string,
};

export default AnalyticsCard;
