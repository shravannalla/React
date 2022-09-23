import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions, createTheme, Stack } from "@mui/material";
import api from "../../../api/books";
import { ThemeProvider } from "@mui/system";
import { MoreHoriz } from "@mui/icons-material";
import { Progress } from "../../atoms/Progress/Progress";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#22c870",
    },
    text: {
      primary: "#03314B",
    },
  },
  typography: {
    fontFamily: "ceraProTrue",
    body1: {
      fontSize: "14.5px",
      lineHeight: "20px",
      fontFamily: "ceraProTrue",
      color:"#6D787E",
      paddingTop:"10px"
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "Cera Pro",
      fontWeight: 800,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "14px",
      fontFamily: "ceraPro",
      color:"#6D787E",
      fontWeight: "lighter",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#0365F2",
          "&:hover": {
            color: "#FFFFFF",
            textDecoration: "none",
            backgroundColor: "#0365F2",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#f7f7f7",
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height:"280px"
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#0365F2",
          "&:hover": {
            color: "#FFFFFF",
            textDecoration: "none",
            backgroundColor: "#0365F2",
          },
        },
      },
    },
  },
});

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  duration: number;
  reads: string;
  category: string;
  image: string;
  isInMyLibrary: boolean;
  isFinished: boolean;
  flag: boolean;
}

export default function BookCard(props: BookCardProps) {

  const navigate=useNavigate();

  function finishReading() {
    const getBooks = async () => {
      api.patch(`/books/${props.id}`, {
        isInMyLibrary: true,
        isFinished: true,
      });
    };
    getBooks();
  }

  function readAgain() {
    const getBooks = async () => {
      api.patch(`/books/${props.id}`, {
        isInMyLibrary: true,
        isFinished: false,
      });
    };
    getBooks();
  }


  function addToLibrary() {
    const getBooks = async () => {
      api.patch(`/books/${props.id}`, {
          isInMyLibrary: true,
          isFinished: false,
        })
        .then(() => console.log("good"))
        .catch((error) => console.log(error));
    };
    navigate("/");
    getBooks();
  }

  return (
    <ThemeProvider theme={theme}>
      <Card
        style={{
          borderRadius: "8px",
          minWidth: "15ch",
          maxWidth: 287,
          maxHeight: 466,
          boxShadow: "none",
          borderStyle: "solid",
          borderColor: "#f7f7f7",
          paddingLeft:"0"
        }}
        data-testid={`book-card-${props.id}`}
      >
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          data-testid={`book-image-${props.id}`}
        />
        <CardContent
          style={{
            borderBottom: 0,
            maxWidth: "30ch",
            marginRight:"0"
          }}
        >
          <Typography variant="subtitle1">
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            
          >
            By {props.author}
          </Typography>
          <Stack direction="row" spacing={1} paddingTop="15px">
            <AccessTimeIcon style={{ height: 17, width: 17,color:"#6D787E" }} />
            <Typography variant="caption" sx={{paddingTop:"3px"}}>
              {props.duration}-minute read
            </Typography>
            <PermIdentitySharpIcon style={{ height: 18, width: 18, marginLeft:"27px",color:"#6D787E"  }} />
            <Typography variant="caption"  sx={{paddingTop:"3px"}}>
              {props.reads}
            </Typography>
          </Stack>
        </CardContent>
        <Box>
          <CardActions disableSpacing style={{ padding: "0px" }}>
            {!props.flag && props.isInMyLibrary && !props.isFinished && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => finishReading()}
                style={{
                  height: "42px",
                  padding: "0px",
                  textTransform:"none"
                }}
              >
                Finished
              </Button>
            )}
            {props.flag && props.isInMyLibrary && (
              <button
                id="more-horiz-button"
                style={{
                  border: 0,
                  backgroundColor: "none",
                  background: "none",
                  color: "grey",
                  height: "42px",
                  padding: "0px",
                  marginLeft: "80%",
                }}
              >
                <MoreHoriz />
              </button>
            )}
            {!props.flag && props.isFinished && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => readAgain()}
                style={{
                  height: "42px",
                  padding: "0px",
                  textTransform:"none"
                }}
              >
                Read Again
              </Button>
            )}
            {!props.isInMyLibrary && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => addToLibrary()}
                style={{
                  height: "42px",
                  padding: "0px",
                  textTransform:"none",
                }}
              >
                <AddIcon sx={{height:"14px", width:"14px"}} />
                <Typography variant="body2" fontWeight={500}> Add to Library </Typography>
              </Button>
            )}
          </CardActions>
          {props.isInMyLibrary && !props.isFinished && (
            <Box display={"block"} position="relative" bottom="0px">
              <Progress value={33} data-testid="progress-bar"></Progress>
            </Box>
          )}

          {props.isInMyLibrary && props.isFinished && (
            <Box display={"block"} position="relative" bottom="0px">
              <Progress value={100}></Progress>
            </Box>
          )}
        </Box>
      </Card>
    </ThemeProvider>
  );
}
