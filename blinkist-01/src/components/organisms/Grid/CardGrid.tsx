import React from "react";
import Grid from "@mui/material/Grid";
import BookCard from "../../molecules/BookCard/BookCard";
import { Link } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  author: string;
  duration: number;
  reads: string;
  category: string;
  image: string;
  isInMyLibrary: boolean;
  isFinished: boolean;
}

interface CardGridProps {
  books: Book[];
  flag: boolean;
}

const CardGrid = (props: CardGridProps) => {
  return (
    <Grid container spacing={3} data-testid="card-grid">
      {props.books.map((book: Book, index: number) => {
        if (book.id === 1) {
          return (
            <Grid item key={index} xs={6} sm={6} md={4} maxWidth={284} className="bookCard">
              <Link to={"/bookinfo"} style={{textDecoration:"none"}}>
                <BookCard
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  duration={book.duration}
                  reads={book.reads}
                  category={book.category}
                  image={book.image}
                  isInMyLibrary={book.isInMyLibrary}
                  isFinished={book.isFinished}
                  flag={props.flag}
                />
              </Link>
            </Grid>
          );
        }
        return (
          <Grid item key={index} xs={6} sm={6} md={4} maxWidth={284}>
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              duration={book.duration}
              reads={book.reads}
              category={book.category}
              image={book.image}
              isInMyLibrary={book.isInMyLibrary}
              isFinished={book.isFinished}
              flag={props.flag}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardGrid;