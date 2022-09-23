import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardGrid from "./CardGrid";
import { books } from "../../../data/bookdata";
import { BrowserRouter } from "react-router-dom";

interface CardGridProps {
  books: {
    id: number;
    title: string;
    author: string;
    duration: number;
    reads: string;
    category: string;
    image: string;
    isInMyLibrary: boolean;
    isFinished: boolean;
  }[];
}

const MockCardGrid = (props: CardGridProps) => {
  return (
    <BrowserRouter>
      <CardGrid books={props.books} flag={false} />
    </BrowserRouter>
  );
};
const bookList = books.slice(0, 6);

describe("Card Grid", () => {
  it("Should render book card", async () => {
    render(<MockCardGrid books={bookList} />);
    const bookCard = screen.getByTestId("book-card-2");
    expect(bookCard).toBeInTheDocument();
  });

  it("Should render multiple book cards", () => {
    render(<MockCardGrid books={bookList} />);
    const bookCards = screen.getAllByTestId(/book-card/i);
    expect(bookCards).toBeTruthy();
    expect(bookCards.length).toBe(6);
  });

  it("Should render button on book cards", () => {
    render(<MockCardGrid books={bookList} />);
    const addToLibraryButtons = screen.getAllByRole("button");
    expect(addToLibraryButtons.length).toBe(6);
  });

  it("Clicking on book card with id 1 should redirect to /bookinfo", () => {
    render(<MockCardGrid books={bookList} />);
    const bookCard = screen.getByTestId("book-card-1");
    fireEvent.click(bookCard);
    expect(window.location.pathname).toEqual("/bookinfo");
  });
});