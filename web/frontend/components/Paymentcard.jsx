import { BlockStack, Box, Button, Card, List, Page, Text } from '@shopify/polaris'
import React from 'react'

const Paymentcard = ({ list, title, price }) => {
  return (
    <Box maxWidt='30px' width='350px' position='relative'>

      <Box background='bg-fill-inverse' borderStartStartRadius="300" borderStartEndRadius="300" paddingBlock={400} shadow="400">
        <Text tone='text-inverse' as="h5" variant="headingLg" alignment="center">
          {title}
        </Text>
        <Text tone='text-inverse' as="p" variant="headingLg" alignment="center">
          {price}
        </Text>
      </Box>
      <Box minHeight='300px' background='bg-surface-hover' padding={400} borderEndEndRadius="300" borderEndStartRadius="300" shadow="400">
        <List type="" gap='loose' >
          {list.map((item) => (
            <Box paddingBlockEnd={200}>

              <List.Item >{item}</List.Item>

            </Box>

          ))}

        </List>
        <Box paddingBlockStart={400} position='absolute' insetBlockEnd={400} >
          <Button variant='primary'>Pick This Plan</Button>
        </Box>
      </Box>


    </Box>
  )
}

export default Paymentcard


const Tick = (
  <svg
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7803 0.96967C12.0732 1.26256 12.0732 1.73744 11.7803 2.03033L5.28033 8.53033C4.98744 8.82322 4.51256 8.82322 4.21967 8.53033L0.96967 5.28033C0.676777 4.98744 0.676777 4.51256 0.96967 4.21967C1.26256 3.92678 1.73744 3.92678 2.03033 4.21967L4.75 6.93934L10.7197 0.96967C11.0126 0.676777 11.4874 0.676777 11.7803 0.96967Z"
      fill="#4A4A4A"
    />
  </svg>
);
