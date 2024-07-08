import {
  BlockStack,
  Box,
  Button,
  Card,
  RadioButton,
  InlineStack,
  Modal,
  Text,
  TextField,
  Checkbox,
} from "@shopify/polaris";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@shopify/polaris-icons";
import IndexTableWithPaginationExample from "./ProductTable";

const ModalComponent = ({ isOpen, onClose, productsIsOpen, handleProductToggle }) => (
  <Modal size="fullScreen" onClose={onClose} open={isOpen} title="Live Preview">
    <Box padding="500">
      <TextField
        loading={false}
        label="Answer"
        placeholder="Enter your answer"
        maxLength={30}
        showCharacterCount
        value={"value"}
        onChange={() => {}}
        autoComplete="off"
      />
      <Checkbox
        label="Product to Recommend"
        onChange={handleProductToggle}
        checked={productsIsOpen}
      />
      <Box paddingBlock="500">
        {productsIsOpen && <IndexTableWithPaginationExample />}
      </Box>
    </Box>
  </Modal>
);

const Question = ({ question, handleCustomAnswerToggle, handleRemoveQuestion, handleAddQuestion, handleModalToggle }) => {
  const [productsIsOpen, setProductsIsOpen] = useState(false);

  const handleProductToggle = () => {
    setProductsIsOpen(!productsIsOpen);
  };

  return (
    <Box key={question.id}>
      <TextField
        loading={false}
        label={question.label}
        maxLength={30}
        placeholder={question.placeholder}
        showCharacterCount
        value={question.value}
        onChange={() => {}}
        autoComplete="off"
        connectedRight={
          <Box>
            <InlineStack gap="200" direction="row" align="center">
              <RadioButton
                label="Ai Answer"
                onChange={() => handleCustomAnswerToggle(question.id, "Ai Answer")}
                checked={question.customAnswerChecked === "Ai Answer"}
              />
              <RadioButton
                label="Custom Answer"
                onChange={() => handleCustomAnswerToggle(question.id, "Custom Answer")}
                checked={question.customAnswerChecked === "Custom Answer"}
              />
              {question.id !== 1 && (
                <Button icon={MinusCircleIcon} onClick={() => handleRemoveQuestion(question.id)} />
              )}
              {question.id === 1 && (
                <Button icon={PlusCircleIcon} onClick={handleAddQuestion} />
              )}
            </InlineStack>
          </Box>
        }
      />
      <ModalComponent
        isOpen={question.isOpen}
        onClose={() => handleModalToggle(question.id)}
        productsIsOpen={productsIsOpen}
        handleProductToggle={handleProductToggle}
      />
    </Box>
  );
};

const PredefinedQuestions = () => {
  const [mainIsOpen, setMainIsOpen] = useState(false);
  const [productsIsOpen, setProductsIsOpen] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([
    {
      id: 1,
      label: "Question 1",
      placeholder: "What are you offering?",
      value: "value",
      customAnswerChecked: "Ai Answer",
      isOpen: false,
    },
  ]);

  const handleMainToggle = () => {
    setMainIsOpen(!mainIsOpen);
  };

  const handleProductToggle = () => {
    setProductsIsOpen(!productsIsOpen);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: additionalQuestions.length + 1,
      label: `Question ${additionalQuestions.length + 1}`,
      placeholder: "Enter your question",
      value: "value",
      customAnswerChecked: "Ai Answer",
      isOpen: false,
    };
    setAdditionalQuestions([...additionalQuestions, newQuestion]);
  };

  const handleRemoveQuestion = (id) => {
    setAdditionalQuestions(additionalQuestions.filter((question) => question.id !== id));
  };

  const handleCustomAnswerToggle = (id, answer) => {
    setAdditionalQuestions(
      additionalQuestions.map((question) =>
        question.id === id
          ? { ...question, customAnswerChecked: answer, isOpen: answer === "Custom Answer" }
          : question
      )
    );
  };

  const handleModalToggle = (id) => {
    setAdditionalQuestions(
      additionalQuestions.map((question) =>
        question.id === id ? { ...question, isOpen: !question.isOpen } : question
      )
    );
  };

  return (
    <>
      <ModalComponent
        isOpen={mainIsOpen}
        onClose={handleMainToggle}
        productsIsOpen={productsIsOpen}
        handleProductToggle={handleProductToggle}
      />
      <BlockStack align="center" inlineAlign="center" gap="500">
        <Box width="70%" paddingBlock={"500"}>
          <Card padding="400">
            <Box paddingBlock={"400"}>
              
            <Text variant="headingLg">Predefined Questions</Text>
            </Box>
            <BlockStack gap="400">
              {additionalQuestions.map((question) => (
                <Question
                  key={question.id}
                  question={question}
                  handleCustomAnswerToggle={handleCustomAnswerToggle}
                  handleRemoveQuestion={handleRemoveQuestion}
                  handleAddQuestion={handleAddQuestion}
                  handleModalToggle={handleModalToggle}
                />
              ))}
            </BlockStack>
          </Card>
        </Box>
      </BlockStack>
    </>
  );
};

export default PredefinedQuestions;
