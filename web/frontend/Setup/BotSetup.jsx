import {
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  CalloutCard,
  Card,
  Checkbox,
  Grid,
  Icon,
  InlineStack,
  Modal,
  Text,
  TextField,
  Tooltip,
} from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import Theme from "./Theme";
import PreviewChatBot from "./PreviewChatBot";
import { InfoIcon } from "@shopify/polaris-icons";

const SettingsModal = ({ isOpen, setIsOpen, setRemoveTrademark }) => {
  return (
    <Modal
      id="my-modal"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      size="Small"
      title="Remove Trademark"
    >
      <Box padding="400">
        <Text>
          Are you sure you want to remove the "Powered By ShopBuddy" trademark
          for $10?
        </Text>
      </Box>
      <Box padding="400" inlineAlign="end">
        <ButtonGroup gap="loose">
          <Button
            variant="secondary"
            onClick={() => {
              setRemoveTrademark(false);
              setIsOpen(false);
            }}
          >
            Discard
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setRemoveTrademark(true);
              setIsOpen(false);
            }}
          >
            Save
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

const CheckboxGroup = ({
  callOut,
  setCallOut,
  removeTrademark,
  setRemoveTrademark,
  setIsOpen,
  autoOpen,
  setAutoOpen,
}) => {
  return (
    <InlineStack gap="400">
      <InlineStack blockAlign="center" gap={"200"}>
        <Checkbox
          label="Call out"
          checked={callOut}
          onChange={() => setCallOut(!callOut)}
        />
        <Tooltip content="This is customizable text label for Order Tracking button.">
          <Icon source={InfoIcon} tone="base" />{" "}
        </Tooltip>
      </InlineStack>
      <InlineStack blockAlign="center" gap={"200"}>
        <Checkbox
          label="Remove Trademark"
          checked={removeTrademark}
          onChange={() => setIsOpen(true)}
        />
        <Tooltip content="This is customizable text label for Order Tracking button.">
          <Icon source={InfoIcon} tone="base" />{" "}
        </Tooltip>
      </InlineStack>
      <InlineStack blockAlign="center" gap={"200"}>
        <Checkbox
          label="Auto Open ChatBot"
          checked={autoOpen}
          onChange={() => setAutoOpen(!autoOpen)}
        />
        <Tooltip content="This is customizable text label for Order Tracking button.">
          <Icon source={InfoIcon} tone="base" />{" "}
        </Tooltip>
      </InlineStack>
    </InlineStack>
  );
};

const TextFieldGroup = ({ label, placeholder, value, setValue, multline }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      multiline={multline}
      onChange={(value) => setValue(value)}
    />
  );
};

const ColorPickerGroup = ({ color, setColor, colorFont, setColorFont }) => {
  return (
    <Box paddingBlock="400">
      <BlockStack gap="400">
        <div className="input-color">
          <TextField value={color} label="Color" />
          <input
            type="color"
            value={color}
            className="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="input-color">
          <TextField value={colorFont} label="Font color" />
          <input
            type="color"
            value={colorFont}
            className="color"
            onChange={(e) => setColorFont(e.target.value)}
          />
        </div>
      </BlockStack>
    </Box>
  );
};

const Preview = ({
  color,
  colorFont,
  currentGradient,
  orderTrackingLabel,
  greetings,
}) => {
  return (
    <>
      <PreviewChatBot
        color={color}
        colorFont={colorFont}
        currentGradient={currentGradient}
        orderTrackingLabel={orderTrackingLabel}
        greetings={greetings}
      />
    </>
  );
};

const PreviewToogle = ({ callOut, color, title, message }) => {
  return (
    <div>
      <div className="brand_setup_section ">
        <div class="chatbot-toggler-wrapper border rounded-pill shadow mx-auto d-flex mt-2">
          {callOut && (
            <div class="chatbot-callout px-3 py-1" style={{ display: "block" }}>
              <h5 id="callout_title_text">{title}</h5>
              <p class="mb-0">{message}</p>
            </div>
          )}
          <div
            class="chatbot-toggler rounded-circle"
            style={{ backgroundColor: color }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.8em"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fff"
                d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const BotSetup = () => {
  const [callOut, setCallOut] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);
  const [removeTrademark, setRemoveTrademark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("#000000");
  const [colorFont, setColorFont] = useState("#000000");
  const [title, setTitle] = useState("How can I assist you today?");
  const [message, setMessage] = useState("Feel free to ask me anything!");
  const [orderTrackingLabel, setOrderTrackingLabel] =
    useState("Where is my order?");
  const [greetings, setGreetings] = useState(
    "Welcome! I am here to make your shopping easier. How can I assist you today?"
  );

  const gradientClasses = [
    {
      name: "btn-purple-moon",
      color2: "#7209b7",
      color1: "#f72585",
    },
    {
      name: "btn-ultra-voilet",
      color2: "#eaafc8",
      color1: "#654ea3",
    },
    {
      name: "btn-pink-moon",
      color2: "#8338ec",
      color1: "#3a86ff",
    },
    {
      name: "btn-cool-blues",
      color2: "#6dd5ed",
      color1: "#2193b0",
    },
    {
      name: "btn-dark-blue",
      color2: "#348ac7",
      color1: "#7474bf",
    },
    {
      name: "btn-green-moon",
      color2: "#a8e063",
      color1: "#56ab2f",
    },
    {
      name: "btn-orange-moon",
      color2: "#f7b733",
      color1: "#fc4a1a",
    },
    {
      name: "btn-dark-moon",
      color1: "#e2711d",
      color2: "#ff70a6",
    },
    {
      name: "btn-light-moon",
      color2: "#4cc9f0",
      color1: "#5e60ce",
    },
    {
      name: "btn-funky-moon",
      color2: "#fdb99b",
      color1: "#a770ef",
    },
  ];
  const [currentGradient, setCurrentGradient] = useState(gradientClasses[0]);
  useEffect(() => {
    setColor(currentGradient.color1);
  }, [currentGradient.color1]);

  return (
    <Box paddingBlock="500">
      <SettingsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setRemoveTrademark={setRemoveTrademark}
      />
      <Grid gap={"400"}>
        <Grid.Cell columnSpan={{ xs: 7, sm: 7, md: 7, lg: 7, xl: 7 }}>
          <Card>
            <CheckboxGroup
              callOut={callOut}
              setCallOut={setCallOut}
              removeTrademark={removeTrademark}
              setRemoveTrademark={setRemoveTrademark}
              setIsOpen={setIsOpen}
              autoOpen={autoOpen}
              setAutoOpen={setAutoOpen}
            />
            <BlockStack gap="400" align="center">
              <TextFieldGroup
                label="Title"
                placeholder="Title"
                value={title}
                setValue={setTitle}
              />
              <TextFieldGroup
                label="Message"
                placeholder="Message"
                value={message}
                setValue={setMessage}
              />
            </BlockStack>
            <Theme
              gradientClasses={gradientClasses}
              setCurrentGradient={setCurrentGradient}
            />

            <ColorPickerGroup
              color={color}
              setColor={setColor}
              colorFont={colorFont}
              setColorFont={setColorFont}
            />
            <BlockStack gap="400" align="center">
              <TextFieldGroup
                label="Order Tracking Label"
                placeholder="Order Tracking Label"
                value={orderTrackingLabel}
                setValue={setOrderTrackingLabel}
              />
              <TextFieldGroup
                label="Greetings"
                placeholder="Greetings"
                value={greetings}
                multline={5}
                setValue={setGreetings}
              />
            </BlockStack>
          </Card>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <Card>
            <Box paddingBlock="100">
              <Text fontWeight="bold">Preview</Text>
            </Box>
            <Card background="bg-fill-disabled">
              <Box paddingBlock="100" minHeight="130px">
                <BlockStack inlineAlign="center" align="center" gap="400">
                  <Box as="div" paddingBlock="400" minHeight="150px">
                    <PreviewToogle
                      callOut={callOut}
                      color={color}
                      message={message}
                      title={title}
                    />
                  </Box>
                  <Preview
                    color={color}
                    colorFont={colorFont}
                    currentGradient={currentGradient}
                    orderTrackingLabel={orderTrackingLabel}
                    greetings={greetings}
                  />
                </BlockStack>
              </Box>
            </Card>
          </Card>
        </Grid.Cell>
      </Grid>
    </Box>
  );
};

export default BotSetup;
