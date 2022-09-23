import { Box, CircularProgress, Container, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/organisms/Footer/Footer";
import MainHeader from "./components/organisms/MainHeader/MainHeader";
import BookInfo from "./components/pages/BookDetails/BookDetails";
import Explore from "./components/pages/ExplorePage/ExplorePage";
import MyLibrary from "./components/pages/MyLibraryPage/MyLibraryPage";
import theme from "./Theme/Theme";
import {useAuth0} from '@auth0/auth0-react';
import LoginPage from "./LoginPage";

function App() {

  const {isLoading,isAuthenticated}=useAuth0();

  if (isLoading) {
    return (
      <Box position={"absolute"} top={"29%"} left={"49%"} width="25%" height="25%">
        <CircularProgress size={"70px"}></CircularProgress>
        <Box fontSize={"25px"} fontWeight={700} position={"relative"} left={"-10px"}>
        Loading...
        </Box>
      </Box>
    );
  }

  return(
    <div className="App">
      {!isAuthenticated ? <LoginPage /> : null}
      {isAuthenticated && (
    <ThemeProvider theme={theme}>
      <div>
        <Container fixed>
          <Router>
            <MainHeader />
            <Routes>
              <Route path="/" element={<MyLibrary />} />
              <Route path="/explore/:category" element={<Explore />} />
              <Route path="/bookinfo" element={<BookInfo />} />
            </Routes>
          </Router>
        </Container>
        <br></br>
        <Footer />
      </div>
    </ThemeProvider>
    ) }
    </div>
  );

}

export default App;
