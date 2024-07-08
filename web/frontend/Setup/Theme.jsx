import { BlockStack, Box, InlineGrid } from "@shopify/polaris";
import React from "react";
import "./style.css";

const Theme = ({ setCurrentGradient, gradientClasses }) => {
  return (
    <Box paddingBlock="400">
      <BlockStack spacing="loose">
        <InlineGrid columns={5} spacing="loose">
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[0]);
              }}
            >
              <span className="btn btn-purple-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[1]);
              }}
            >
              <span className="btn btn-ultra-voilet btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[2]);
              }}
            >
              <span className="btn btn-pink-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[3]);
              }}
            >
              <span className="btn btn-cool-blues btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[4]);
              }}
            >
              <span className="btn btn-dark-blue btn-fab"></span>
            </button>
          </Box>
        </InlineGrid>
        <InlineGrid columns={5} spacing="loose">
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[5]);
              }}
            >
              <span className="btn btn-green-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[6]);
              }}
            >
              <span className="btn btn-orange-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[7]);
              }}
            >
              <span className="btn btn-dark-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[8]);
              }}
            >
              <span className="btn btn-light-moon btn-fab"></span>
            </button>
          </Box>
          <Box>
            <button
              onClick={() => {
                setCurrentGradient(gradientClasses[9]);
              }}
            >
              <span className="btn btn-funky-moon btn-fab"></span>
            </button>
          </Box>
        </InlineGrid>
      </BlockStack>
    </Box>
  );
};

export default Theme;
