import React from "react";
import "./App.css";
import Theme from "./Theme/ThemeFile";
import { CircularProgress, ThemeProvider, Box } from "@mui/material";
import BookDetailsView from "./pages/BookDetailsView";
import Entrepreneurship from "./pages/Entrepreneurship";
import Library from "./pages/Library";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <Box sx={{ paddingX: "800px", paddingTop: "10px" }}>
        <CircularProgress />
      </Box>
    );

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            {isAuthenticated ? (
              <Route path="/" element={<Library />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            {isAuthenticated && (
              <Route path="/Entrepreneurship" element={<Entrepreneurship />} />
            )}
            {isAuthenticated && (
              <Route path="/BookDetailsView" element={<BookDetailsView />} />
            )}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
