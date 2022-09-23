import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Box, Button, Stack } from "@mui/material";
import { MuiAvatar } from "../../atoms/Avatar/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import { ExpandMore } from "@mui/icons-material";

export default function AccountDrop() {
  const [opened, setOpened] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    if (opened) {
      handleClose();
    }
    setOpened(!opened);
  };

  const handleClose = () => {
    setOpened(false);
    setAnchorEl(null);
  };

  const { logout } = useAuth0();

  return (
      <Box paddingRight={"0"}>
        <Button
          id="account-button"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{border:"none",backgroundColor:"white"}}
          data-testid="accout-dropdown-button"
        >
            <Stack direction={"row"}>
               <MuiAvatar></MuiAvatar>
               <ExpandMore fontSize="small" sx={{paddingTop:"5px"}} />
            </Stack>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          data-testid="account-dropdown-menu"
        >
          <MenuList>
            <MenuItem onClick={()=>logout()} data-testid="account-menu-item-1">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
  );
}