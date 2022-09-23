import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EndIconButton from "./EndIconButton";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

const handleClick = jest.fn();

describe("End Icon Button", () => {
  test("checking the button label", () => {
    render(
      <EndIconButton
        label="Hello"
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        testId="end-icon-button"
      />
    );
    const button = screen.getByTestId("end-icon-button");
    expect(button.textContent).toBe("Hello");
  });

  test("checking the click", () => {
    render(
      <EndIconButton
        label="Hello"
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        testId="end-icon-button"
      />
    );
    const button = screen.getByTestId("end-icon-button");
    fireEvent.click(button);
  });

  test("Checking the icon", () => {
    render(
      <EndIconButton
        label="Hello"
        variant="outlined"
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        testId="end-icon-button"
        onClick={handleClick}
      />
    );
    const icon = screen.getByTestId("KeyboardArrowDownOutlinedIcon");
    expect(icon).toBeTruthy();
  });
});