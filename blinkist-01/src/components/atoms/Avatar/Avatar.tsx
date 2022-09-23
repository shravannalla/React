import { Avatar, styled } from "@mui/material"

const StyledAvatar=styled(Avatar)({
      height:"40px",
      width:"40px",
      backgroundColor:"#69A6E3",
      fontSize:"18px"
});

export const MuiAvatar=()=>{
  return(
    <StyledAvatar>S</StyledAvatar>
  )
}