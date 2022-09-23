import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MyLibrary from "./MyLibrary";
import "@testing-library/jest-dom";
jest.unmock("axios");

describe("Main Header", () => {
  test("should display the myLibrary tab", async () => {
    render(<MyLibrary />);
    const myLibraryTab = screen.getByRole("tablist");
    expect(myLibraryTab).toBeTruthy();
    expect(myLibraryTab).toBeVisible();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(2);
    expect(tabs[0].textContent).toBe("Currently Reading");
    expect(tabs[1].textContent).toBe("Finished");
  });

  test("should display the currently reading tab panel on clicking currently reading tab button", async () => {
    render(<MyLibrary />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toBeTruthy();
    expect(tabs[0].textContent).toBe("Currently Reading");
    fireEvent.click(tabs[0]);
    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toBeTruthy();
    expect(tabPanel).toBeVisible();
    expect(tabPanel.id).toContain("currentlyReading");
    const grid = screen.getByTestId("card-grid");
    expect(grid).toBeVisible();
  });

  test("should display the finished tab panel on clicking finished tab button", async () => {
    render(<MyLibrary />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toBeTruthy();
    expect(tabs[1].textContent).toBe("Finished");
    fireEvent.click(tabs[1]);
    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toBeTruthy();
    expect(tabPanel).toBeVisible();
    expect(tabPanel.id).toContain("finished");
    const grid = screen.getByTestId("card-grid");
    expect(grid).toBeVisible();
  });

  test("should route to myLibrary on clicking My Library button in main header", async () => {
    render(<MyLibrary />);
  });
});