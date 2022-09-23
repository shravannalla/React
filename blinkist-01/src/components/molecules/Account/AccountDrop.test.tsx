import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountDrop from "./AccountDrop";

describe("AccountDrop", () => {
  test("AccountDrop Button Should be Visible", () => {
    render(<AccountDrop />);
    const accountDropDownButton = screen.getByRole("button");
    expect(accountDropDownButton).toBeVisible();
  });

  test("On clicking on account button, dropdown menu should be open", () => {
    render(<AccountDrop />);
    const accountDropDownButton = screen.getByRole("button");
    expect(accountDropDownButton).toBeVisible();
    fireEvent.click(accountDropDownButton);
    const menu = screen.getByTestId("account-dropdown-menu");
    expect(menu).toBeVisible();
    fireEvent.click(accountDropDownButton);
  });

  test("Should display a drop down with items", () => {
    render(<AccountDrop />);
    const accountDropDownButton = screen.getByRole("button");
    expect(accountDropDownButton).toBeVisible();
    fireEvent.click(accountDropDownButton);
    const menuitems = screen.getAllByRole("menuitem");
    expect(menuitems.length).toBe(1);
    expect(menuitems[0].textContent).toContain("Logout");
    fireEvent.click(accountDropDownButton);
  });
});