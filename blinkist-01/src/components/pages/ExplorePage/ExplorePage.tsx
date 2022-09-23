import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import CardGrid from "../../organisms/Grid/CardGrid";
import SearchInput from "../../molecules/Search/SearchInput";
import api from "../../../api/books";
import { createTheme, Grid, Stack, ThemeProvider, Typography } from "@mui/material";
import exploreBanner from "../../../images/explorebanner.png";

const theme = createTheme({
  typography: {
    h1: {
      color: "#03314B",
      fontFamily: "CeraProTrue",
      fontSize: "36px",
    },
    subtitle2: {
      color: "#6D787E",
      fontFamily: "CeraProTrue",
      fontSize: "16px",
    },
  },
});

interface Book {
  id: number;
  title: string;
  author: string;
  duration: number;
  category: string;
  image: string;
  isInMyLibrary: boolean;
  isFinished: boolean;
}

const Explore = () => {
  const [selectedCategoryBooks, setSelectedCategoryBooks] = useState([]);
  const selectedCategory = useParams().category;

  const retrieveBooks = async () => {
    let response = await api.get(`/books/?category=${selectedCategory}`);
    return response.data;
  };

  useEffect(() => {
    const getBooks = async () => {
      let books = await retrieveBooks();
      setSelectedCategoryBooks(books);
    };
    getBooks();
  }, [selectedCategory]);
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ paddingLeft: "40px"}}>
      <br></br>
      <br></br>
      <Grid sx={{ backgroundColor: "#f1f6f4" }} marginRight={10}>
        <br></br>
        <Stack direction={"row"}>
          <Stack
            direction={"column"}
            maxWidth={"65%"}
            marginRight={"15%"}
            marginLeft={"3%"}
          >
            <Typography variant="h1"
              fontWeight={"bold"}
              fontFamily={"ceraProTrue"}
              fontSize="1.5em"
            >
              Explore Books on 
              <br/>
              {selectedCategory}
            </Typography>
            <br/>
            <Typography variant="subtitle2" fontFamily={"ceraProTrue"}>
              Every thing you need to know about thriving on a shoestring
              budget, making your first million and hiring from the start.
            </Typography>
          </Stack>
          <Box style={{ float: "right",paddingLeft:"80px" }}>
            <img
              src={exploreBanner}
              alt="cardsImage"
              height={"150px"}
              width={"250px"}
            ></img>
          </Box>
        </Stack>
        <br></br>
      </Grid>
      <br />
      <SearchInput onChange={()=>{}} />
      <br />
      <br />
      <br />
      <br />
      <CardGrid books={selectedCategoryBooks} flag={true} />
    </Box>
    </ThemeProvider>
  );
};

export default Explore;