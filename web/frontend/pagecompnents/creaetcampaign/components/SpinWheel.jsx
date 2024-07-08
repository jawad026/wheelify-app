import { Image, Text } from "@shopify/polaris";
import React from "react";
import SpinWheelPng from "../../../assets/image.png";
const SpinWheel = () => {
  return (
    <div className="w-fit  ">
        <h1 className="center">Spin to wind </h1>
      <Image source={SpinWheelPng} alt="Spin Wheel" id="spin" />
    </div>
  );
};

export default SpinWheel;
