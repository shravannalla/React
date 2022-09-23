import React from "react";
import MyLibraryTab from "../../organisms/MyLibrary/MyLibrary";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const StyledTitle=styled(Box)({
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px",
    fontFamily:'Cera Pro',
    color:"#03314B",
    paddingLeft:"24px"
});

export default function MyLibrary() {
  return (
    <Box>
      <br /><br/>
      <StyledTitle>My Library</StyledTitle>
      <br />
      <MyLibraryTab />
    </Box>
  );
}