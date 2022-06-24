import React from "react";
import "./App.css";
import Header from "./components/organisms/Header";
import HeaderTab from "./components/organisms/HeaderTab";
import Footer from "./components/organisms/Footer";
import Theme from "./Theme/ThemeFile";
import { ThemeProvider, Typography, Box } from "@mui/material";
import Explore from "./components/organisms/Explore";
import Banner from "./components/molecules/Banner";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookDetailsView from "./pages/BookDetailsView";
import Entrepreneurship from "./pages/Entrepreneurship";
import Library from "./pages/Library";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        {/* <Library /> */}
        {/* <Header />
        <Typography
          variant="h1"
          sx={{ paddingLeft: "264px", paddingTop: "89px" }}
        >
          My Library
        </Typography>
        <HeaderTab tabStyle={Theme.typography.subtitle1} />
        <BookCard />
        <Footer /> */}
        {/* <Explore /> */}
        {/* <Entrepreneurship /> */}
        {/* <BookDetailsView /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/BookDetailsView" element={<BookDetailsView />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
