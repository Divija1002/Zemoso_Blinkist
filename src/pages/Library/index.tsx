import React, { Fragment, useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import HeaderTab from "../../components/molecules/HeaderTab";
import Theme from "../../Theme/ThemeFile";
import BasicTemplate from "../../components/templates/BasicTemplate";
import axios from "axios";
import BCard from "../../components/molecules/BCard";

interface BookType {
  id: number;
  image: string;
  title: string;
  author: string[];
  readTime: number;
  readersCount?: string;
  status: string;
}

const Library = () => {
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
          <Typography
            variant="h1"
            sx={{ paddingLeft: "264px", paddingTop: "89px", color: "#03314B" }}
          >
            My Library
          </Typography>
          <HeaderTab
            tabStyle={Theme.typography.subtitle1}
            passValue={passValue}
          />
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            paddingX={"259px"}
            paddingTop={"25px"}
          >
            {books.map((book) =>
              book.status === value ? (
                <BCard book={book} key={book.id}></BCard>
              ) : null
            )}
          </Box>
        </Fragment>
      }
    />
  );
};

export default Library;
