import { TextField } from "@shopify/polaris";
import React from "react";

const ColorInput = ({ label, color = "#000000", setColor = () => {} }) => {
  return (
    <div className="input-color">
      <TextField value={color} label={label} />
      <input
        type="color"
        value={color}
        className="color"
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorInput;
