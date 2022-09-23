import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react'
import loginImage from "../src/images/unnamed.png";

function LoginPage() {
    const { loginWithRedirect } = useAuth0();
  return (
    <Box position={"absolute"} top={"25%"} width={"100%"}>
      <Box display={"flex"} justifyContent="center">
      <Box width="60%" >
        <Box width={"80%"} padding={"5% 10%"}>
        <Typography fontSize={"36px"} fontWeight={700} lineHeight={"45.25px"} width={"50%"} padding={"0% 25%"} textAlign={"left"}>
        More knowledge in less time
        </Typography>
        <Typography fontSize={"20px"} fontWeight={400} lineHeight={"25px"} width={"50%"} padding={"30px 25%"} textAlign={"left"}>
        Perfect for curious people who love to learn, busy people who don’t have time to read, and even people who aren’t into reading.
        </Typography>
        <Box display={"flex"} justifyContent={"center"} padding={"30px"}>
        <Button variant="contained" name={"Log in"} onClick={() => loginWithRedirect()}>Log In</Button>
        </Box>
        </Box>
        </Box>
      <Box width="40%" display={"flex"} justifyContent={"flex-start"}>
      <Box component={"img"} src={loginImage} alt={"Login Image"}></Box>
      </Box>
      </Box>
    </Box>
  )
}

export default LoginPage;