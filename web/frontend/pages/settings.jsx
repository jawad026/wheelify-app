import React from 'react'
import { Box, Button, Card, Grid, Page, Text, TextField } from '@shopify/polaris'

const settings = () => {
  return (
    <Page>
      <p>This section gives you opportunity to set your Accounts and Business Settings as per your convenience, business plan and needs.</p>
      <Box paddingBlock={"400"}>

        <Card>
          <Box paddingBlockEnd={"400"}>
          <Text as="h5" variant="headingLg">
            Store Details
          </Text>
          </Box>
          <Grid gap={"400"} columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>

            <TextField
              label="Shop Name"
              value="carecartapps24"
            />
            <TextField
              label="Shop Owner"
              value="Shop owner"
            />
            <TextField
              label="Email Address"
              value="hC7wV@example.com"
              type="email"
            />
            <TextField
              label="Customer Address"
              value="Customer@example.com"
              type="email"
            />
            <TextField
              label="My shopify Domain"
              value="carecartapps24.myshopify.com"
            />
            <TextField
              label="Domain"
              value="carecartapps24.myshopify.com"
            />
            <TextField
              label="Shopify  Plan"
              value="Development"
            />

            <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>

              <Text as="h5" variant="headingLg">
                Location Details
              </Text>

            </Grid.Cell>

            <TextField
              label="City"
              value="Charleston"
            />
            <TextField
              label="City"
              value="Charleston"
            />
            <TextField
              label="State Province"
              value="South Carolina"
            />
            <TextField
              label="Country"
              value="US"
            />
            <TextField
              label="Zip/Postal Code"
              value="29403"
              type="number"
            />
            <TextField
              label="Phone"
              value="99988787"
              type="number"
            />
            <TextField
              label="Time Zone"
              value="Islamabad Standard Time"
            />

          </Grid>
          <Box paddingBlockStart={"400"}>
            <Button variant='primary'>Save</Button>
          </Box>
        </Card>
      </Box>


    </Page>
  )
}

export default settings
