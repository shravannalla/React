import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ExploreDialog from "./ExploreDialog";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockExploreDialog = () => {
  return (
    <BrowserRouter>
      <ExploreDialog />
    </BrowserRouter>
  );
};

describe("Explore", () => {
  test("should display the explore dialog", () => {
    render(<MockExploreDialog />);
    const explore = screen.getByTestId("explore-button");
    expect(explore).toBeTruthy();
    expect(explore).toBeVisible();
    expect(explore.textContent).toBe("Explore");
    fireEvent.click(explore);
    const exploreMenu = screen.getByRole("menu");
    expect(exploreMenu).toBeTruthy();
    expect(exploreMenu).toBeVisible();
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems.length).toBe(18);
    fireEvent.click(explore);
  });

  test("should route to respective url on clicking category", () => {
    render(<MockExploreDialog />);
    const explore = screen.getByTestId("explore-button");
    fireEvent.click(explore);
    screen.getByRole("menu");
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems.length).toBe(18);
    const creativityCaregory = screen.getByText("History");
    fireEvent.click(creativityCaregory);
    expect(window.location.pathname).toBe("/explore/History");
    fireEvent.click(explore);
    const entrepreneurshipCategory = screen.getByText("Entrepreneurship");
    fireEvent.click(entrepreneurshipCategory);
    expect(window.location.pathname).toBe("/explore/Entrepreneurship");
  });
});

export {};