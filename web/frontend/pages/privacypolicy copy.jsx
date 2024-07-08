import React from 'react'
import { BlockStack, Box, Text, Card, List, Page, InlineStack } from '@shopify/polaris';
import { Link } from 'react-router-dom';
const Privacypolicy = () => {
  return (
    <Page>
      <Card roundedAbove="sm">
        <p>We take your privacy seriously. This summary explains what data our app collects and how we use it.</p>
        <BlockStack gap="200">
          <Text as="h2" variant="headingSm">
            What We Collect:
          </Text>
          <Box paddingBlockEnd="200">
            <List>
              <List.Item>Basic user info: Name, email, phone (optional)</List.Item>
              <List.Item>Company info (optional)</List.Item>
              <List.Item>How you heard about us</List.Item>
              <List.Item>Purchase history (through Shopify)</List.Item>
            </List>
          </Box>
          <Text as="h2" variant="headingSm">
            Why We Collect It:
          </Text>
          <Box paddingBlockEnd="200">
            <List>
              <List.Item>To provide the services you request</List.Item>
              <List.Item>Communicate with you</List.Item>
              <List.Item>Improve the app</List.Item>
              <List.Item>Analyze usage</List.Item>
              <List.Item>Fix crashes</List.Item>
            </List>
          </Box>
          <Text as="h2" variant="headingSm">
            Security:
          </Text>
          <Box paddingBlockEnd="200">
            <List>
              <List.Item>Your data is encrypted in transit.</List.Item>
              <List.Item>You can request to have your data deleted.</List.Item>
            </List>
          </Box>
          <Text as="h2" variant="headingSm">
            Learn More:
          </Text>
          <Box paddingBlockEnd="200">
            <List>
              <InlineStack gap="400" direction={'row'}>
                <List.Item>For full details, see our
                  <Box as='span' paddingInlineStart={`200`}>
                    <Link to={{ pathname: "https://carecart.io/privacy-policy/" }} target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </Link>
                  </Box>
                </List.Item>
              </InlineStack>

            </List>
          </Box>
        </BlockStack>

      </Card>
    </Page>
  )
}

export default Privacypolicy
