
import React from "react";
import CustomIconButton from "./CustomIconButton";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchIcon from "@mui/icons-material/Search";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

describe("Custom icon button", () => {
  const mockHandleClick = jest.fn();
  test("renders Icon", () => {
    render(
      <CustomIconButton
        icon={<SearchIcon />}
        onClick={mockHandleClick}
        testId="icon-button"
      />
    );
  });
  it("Checking the click", () => {
    render(
      <CustomIconButton
        icon={<SearchIcon />}
        onClick={mockHandleClick}
        testId="icon-button"
      />
    );
    const defaultButton = screen.getByTestId("icon-button");
    expect(defaultButton).toBeTruthy();
    fireEvent.click(defaultButton);
  });
});