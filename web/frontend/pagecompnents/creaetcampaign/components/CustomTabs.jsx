import React, { useState } from "react";
import {
  Page,
  Layout,
  Button,
  Text,
  InlineStack,
  Tabs,
  Box,
  Card,
} from "@shopify/polaris";

const StepTabSystem = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTabChange = (selectedTabIndex) => {
    setCurrentStep(selectedTabIndex);
  };
  console.log(currentStep);
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <InlineStack align="space-between" blockAlign="center">
              <Button onClick={prevStep} disabled={currentStep === 0}>
                Back
              </Button>
              <InlineStack distribution="center" gap={"400"} align="center">
                {steps.map((step, index) => (
                  <Box
                    paddingInline={"150"}
                    background={
                      currentStep === index ? "bg-fill-success-secondary" : ""
                    }
                    key={index}
                    borderRadius="200"
                  >
                    <Text
                      key={index}
                      spacing="tight"
                      variant="bodyLg"
                      fontWeight="regular"
                      tone={    currentStep === index ? "base" : ""}
                    >
                      {step.content}
                    </Text>
                  </Box>
                ))}
              </InlineStack>
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Next
              </Button>
            </InlineStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>{steps[currentStep].Component}</Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default StepTabSystem;
