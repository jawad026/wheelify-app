import { Grid, TextField } from "@shopify/polaris";
import React, { useState } from "react";
import ColorInput from "../../../components/ui/ColorInput/ColorInput";

const CustomizeLook = () => {
  const [desktopBg, setDesktopBg] = useState("");
  const [mobileBg, setMobileBg] = useState("");
  const [bgTriggerColor, setBgTriggerColor] = useState("");
  const [wheelPinColor, setWheelPinColor] = useState("");
  const [wheelBorderColor, setWheelBorderColor] = useState("");
  const [centerCircleFillColor, setCenterCircleFillColor] = useState("");
  const [centerCircleBorder, setCenterCircleBorder] = useState("");
  const [closeIconColor, setCloseIconColor] = useState("");
  const [triggerTextColor, setTriggerTextColor] = useState("");
  const [triggerButtonText, setTriggerButtonText] = useState("");

  return (
    <Grid gap={"100"} columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
      <TextField
        label="Background for Desktop"
        placeholder="Enter your URL"
        value={desktopBg}
        onChange={(value) => setDesktopBg(value)}
      />
      <TextField
        label="Background for Mobile"
        placeholder="Enter your URL"
        value={mobileBg}
        onChange={(value) => setMobileBg(value)}
      />
      <ColorInput
        label={"Background & Trigger Color"}
        color={bgTriggerColor}
        setColor={(value) => setBgTriggerColor(value)}
      />
      <ColorInput
        label={"Wheel Pin Color"}
        color={wheelPinColor}
        setColor={(value) => setWheelPinColor(value)}
      />
      <ColorInput
        label={"Wheel Border Color"}
        color={wheelBorderColor}
        setColor={(value) => setWheelBorderColor(value)}
      />
      <ColorInput
        label={"Center Circle Fill Color"}
        color={centerCircleFillColor}
        setColor={(value) => setCenterCircleFillColor(value)}
      />
      <ColorInput
        label={"Center Circle Border"}
        color={centerCircleBorder}
        setColor={(value) => setCenterCircleBorder(value)}
      />
      <ColorInput
        label={"Close Icon Color"}
        color={closeIconColor}
        setColor={(value) => setCloseIconColor(value)}
      />
      <ColorInput
        label={"Trigger Text Color"}
        color={triggerTextColor}
        setColor={(value) => setTriggerTextColor(value)}
      />
      <ColorInput
        label={"Trigger Button Text"}
        color={triggerButtonText}
        setColor={(value) => setTriggerButtonText(value)}
      />
    </Grid>
  );
};

export default CustomizeLook;
