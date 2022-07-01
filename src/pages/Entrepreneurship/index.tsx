import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "../../components/molecules/Banner";
import BCard from "../../components/molecules/BCard";
import BasicTemplate from "../../components/templates/BasicTemplate";
import {
  FEATURED_AUDIO_BLINK,
  JUST_ADDED,
  TRENDING_BOOKS,
} from "../../components/Constants";

interface BookType {
  id: number;
  image: string;
  title: string;
  author: string[];
  readTime: number;
  readersCount?: string;
  status: string;
}

const Entrepreneurship = () => {
  const TrendingBooks = TRENDING_BOOKS;

  const JustAdded = JUST_ADDED;

  const FeaturedAudioBlink = FEATURED_AUDIO_BLINK;

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

  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextInput(event.target.value);
  };

  return (
    <BasicTemplate
      content={
        <Fragment>
          <Banner />
          <Box
            sx={{
              paddingLeft: "266px",
              paddingTop: "58px",
              display: "flex",
              gap: "25px",
              alignItems: "flex-end",
            }}
          >
            <SearchIcon />
            <TextField
              id="standard-basic"
              label="Search by title or author"
              variant="standard"
              style={{ width: "658px" }}
              value={textInput}
              onChange={handleTextInputChange}
            />
          </Box>
          {textInput === "" ? (
            <Fragment>
              <Box
                sx={{
                  paddingLeft: "264px",
                  paddingTop: "80px",
                }}
              >
                <Typography variant="h3" sx={{ color: "#03314B" }}>
                  Trending blinks
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingX: "259px",
                  paddingTop: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {books.map((book) =>
                  TrendingBooks.includes(book.title) ? (
                    <BCard book={book} trending={true}></BCard>
                  ) : null
                )}
              </Box>
              <Box
                sx={{
                  paddingLeft: "264px",
                  paddingTop: "80px",
                }}
              >
                <Typography variant="h3" sx={{ color: "#03314B" }}>
                  Just added
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingX: "259px",
                  paddingTop: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {books.map((book) =>
                  JustAdded.includes(book.title) ? (
                    <BCard book={book} justAdded={true}></BCard>
                  ) : null
                )}
              </Box>
              <Box
                sx={{
                  paddingLeft: "264px",
                  paddingTop: "80px",
                }}
              >
                <Typography variant="h3" sx={{ color: "#03314B" }}>
                  Featured audio blinks
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingX: "259px",
                  paddingTop: "25px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {books.map((book) =>
                  FeaturedAudioBlink.includes(book.title) ? (
                    <BCard book={book} featured={true}></BCard>
                  ) : null
                )}
              </Box>
            </Fragment>
          ) : (
            <Box
              sx={{
                paddingX: "259px",
                paddingTop: "80px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {books.map((book) =>
                book.title.toLowerCase().indexOf(textInput) > -1 ||
                book.author.indexOf(textInput) > -1 ? (
                  <BCard book={book}></BCard>
                ) : null
              )}
            </Box>
          )}
        </Fragment>
      }
    />
  );
};

export default Entrepreneurship;
