import React from "react";
import blinkistlogo from "../Logo/blinkistlogo.png";

export default function Logo() {
  return (
    <img
      className="logo"
      src={blinkistlogo}
      alt="Blinkist"
      height="26"
      width="124"
      data-testid="blinkist-logo"
    />
  );
}
