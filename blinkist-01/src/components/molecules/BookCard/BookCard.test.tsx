import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BookCard from "./BookCard";
import {BrowserRouter as  Router } from "react-router-dom";

const books = [
  {
    id: 2,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    duration: 13,
    reads: "1.9k reads",
    category: "Entrepreneurship",
    image: "/images/coverimages/2.png",
    isInMyLibrary: true,
    isFinished: false,
  },
  {
    id: 3,
    title: "Doesn’t Hurt to Ask",
    author: "Trey Gowdy",
    duration: 13,
    reads: "1.9k reads",
    category: "Entrepreneurship",
    image: "/images/coverimages/3.png",
    isInMyLibrary: false,
    isFinished: false,
  },
  {
    id: 4,
    title: "The Fate of Food",
    author: "Amanda Little",
    duration: 13,
    reads: "1.9k reads",
    category: "Entrepreneurship",
    image: "/images/coverimages/4.png",
    isInMyLibrary: true,
    isFinished: true,
  },
];

function renderBookData(index: number) {
  render(<Router>
    <BookCard
      id={books[index].id}
      title={books[index].title}
      author={books[index].author}
      duration={books[index].duration}
      reads={books[index].reads}
      category={books[index].category}
      image={books[index].image}
      isFinished={books[index].isFinished}
      isInMyLibrary={books[index].isInMyLibrary}
      flag={false}
    /></Router>
  );
}

describe("Book Card", () => {
  describe("Book in the Library but not finished reading", () => {
    test("Book Card should be displayed", () => {
      renderBookData(0);
      const bookCardInLibrary = screen.getByTestId("book-card-2");
      expect(bookCardInLibrary).toBeTruthy();
      expect(bookCardInLibrary).toBeVisible();
    });

    test("Should display image, title, author and duration  of the book card", () => {
      renderBookData(0);
      const bookCardInLibrary = screen.getByTestId("book-card-2");
      expect(bookCardInLibrary).toBeTruthy();
      expect(bookCardInLibrary).toBeVisible();
      expect(bookCardInLibrary.textContent).toContain(
        "Bring Your Human to Work"
      );
      expect(bookCardInLibrary.textContent).toContain("Erica Keswin");
      expect(bookCardInLibrary.textContent).toContain("13-minute read");
      const bookImg = screen.getByTestId("book-image-2");
      expect(bookImg).toBeTruthy();
    });

    test("Book Card should have Finish reading Button, and have horizon button", async () => {
      renderBookData(0);
      const finishReadingButton = await screen.findByRole("button");
      expect(finishReadingButton).toBeTruthy();
      fireEvent.click(finishReadingButton);
    });
  });

  describe("Book not in the Library", () => {
    test("Book Card should be displayed", async () => {
      renderBookData(1);
      const bookCardNotInLibrary = screen.getByTestId("book-card-3");
      expect(bookCardNotInLibrary).toBeTruthy();
      expect(bookCardNotInLibrary).toBeVisible();
    });

    test("Should display title, author and duration  of the book card", () => {
      renderBookData(1);
      const bookCardInLibrary = screen.getByTestId("book-card-3");
      expect(bookCardInLibrary).toBeTruthy();
      expect(bookCardInLibrary).toBeVisible();
      expect(bookCardInLibrary.textContent).toContain("Doesn’t Hurt to Ask");
      expect(bookCardInLibrary.textContent).toContain("Trey Gowdy");
      expect(bookCardInLibrary.textContent).toContain("13-minute read");
    });

    test("Book Card should have Add To Library Button", async () => {
      renderBookData(1);
      const addToLibraryButton = await screen.findByRole("button");
      expect(addToLibraryButton).toBeTruthy();
    });

    test("Book Card should have Add To Library Button, and not have horizon button", async () => {
      renderBookData(1);
      const addToLibraryButton = await screen.findByRole("button");
      expect(addToLibraryButton).toBeTruthy();
      fireEvent.click(addToLibraryButton);
      const moreIcon = screen.queryByTestId(/more-icon/i);
      expect(moreIcon).toBeFalsy();
    });
  });
  describe("Book in the library not finished reading", () => {
    test("Book Card should be displayed", async () => {
      renderBookData(2);
      const currentlyReadingBookCard = screen.getByTestId("book-card-4");
      expect(currentlyReadingBookCard).toBeTruthy();
      expect(currentlyReadingBookCard).toBeVisible();
    });

    test("Should display title, author and duration  of the book card", () => {
      renderBookData(2);
      const currentlyReading = screen.getByTestId("book-card-4");
      expect(currentlyReading).toBeTruthy();
      expect(currentlyReading).toBeVisible();
      expect(currentlyReading.textContent).toContain("The Fate of Food");
      expect(currentlyReading.textContent).toContain("Amanda Little");
      expect(currentlyReading.textContent).toContain("13-minute read");
    });

    test("Book Card should have Finish Reading Button", async () => {
      renderBookData(2);
      const finishReadingButton = await screen.findByRole("button");
      expect(finishReadingButton).toBeTruthy();
    });

    test("Book Card should have Finish Reading button", async () => {
      renderBookData(2);
      const finishReadingButton = await screen.findByRole("button");
      expect(finishReadingButton).toBeTruthy();
      fireEvent.click(finishReadingButton);
    });
  });
});
