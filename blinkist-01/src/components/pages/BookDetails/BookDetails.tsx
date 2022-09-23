import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Typography } from "@mui/material";
import bookimage from "../../../images/1.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import api from "../../../api/books";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ArrowForward } from "@material-ui/icons";

interface Book {
  id?: number;
  title?: string;
  author?: string;
  duration?: number;
  category?: string;
  image?: string;
  isInMyLibrary?: boolean;
  isFinished?: boolean;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: {
      main: "#0365F2",
    },
  },

  typography: {
    fontFamily: "ceraProTrue",
    h5: {
      fontWeight: "bold",
      lineHeight: 4,
    },
    h4: {
      fontWeight: 900,
      fontColor: "#000000",
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: 3,
      fontWeight: 400,
    },
    h1:{
      fontSize:36,
      color:"#03314B"
    },
    body1:{
      fontSize:16,
      color:"#03314B"
    },
    body2:{
      fontSize:16,
      color:"#03314B"
    },
    subtitle2:{
      fontSize:20,
      color:"#03314B"
    }
  
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          width: 200,
          fontSize: 16,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
    },
  },
});

export default function BookInfo(props:Book) {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <ThemeProvider theme={theme}>
      <Box sx={{ paddingLeft: "40px", maxWidth: "md" }}>
        <br />
        <Typography variant="body2">Get the Ideas from</Typography>
        <br />
        <Box display="flex">
          <Box width="85%">
            <Typography variant="h1">Beyond Entrepreneurship 2.0</Typography>
            <br/>
            <Typography variant="subtitle2">
              Turning Your Business into an Enduring Great Company
            </Typography>
            <br/>
            <Typography variant="body1" sx={{fontSize:"16px"}}>
              By Jim Collins and Bill Lazier
            </Typography>
            <br />
            <Stack direction="row" spacing={1}>
              <>
                <AccessTimeIcon />
              </>
              <Typography variant="subtitle2" sx={{fontSize:"14px", paddingTop:"5px"}}>13-minute read</Typography>
            </Stack>
            <br />
            <br />
            <br></br>
            <br></br>
            <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  disableRipple={true}
                  sx={{
                    width: "200px",
                    height: "50px",
                    textTransform: "none",
                    color: "#2CE080",
                    backgroundColor: "white",
                    border: "1px solid black",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  Read Now
                </Button>
              {/* )} */}
              {/* {inLibrary && ( */}
                <Button
                  variant="contained"
                  color="primary"
                  disableRipple={true}
                  sx={{ textTransform: "none", width: "250px", height: "50px" }}
                >
                  <Typography variant="body1">Finished Reading</Typography>
                </Button>
              {/* )} */}
              <Button
                disableRipple={true}
                sx={{
                  width: "250px",
                  textTransform: "none",
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              >
                <Typography variant="body1" >Send to Kindle</Typography><ArrowForward fontSize="small"/>
              </Button>
            </Stack>
          </Box>
          <Box>
            <img
              src={bookimage}
              width="304px"
              height="304px"
              alt="Book"
              margin-top="20px"
            />
          </Box>
        </Box>
        <br/>
        <br/>
        <Box sx={{ typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                indicatorColor="primary"
              >
                <Tab
                  sx={{
                    minWidth: "200px",
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "#6D787E",
                    fontSize: "16px",
                  }}
                  label="Synopsis"
                  value="1"
                />
                <Tab
                  sx={{
                    minWidth: "200px",
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "#6D787E",
                    fontSize: "16px",
                  }}
                  label="Who is it for?"
                  value="2"
                />
                <Tab
                  sx={{
                    minWidth: "200px",
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "#6D787E",
                    fontSize: "16px",
                  }}
                  label="About the author"
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{paddingLeft:"0px"}}>
              <Typography variant="body2">
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
                Lazier’s essential 1992 business handbook, Beyond
                Entrepreneurship for the entrepreneurs, visionaries, and
                innovators of today. This new edition combines the timeless
                business advice and strategy of the original text, supplemented
                with cutting-edge insights and case studies pertinent to today’s
                business world.
              </Typography>
            </TabPanel>
            <TabPanel value="2" sx={{paddingLeft:"0px"}}>
              <Typography variant="body2">
                <ul>
                  <li>
                    Office drones who want to break out of their nine-to-five
                  </li>
                  <li>
                    Fledgling start-up founders wondering where to, well, start
                  </li>
                  <li>
                    Successful entrepreneurs looking to scale up to the big time
                  </li>
                </ul>
              </Typography>
            </TabPanel>
            <TabPanel value="3" sx={{paddingLeft:"0px"}}>
              <Typography variant="body2">
                Bill Lazier was professor of business at Stanford and a
                path-breaking entrepreneur. He was also mentor to Jim Collins,
                now a sought-after consultant and best-selling author of
                leadership books, including Good to Great and Built to Last.
                Together, Collins and Lazier authored Beyond Entrepreneurship.
                Lazier passed away in 2005; Collins has now revised and updated
                this classic business text for today’s entrepreneur.
              </Typography>
            </TabPanel>
          </TabContext>
        </Box>
        <br />
        <br />
        <Divider />
      </Box>
      </ThemeProvider>
  );
}