import React, { Fragment } from "react";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import BookDetailsViewTab from "../../components/organisms/BookDetailsViewTab";
import BookDetailsV from "../../components/organisms/BookDetailsV";
import { useLocation } from "react-router-dom";
import BasicTemplate from "../../components/templates/BasicTemplate";

interface BookDetailViewType {
  id: number;
}

const BookDetailsView = () => {
  const location = useLocation();
  const state = location.state as BookDetailViewType;
  const { id } = state;

  return (
    // <Fragment>
    //   <Header />
    //   <BookDetailsV id={id} />
    //   <BookDetailsViewTab />
    //   <Footer />
    // </Fragment>
    <BasicTemplate
      content={
        <Fragment>
          <BookDetailsV id={id} />
          <BookDetailsViewTab />
        </Fragment>
      }
    />
  );
};

export default BookDetailsView;
