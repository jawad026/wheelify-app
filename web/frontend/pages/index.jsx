import {
  Banner,
  Box,
  Card,
  Divider,
  Grid,
  InlineGrid,
  Link,
  Page,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import AnalyticsCard from "../components/ui/AnalyticsCard/AnalyticsCard";
import BannerNotification from "../components/ui/Banner/Banner";
import { BarChart, LineChart } from "@shopify/polaris-viz";

export default function HomePage() {
  const { t } = useTranslation();
  const data = [
    {
      heading: "Total Impressions",
      subheading: "Spinner display on store",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Subscribers",
      subheading: "No. of users subscribe till now",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Discount Used",
      subheading: "No. of discounts used",
      percentage: "910",
      count: "20",
    },
    {
      heading: "Total Sales",
      subheading: "Additional sales by spinner",
      percentage: "910",
      count: "20",
    },
  ];
  const sampleData = [
    {
      name: "Sales",
      data: [
        { value: 150, key: "2021-01-01T12:00:00" },
        { value: 200, key: "2021-01-02T12:00:00" },
        { value: 250, key: "2021-01-03T12:00:00" },
        { value: 100, key: "2021-01-04T12:00:00" },
        { value: 300, key: "2021-01-05T12:00:00" },
        { value: 200, key: "2021-01-06T12:00:00" },
        { value: 250, key: "2021-01-07T12:00:00" },
      ],
    },
    {
      name: "Marketing",
      data: [
        { value: 120, key: "2021-01-01T12:00:00" },
        { value: 180, key: "2021-01-02T12:00:00" },
        { value: 240, key: "2021-01-03T12:00:00" },
        { value: 110, key: "2021-01-04T12:00:00" },
        { value: 260, key: "2021-01-05T12:00:00" },
        { value: 190, key: "2021-01-06T12:00:00" },
        { value: 220, key: "2021-01-07T12:00:00" },
      ],
    },
    {
      name: "Points",
      data: [
        { value: 90, key: "2021-01-01T12:00:00" },
        { value: 140, key: "2021-01-02T12:00:00" },
        { value: 200, key: "2021-01-03T12:00:00" },
        { value: 80, key: "2021-01-04T12:00:00" },
        { value: 230, key: "2021-01-05T12:00:00" },
        { value: 170, key: "2021-01-06T12:00:00" },
        { value: 210, key: "2021-01-07T12:00:00" },
      ],
    },
  ];

  return (
    <Page title="Dashboard">
      <BannerNotification
        text={
          "Hi  We've updated our Terms & Conditions and Privacy Policy. Please take a moment to review them. I Accept"
        }
      />
      <Card>
        <InlineGrid columns={4}>
          {data.map((item, index) => (
            <AnalyticsCard
              key={index}
              heading={item.heading}
              subheading={item.subheading}
              percentage={item.percentage}
              count={item.count}
            />
          ))}
        </InlineGrid>
      </Card>

      <Box paddingBlock={"400"}>
        <Text variant="bodyLg" tone="subdued">
          Learn how many subscribers are collected and additional sales &
          revenue are generated.
        </Text>
      </Box>

      <BannerNotification
        text={
          "Abandoned Cart Recovery Email. Push Notifications & Cart Reminder app."
        }
      />

      <Box paddingBlock={"400"}>
        <Grid gap={"400"}>
          <Grid.Cell
            columnSpan={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
              xl: 12,
            }}
          >
            <Box paddingBlockEnd={"400"}>
              <Text variant="headingLg" tone="base">
                Statistics 
              </Text>
            </Box>
            <Card>
              <Box paddingBlock={"100"}>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="headingLg" tone="base">
                    Additional Revenue
                  </Text>
                </Box>
                <Divider />
                <Box paddingBlock={"400"}>
                  <Text variant="heading3xl" fontWeight="regular">
                    190
                  </Text>
                </Box>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="bodyLg" tone="subdued">
                    Last 30 days
                  </Text>
                </Box>
              </Box>
              <BarChart data={sampleData} />
            </Card>
          </Grid.Cell>

          <Grid.Cell
            columnSpan={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card padding={"600"}>
              <Box paddingBlock={"100"}>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="headingLg" tone="base">
                    Additional Revenue
                  </Text>
                </Box>
                <Divider />
                <InlineGrid columns={2} alignItems="center" gap={"400"}>
                  <Box paddingBlock={"400"}>
                    <Text variant="bodyLg" tone="subdued">
                      Last 30 days
                    </Text>
                  </Box>
                  <Box paddingBlockEnd={"200"}>
                    <Text
                      variant="heading3xl"
                      alignment="end"
                      fontWeight="regular"
                    >
                      190
                    </Text>
                  </Box>
                </InlineGrid>
              </Box>
              <Box paddingBlock={"0"} minHeight="200px">
                <LineChart
                  data={[
                    {
                      name: "Sales",
                      data: [
                        { value: 80, key: "2020-04-01T12:00:00" },
                        { value: 99, key: "2020-04-02T12:00:00" },
                        { value: 1000, key: "2020-04-03T12:00:00" },
                        { value: 2, key: "2020-04-04T12:00:00" },
                        { value: 22, key: "2020-04-05T12:00:00" },
                        { value: 6, key: "2020-04-06T12:00:00" },
                        { value: 5, key: "2020-04-07T12:00:00" },
                      ],
                    },
                  ]}
                />
              </Box>
            </Card>
          </Grid.Cell>
          <Grid.Cell
            columnSpan={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card padding={"600"}>
              <Box paddingBlock={"100"}>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="headingLg" tone="base">
                    New Subscribers
                  </Text>
                </Box>
                <Divider />
                <InlineGrid columns={2} alignItems="center" gap={"400"}>
                  <Box paddingBlock={"400"}>
                    <Text variant="bodyLg" tone="subdued">
                      Last 30 days
                    </Text>
                  </Box>
                  <Box paddingBlockEnd={"200"}>
                    <Text
                      variant="heading3xl"
                      alignment="end"
                      fontWeight="regular"
                    >
                      190
                    </Text>
                  </Box>
                </InlineGrid>
              </Box>
              <Box paddingBlock={"0"} minHeight="200px">
                <LineChart
                  data={[
                    {
                      name: "Sales",
                      data: [
                        { value: 80, key: "2020-04-01T12:00:00" },
                        { value: 99, key: "2020-04-02T12:00:00" },
                        { value: 1000, key: "2020-04-03T12:00:00" },
                        { value: 2, key: "2020-04-04T12:00:00" },
                        { value: 22, key: "2020-04-05T12:00:00" },
                        { value: 6, key: "2020-04-06T12:00:00" },
                        { value: 5, key: "2020-04-07T12:00:00" },
                      ],
                    },
                  ]}
                />
              </Box>
            </Card>
          </Grid.Cell>

          <Grid.Cell
            columnSpan={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card padding={"600"}>
              <Box paddingBlock={"100"}>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="headingLg" tone="base">
                    Discount Used
                  </Text>
                </Box>
                <Divider />
                <InlineGrid columns={2} alignItems="center" gap={"400"}>
                  <Box paddingBlock={"400"}>
                    <Text variant="bodyLg" tone="subdued">
                      Last 30 days
                    </Text>
                  </Box>
                  <Box paddingBlockEnd={"200"}>
                    <Text
                      variant="heading3xl"
                      alignment="end"
                      fontWeight="regular"
                    >
                      190
                    </Text>
                  </Box>
                </InlineGrid>
              </Box>
              <Box paddingBlock={"0"} minHeight="200px">
                <LineChart
                  data={[
                    {
                      name: "Sales",
                      data: [
                        { value: 80, key: "2020-04-01T12:00:00" },
                        { value: 99, key: "2020-04-02T12:00:00" },
                        { value: 1000, key: "2020-04-03T12:00:00" },
                        { value: 2, key: "2020-04-04T12:00:00" },
                        { value: 22, key: "2020-04-05T12:00:00" },
                        { value: 6, key: "2020-04-06T12:00:00" },
                        { value: 5, key: "2020-04-07T12:00:00" },
                      ],
                    },
                  ]}
                />
              </Box>
            </Card>
          </Grid.Cell>
          <Grid.Cell
            columnSpan={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card padding={"600"}>
              <Box paddingBlock={"100"}>
                <Box paddingBlockEnd={"200"}>
                  <Text variant="headingLg" tone="base">
                    Impressions
                  </Text>
                </Box>
                <Divider />
                <InlineGrid columns={2} alignItems="center" gap={"400"}>
                  <Box paddingBlock={"400"}>
                    <Text variant="bodyLg" tone="subdued">
                      Last 30 days
                    </Text>
                  </Box>
                  <Box paddingBlockEnd={"200"}>
                    <Text
                      variant="heading3xl"
                      alignment="end"
                      fontWeight="regular"
                    >
                      190
                    </Text>
                  </Box>
                </InlineGrid>
              </Box>
              <Box paddingBlock={"0"} minHeight="200px">
                <LineChart
                  data={[
                    {
                      name: "Sales",
                      data: [
                        { value: 80, key: "2020-04-01T12:00:00" },
                        { value: 99, key: "2020-04-02T12:00:00" },
                        { value: 1000, key: "2020-04-03T12:00:00" },
                        { value: 2, key: "2020-04-04T12:00:00" },
                        { value: 22, key: "2020-04-05T12:00:00" },
                        { value: 6, key: "2020-04-06T12:00:00" },
                        { value: 5, key: "2020-04-07T12:00:00" },
                      ],
                    },
                  ]}
                />
              </Box>
            </Card>
          </Grid.Cell>
        </Grid>
      </Box>
    </Page>
  );
}
