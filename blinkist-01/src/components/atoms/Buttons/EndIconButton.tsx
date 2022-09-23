import React from "react";
import Button from "@mui/material/Button";

interface EndIconButtonProps {
  id?: string;
  variant: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  label: string;
  color?: "primary" | "secondary";
  endIcon: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  testId?:string;
}

const EndIconButton = (props: EndIconButtonProps) => {
  return (
    <Button
      id={props.id}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      endIcon={props.endIcon}
      disableRipple={true}
      data-testid={props.testId}
      style={{ textTransform: "none", fontFamily: "ceraProTrue", fontSize: 18 }}
    >
      {props.label}
    </Button>
  );
};

export default EndIconButton;