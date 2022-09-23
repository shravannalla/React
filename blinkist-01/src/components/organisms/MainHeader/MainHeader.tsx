import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography, Backdrop} from "@mui/material";
import Logo from "../../atoms/Logo/Logo";
import SearchIcon from "@mui/icons-material/Search";
import CustomIconButton from "../../atoms/Buttons/CustomIconButton";
import ExploreDialog from "../Explore/ExploreDialog";
import { Link } from "react-router-dom";
import AccountDrop from "../../molecules/Account/AccountDrop";
import zIndex from "@material-ui/core/styles/zIndex";

export default function MainHeader() {

  const [tryingback, settryingback] = useState(false);

  const [open, setOpen] = useState(false);

  const backdroptry = () => {
    settryingback(!tryingback);
    setOpen(!open);
  };

  return (
    <div>
    <AppBar position="static" elevation={0} color="transparent" data-testid="main-header">
      <Toolbar style={{ width: "md" }}>
        <Box sx={{ width: "150px", paddingTop: "12px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
          </Link>
        </Box>
        <Box sx={{ width: "50px" }}>
          <CustomIconButton icon={<SearchIcon />} testId="searchIcon-button" />
        </Box>
        <Box onClick={backdroptry}>
          <ExploreDialog />
        </Box>
        <Box sx={{ flexGrow: 1 }} textOverflow={"clip"}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              variant="text"
              size="large"
              disableTouchRipple
              disableRipple
              sx={{
                textOverflow: "clip",
                backgroundColor: "#FFFFFF",
                borderBottom: "3px solid #FFFFFF",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  borderBottom: "3px solid #2CE080",
                  borderRadius: 0,
                },
                textDecoration: "none",
                textTransform: "none",
                color: "#03314B",
                fontFamily: "ceraProTrue",
                fontSize: 18,
                paddingTop:"13px"
              }}
            >
              <Typography variant="body1">My Library</Typography>
            </Button>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 0, paddingTop:"15px", marginRight:"40px"}}>
          
            <AccountDrop/>
          
        </Box>
      </Toolbar>
    </AppBar>
    {tryingback ? (
        <Backdrop
          open={tryingback}
          sx={{
            position: "absolute",
            top: "80px",
            backgroundColor: "rgba(157, 163, 166, 0.45)",
            zIndex: zIndex.drawer + 1,
            marginTop:"538px"
          }}
          onClick={backdroptry}
        >
        </Backdrop>
      ) : null}
    </div>
  );
}
