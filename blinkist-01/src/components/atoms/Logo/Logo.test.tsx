import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import "@testing-library/jest-dom";

describe("End Icon Button", () => {
  test("checking the button label", () => {
    render(<Logo />);
    const logo = screen.getByTestId("blinkist-logo");
    expect(logo).toBeTruthy();
    expect(logo.className).toBe("logo");
    expect(logo).toBeVisible();
  });
});