import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const BasicTemplate = (props: any) => {
  return (
    <Fragment>
      <Header />
      {props.content}
      <Footer />
    </Fragment>
  );
};

BasicTemplate.propTypes = {
  content: PropTypes.element.isRequired,
};

export default BasicTemplate;
