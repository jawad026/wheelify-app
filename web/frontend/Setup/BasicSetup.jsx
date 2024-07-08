import { BlockStack, Box, TextField } from "@shopify/polaris";
import React, { useState } from "react";

const BasicSetup = () => {
  const [botName, setBotName] = useState('');
  const [botDescription, setBotDescription] = useState('');

  return (
    <BlockStack align="center" inlineAlign="center" gap="500">
      <Box width="50%" paddingBlock="500">
        <TextField
          label="Bot Name"
          maxLength={30}
          showCharacterCount
          value={botName}
          onChange={(value) => setBotName(value)}
          autoComplete="off"
          helpText="Give your chatbot a unique name for your customers to see"
        />

        <TextField
          label="Bot Description"
          maxLength={150}
          showCharacterCount
          multiline
          value={botDescription}
          onChange={(value) => setBotDescription(value)}
          autoComplete="off"
          helpText="Provide a brief description of your chatbot"
        />
      </Box>
    </BlockStack>
  );
};

export default BasicSetup;
