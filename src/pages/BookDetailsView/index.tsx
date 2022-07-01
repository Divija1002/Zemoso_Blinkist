import React, { Fragment, useState, useEffect } from "react";
import BookDetailsViewTab from "../../components/molecules/BookDetailsViewTab";
import BookDetailsV from "../../components/organisms/BookDetailsV";
import { useLocation } from "react-router-dom";
import BasicTemplate from "../../components/templates/BasicTemplate";
import { Box, Typography } from "@mui/material";
import axios from "axios";

interface BookDetailViewType {
  id: number;
}

interface BookType {
  id: number;
  image: string;
  title: string;
  author: string[];
  readTime: number;
  readersCount?: string;
  status: string;
}

const BookDetailsView = () => {
  const location = useLocation();
  const state = location.state as BookDetailViewType;
  const { id } = state;

  const [value, setValue] = useState("reading");

  const passValue = (value: string) => {
    setValue(value);
  };

  const [books, setBooks] = useState<BookType[]>([]);

  const getBooks = () => {
    axios
      .get("http://localhost:8000/bookInfo")
      .then((response) => {
        console.log(response);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
    const interval = setInterval(() => {
      getBooks();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BasicTemplate
      content={
        <Fragment>
          <BookDetailsV id={id} />
          <BookDetailsViewTab passValue={passValue} />
          <Box
            sx={{
              paddingLeft: "264px",
              paddingBottom: "257px",
              height: "100px",
              width: "600px",
              paddingTop: "20px",
            }}
          >
            {books.map((book) =>
              book.id === id ? (
                value === "Who is it for?" ? (
                  <Typography variant="body2">
                    The book in this page is titled {book.title}
                  </Typography>
                ) : value === "About the author" ? (
                  <Typography variant="body2">
                    The author of the book is {book.author}
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and
                    Bill Lazier’s essential 1992 business handbook, Beyond
                    Entrepreneurship for the entrepreneurs, visionaries, and
                    innovators of today. This new edition combines the timeless
                    business advice and strategy of the original text,
                    supplemented with cutting-edge insights and case studies
                    pertinent to today’s business world.
                  </Typography>
                )
              ) : null
            )}
          </Box>
        </Fragment>
      }
    />
  );
};

export default BookDetailsView;
