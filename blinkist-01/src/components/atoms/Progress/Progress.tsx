import React from "react";
import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";

interface ProgressProps{
    value:number;
}

const theme=createTheme({
  palette:{
    primary:{
      main:"#DFE8F6"
    }
  }
})

export const Progress = (props:ProgressProps) => {
  return (
    <ThemeProvider theme={theme}>
    <LinearProgress
      sx={{ height: "14px", bgcolor: "#F1F6F4"}}
      variant="determinate"
      value={props.value}
      color={"primary"}
    ></LinearProgress>
    </ThemeProvider>
    
  );
};
