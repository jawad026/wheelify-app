import React from "react";
import DynamicGradientSVG from "./DynamicSVG";
import { Tooltip, Text, Icon } from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";
const PreviewChatBot = ({ color, colorFont, currentGradient ,orderTrackingLabel,greetings }) => {
  const color1 = "#fdb99b"; // Replace with your dynamic color
  const color2 = "#a770ef"; // Replace with your dynamic color

  return (
    <div className="brand_setup_section">
      <div class="cc_chatbot preview">
        <div
          class="sm_chat_option"
          style={{ width: "100%", fontSize: "20px", fontWeight: "600" }}
        >
          <DynamicGradientSVG
            color1={currentGradient.color1}
            color2={currentGradient.color2}
            text={"store-test445"}
            colorFont={colorFont}
          />
        </div>
        <ul class="chatbox">
          <li class="chat incoming">
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              id="Capa_1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6627 11.2843H20.0881C19.0677 7.98263 16.0602 5.54249 12.4672 5.34985L12.3276 4.39198C12.8432 4.2475 13.2245 3.7766 13.2245 3.22007C13.2245 2.54582 12.6767 2 12 2C11.3233 2 10.7755 2.54582 10.7755 3.22007C10.7755 3.78195 11.1568 4.25285 11.6724 4.39198L11.5328 5.34985C7.93985 5.54784 4.93233 7.98799 3.91192 11.2843H3.33727C2.6015 11.2843 2 11.8783 2 12.6168V14.9231C2 15.6562 2.59613 16.2556 3.33727 16.2556H3.91192C4.98067 19.6964 8.20301 22.2061 12 22.2061C15.797 22.2061 19.0247 19.6964 20.0881 16.2556H20.6627C21.3985 16.2556 22 15.6616 22 14.9231V12.6168C22 11.8837 21.4039 11.2843 20.6627 11.2843ZM11.7583 19.7927C8.6058 19.6696 6.05478 17.1171 5.95274 13.9706C5.88292 11.782 6.98389 9.84485 8.68099 8.7318C9.13749 8.43213 9.7551 8.60337 10.0021 9.09033C10.1847 9.44886 10.5016 9.66826 10.8453 9.66826H13.1547C13.4984 9.66826 13.8206 9.44886 13.9979 9.09033C14.2395 8.60337 14.8571 8.43213 15.3136 8.7318C16.9624 9.80739 18.0526 11.6696 18.0526 13.7726C18.0526 17.176 15.2062 19.9265 11.7637 19.7981L11.7583 19.7927Z"
                fill="url(#paint0_linear_11_130)"
              ></path>
              <path
                d="M14.884 12.5742C13.8905 12.5742 13.0795 13.3822 13.0795 14.3722C13.0795 14.6558 13.3104 14.8806 13.5897 14.8806C13.869 14.8806 14.0999 14.6505 14.0999 14.3722C14.0999 13.9441 14.449 13.5963 14.8786 13.5963C15.3083 13.5963 15.6574 13.9441 15.6574 14.3722C15.6574 14.6558 15.8883 14.8806 16.1676 14.8806C16.4468 14.8806 16.6778 14.6505 16.6778 14.3722C16.6778 13.3822 15.8668 12.5742 14.8733 12.5742H14.884Z"
                fill="url(#paint1_linear_11_130)"
              ></path>
              <path
                d="M9.11065 12.5742C8.11709 12.5742 7.30614 13.3822 7.30614 14.3722C7.30614 14.6558 7.53707 14.8806 7.81634 14.8806C8.09561 14.8806 8.32654 14.6505 8.32654 14.3722C8.32654 13.9441 8.67563 13.5963 9.10528 13.5963C9.53492 13.5963 9.88401 13.9441 9.88401 14.3722C9.88401 14.6558 10.1149 14.8806 10.3942 14.8806C10.6735 14.8806 10.9044 14.6505 10.9044 14.3722C10.9044 13.3822 10.0935 12.5742 9.09991 12.5742H9.11065Z"
                fill="url(#paint2_linear_11_130)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_11_130"
                  x1="12"
                  y1="5.50503"
                  x2="12"
                  y2="22.1794"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00E46B"></stop>
                  <stop offset="1" stop-color="#086FEC"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11_130"
                  x1="14.884"
                  y1="2.00026"
                  x2="14.884"
                  y2="2.00026"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00E46B"></stop>
                  <stop offset="1" stop-color="#086FEC"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_11_130"
                  x1="9.11065"
                  y1="5.50529"
                  x2="9.11065"
                  y2="22.1796"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00E46B"></stop>
                  <stop offset="1" stop-color="#086FEC"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p>
              {greetings}
            </p>
          </li>
          <li class="chat outgoing">
            <p
              class="change_color"
              style={{
                backgroundColor: color,
                color: colorFont,
              }}
            >
              Create your first message to greet customers when they engage with
              the bot
            </p>
          </li>
          <li class="chat outgoing">
            <div
              class="cc_pre_define_btn change_color"
              id="order-tracking-button"
              style={{ backgroundColor: color, color: colorFont }}
            >
             {orderTrackingLabel}
            </div>
            <Tooltip  content="This is customizable text label for Order Tracking button.">
              <Icon source={InfoIcon} tone="base" />{" "}
            </Tooltip>
          </li>

          <div
            id="jsPoweredByTrademark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "rgb(153, 153, 153)",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "#5f6368" }}
              target="_blank"
              href="https://apps.shopify.com/shopbuddy-ai-sales-chatbot"
            >
              <span>Powered by ShopBuddy</span>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PreviewChatBot;
