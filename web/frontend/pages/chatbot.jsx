import { Card, Page, Tabs } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import BasicSetup from "../Setup/BasicSetup";
import BotSetup from "../Setup/BotSetup";
import PredefinedQuestions from "../Setup/PredefinedQuestions";

const Chatbot = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "basic",
      content: "Basic Setup",
      accessibilityLabel: "Basic Setup",
      panelID: "basic-setup-content-1",
      component: <BasicSetup />,
      getInput: () => basicInput,
    },
    {
      id: "advanced",
      content: "Advanced Setup",
      panelID: "advanced-setup-content-1",
      component: <BotSetup />,
      getInput: () => advancedInput,
    },
    {
      id: "questions",
      content: "Predefined Questions",
      panelID: "predefined-questions-content-1",
      component: <PredefinedQuestions />,
      getInput: () => questionsInput,
    },
  ];

  return (
    <Page fullWidth>
      <Card>
        <Tabs fitted tabs={tabs} selected={selected} onSelect={handleTabChange}>
          {tabs[selected].component}
        </Tabs>
      </Card>
    </Page>
  );
};

export default Chatbot;
