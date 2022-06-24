import React from "react";
import { Card, Box } from "@mui/material";
import { Fragment } from "react";
import BookDetails from "../../atoms/BookDetails";
import BookImage from "../../atoms/BookImage";
import BookThumbNail from "../../atoms/BookThumbnail";
import Button from "../../atoms/Button";
import ProgressBar from "../../atoms/ProgressBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface bCardType {
  book: {
    id: number;
    image: string;
    title: string;
    author: string[];
    readTime: number;
    readersCount?: string;
    status: string;
  };
  trending?: boolean;
  justAdded?: boolean;
  featured?: boolean;
}

const style: React.CSSProperties = {
  height: "466px",
  width: "284px",
  borderRadius: "8px",
  marginRight: "30px",
  marginBottom: "25px",
};

interface BookType {
  id: number;
  image: string;
  title: string;
  author: string[];
  readTime: number;
  readersCount?: string;
  status: string;
}

const BCard = ({ book, trending, justAdded, featured }: bCardType) => {
  let navigate = useNavigate();

  const handleClick = (bookId: number) => {
    navigate("/BookDetailsView", { state: { id: bookId } });
  };

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
      <Card style={style} key={book.id}>
        <BookImage image={book.image} onClick={() => handleClick(book.id)} />
        <BookThumbNail title={book.title} author={book.author} />
        <BookDetails readTime={book.readTime} readerCount={book.readersCount} />
        {trending || justAdded || featured ? (
          book.status !== "fresh" ? (
            <Box
              component="img"
              src="images/Vector23.png"
              alt="dots"
              sx={{
                height: "4px",
                width: "18px",
                paddingLeft: "247px",
                paddingTop: "21px",
                paddingBottom: "13px",
              }}
            ></Box>
          ) : (
            <Box sx={{ marginTop: "10px", border: "1px solid #E1ECFC" }}>
              <Button
                value="Add to library"
                variant="text"
                onClick={() => statusToreading(book)}
              >
                Add to library
              </Button>
            </Box>
          )
        ) : book.status === "reading" ? (
          <Button
            value="Finished"
            variant="text"
            onClick={() => statusTofinished(book)}
          >
            Finished
          </Button>
        ) : book.status === "finished" ? (
          <Button
            value="Read again"
            variant="text"
            onClick={() => statusToreading(book)}
          >
            Read again
          </Button>
        ) : (
          <Box sx={{ marginTop: "10px", border: "1px solid #E1ECFC" }}>
            <Button
              value="Add to library"
              variant="text"
              onClick={() => statusToreading(book)}
            >
              Add to library
            </Button>
          </Box>
        )}
        {book.status !== "fresh" ? <ProgressBar status={book.status} /> : null}
      </Card>
    </Fragment>
  );
};

export default BCard;
