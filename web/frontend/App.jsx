import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { PolarisVizProvider } from "@shopify/polaris-viz";
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import "@shopify/polaris-viz/build/esm/styles.css";
import "./style.css";
export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob("./pages/**/*.[jt]sx", {
    eager: true,
  });
  const { t } = useTranslation();

  return (
    <PolarisVizProvider>
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <QueryProvider>
              <NavigationMenu
                navigationLinks={[
                  {
                    label: "Campaigns",
                    destination: "/campaigns",
                  },
                  {
                    label: "Privacy",
                    destination: "/privacypolicy",
                  },
                  {
                    label: "Settings",
                    destination: "/settings",
                  },
                  {
                    label: "Payment Plan",
                    destination: "/paymentplan",
                  },
                  {
                    label: "Ab Testing",
                    destination: "/abtesting",
                  },
                ]}
              />
              <Routes pages={pages} />
            </QueryProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    </PolarisVizProvider>
  );
}
