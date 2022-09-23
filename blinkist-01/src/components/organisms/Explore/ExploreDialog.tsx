import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import { Divider, Grid, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { categories, categoryIcons } from "../../../data/bookdata";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#042330",
    },
    secondary: {
      main: "#F1F6F4",
    },
    text: {
      primary: "#03314B",
    },
  },
  typography: {
    body2:{
      fontSize: "18px",
      lineHeight: "20px",
      fontFamily: "ceraProTrue",
      color:"#03314B",
      fontWeight:"500"
    },
    h6:{
      fontFamily: "ceraProTrue",
      fontSize:"18px"
    }
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          backGoundColor: "#FFFFFF",
          borderBottom: "3px solid #FFFFFF",
          "&:hover": {
            borderBottom: "3px solid #2CE080",
            borderRadius: 0,
          },
          "&:active": {
            borderBottom: "3px solid #2CE080",
            borderRadius: 0,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});

const StyledMenuItem = styled(MenuItem)({
  id: "menu-explore",
  textAlign: "left",
  alignItems: "right",
  color: "#042330",
  textColor: "##6D787E",
  underline: "none",

  "&:hover": {
    color: "#116BE9",
    backgroundColor: "#F1F6F4",
  },
});

const useStyles=makeStyles({
  firstContain: {
    
    justifyContent: "center",
    display:"inline-block"
  },
});

export default function ExploreDialog() {

  const classes=useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [icon, setIcon] = React.useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    icon ? setIcon(0) : setIcon(1);
  };
  const handleClose = () => {
    setAnchorEl(null);
    icon ? setIcon(0) : setIcon(1);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          endIcon={icon === 0 ? <ExpandMore /> : <ExpandLess />}
          id="explore-button"
          onClick={handleClick}
          variant="text"
          size="large"
          disableRipple
          disableTouchRipple
          disableFocusRipple
          sx={{
            borderBottom:
              icon === 0 ? "3px solid transparent" : "3px solid #00C263 ",
            backgroundColor: "inherit",
            borderRadius: 0,
            paddingTop:"12px"
          }}
          data-testid="explore-button"
        >
          <Typography variant="body2">Explore</Typography>
        </Button>
        <div className="classes.firstContain">
        <Menu
          className={classes.firstContain}
          style={{
            width: "70%",
            position: "fixed",
            top: "30px",
          }}
          id="explore-menu"
          aria-labelledby="explore-button"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          elevation={0}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              width: "100%",
              maxWidth: "100%",
              marginTop: "20px",
              paddingBottom: "30px",
              left: 0,
              right: 0,
              backgroundColor: "#F1F6F4",
              boxShadow: "0 0 0",
              paddingLeft:"200px",
              paddingRight:"320px"
            },
          }}
        >
          <Container>
            <Typography variant="h6" fontWeight="bold">
              {" "}
              <br />
              <span style={{paddingRight:"190px",paddingLeft:"20px", color:"#116BE9"}}>Explore by category</span>
              <span style={{paddingRight:"200px",color:"#6D787E"}}>See recently added tiles</span>
              <span style={{color:"#6D787E"}}>See popular tiles</span>
            </Typography>
            <br />
            <Divider sx={{marginLeft:"20px"}} />
            <br />
            <br />
            <Grid container rowGap={1} spacing={1}>
              {categories.map((categoryName: string, index: number) => {
                return (
                  <Grid item key={categoryName} xs={12} sm={6} md={4}>
                    <Link
                      to={`/explore/${categoryName}`}
                      style={{ textDecoration: "none", fontFamily: "ceraPro" }}
                    >
                    <StyledMenuItem
                      onClick={handleClose}
                      style={{fontSize:"16px",color:"#6D787E",fontFamily:"CeraPro"}}
                    >
                      {categoryIcons[index]}
                      &nbsp;
                      {categoryName}
                    </StyledMenuItem>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Menu>
        </div>
      </ThemeProvider>
    </div>
    
  );
}
