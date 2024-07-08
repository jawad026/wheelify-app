import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Icon,
  InlineStack,
  Text,
  Popover,
  ActionList,
  Image,
} from "@shopify/polaris";
import { MenuVerticalIcon } from "@shopify/polaris-icons";
import MegaphoneFilledIcon from "../../../assets/Svg/MegaphoneFilled.svg";

const CampaignsCard = ({
  title,
  subtitle,
  status,
  impression,
  subscriber,
  primaryButton,
  secondaryButton,
}) => {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((active) => !active),
    []
  );

  const activator = (
    <Button
      icon={MenuVerticalIcon}
      onClick={togglePopoverActive}
      size="medium"
    />
  );

  return (
    <Box
      width="300px"
      padding="500"
      height="343px"
      background="bg-surface"
      borderRadius="300"
    >
      <InlineStack align="space-between">
        <Box
          borderRadius="300"
          padding="200"
          width="60px"
          height="60px"
          background="bg-fill"
          borderColor="border"
          borderWidth="025"
        >
          <InlineStack align="center" blockAlign="center" gap="200">
            <Image source={MegaphoneFilledIcon} tone="base" />
          </InlineStack>
        </Box>
        <Popover
          active={popoverActive}
          activator={activator}
          onClose={togglePopoverActive}
        >
          <ActionList
            items={[
              { content: "Preview" },
              { content: "Edit" },
              { content: "Reset" },
              { content: "Duplicate" },
              { content: "Delete", destructive: true },
            ]}
          />
        </Popover>
      </InlineStack>
      <Box paddingBlockStart="400">
        <Text variant="headingLg">{title}</Text>
        <Box paddingBlockStart="200">
          <Text variant="bodyLg">{subtitle}</Text>
        </Box>
      </Box>
      <Box paddingBlockEnd="400">
        {status !== "" && (
          <Box paddingBlockStart="200">
            <InlineStack align="start" gap="200">
              <Text variant="bodyLg" fontWeight="semibold">
                Status:
              </Text>
              <Text variant="bodyLg">{status}</Text>
            </InlineStack>
          </Box>
        )}
        {impression !== undefined && (
          <Box paddingBlockStart="200">
            <InlineStack align="start" gap="200">
              <Text variant="bodyLg" fontWeight="semibold">
                Impressions Count:
              </Text>
              <Text variant="bodyLg">{impression}</Text>
            </InlineStack>
          </Box>
        )}
        {subscriber !== undefined && (
          <Box paddingBlockStart="200">
            <InlineStack align="start" gap="200">
              <Text variant="bodyLg" fontWeight="semibold">
                Subscribers Count:
              </Text>
              <Text variant="bodyLg">{subscriber}</Text>
            </InlineStack>
          </Box>
        )}
        <Box paddingBlockStart="400">
          <InlineStack align="start" gap="200">
            {primaryButton !== undefined && <Button>{primaryButton}</Button>}
            {secondaryButton !== undefined && (
              <Button variant="primary">{secondaryButton}</Button>
            )}
          </InlineStack>
        </Box>
      </Box>
    </Box>
  );
};

export default CampaignsCard;
