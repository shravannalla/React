import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface CustomIconButtonProps{
    onClick?: () => void;
    size?: string;
    icon: React.ReactNode;
    testId?:string;
}

const CustomIconButton = (props: CustomIconButtonProps)=>{
    return(
        <IconButton onClick={props.onClick} disableRipple={true} data-testid={props.testId}>
            <SearchIcon/>
        </IconButton>
    );
};

export default CustomIconButton;