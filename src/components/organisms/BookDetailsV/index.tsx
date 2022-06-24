import { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import BookDetails from "../../atoms/BookDetails";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface BookDetailsVType {
  id?: number;
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

const BookDetailsV = ({ id }: BookDetailsVType) => {
  const subtitle5: React.CSSProperties = {
    fontFamily: "Cera Pro",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "25px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#03314B",
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

  const statusTofinished = (book: BookType) => {
    book.status = "finished";
    axios
      .patch(`http://localhost:8000/bookInfo/${book.id}`, book)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const statusToreading = (book: BookType) => {
    book.status = "reading";
    axios
      .patch(`http://localhost:8000/bookInfo/${book.id}`, book)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      {books.map((book) =>
        book.id === id ? (
          <Fragment>
            <Box sx={{ paddingLeft: "264px", paddingTop: "90px" }}>
              <Typography variant="body2">Get the key ideas from</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "132px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "24px",
                  paddingLeft: "264px",
                  paddingTop: "40px",
                }}
              >
                <Typography variant="h1" sx={{ color: "#03314B" }}>
                  {book.title}
                </Typography>
                <Typography sx={{ subtitle5 }}>
                  Turning Your Business into an Enduring Great Company
                </Typography>
                <Typography variant="body1">{book.author}</Typography>
                <BookDetails readTime={book.readTime} />
              </Box>
              <Box
                component="img"
                src={book.image}
                alt="book image"
                sx={{ height: "292px", width: "294px" }}
              ></Box>
            </Box>
            <Box sx={{ display: "flex", paddingLeft: "264px", gap: "24px" }}>
              <Button
                variant="text"
                sx={{
                  width: "122px",
                  height: "44px",
                  border: "1px solid #042330",
                }}
                onClick={() => statusToreading(book)}
                disabled={book.status === "reading" ? true : false}
              >
                Read now
              </Button>
              <Button
                variant="contained"
                sx={{ width: "170px", height: "44px" }}
                onClick={() => statusTofinished(book)}
                disabled={
                  book.status === ("finished" || "fresh") ? true : false
                }
              >
                Finished Reading
              </Button>
              <Box sx={{ height: "44px", width: "151px", display: "flex" }}>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: "20px",
                    color: "#6D787E",
                    padding: "12px",
                  }}
                >
                  Send To Kindle
                </Typography>
                <Box
                  component="img"
                  src="images/Vector22.png"
                  alt="arrow"
                  sx={{ height: "11px", width: "12px", paddingTop: "16px" }}
                ></Box>
              </Box>
            </Box>
          </Fragment>
        ) : null
      )}
    </Fragment>
  );
};

export default BookDetailsV;
