import React from "react";
import {
  Container,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import blinkist from "./blinkistlogo.png";
import { createTheme, fontFamily } from "@mui/system";

interface FooterProps {
  prop1: string[];
}

const theme = createTheme({
  typography: {
    body1: {
      color: "#6D787E",
      fontFamily: "CeraProTrue",
      fontSize: "16px",
    },
    body2: {
      color: "#03314B",
      fontFamily: "CeraProTrue",
      fontSize: "16px",
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          backgroundColor: "#f1f6f4",
          alignItems: "center",
          margin: "0",
          fontFamily: "ceraProTrue",
          marginRight:"0px",
        }}
        style={{width:"100%",paddingLeft:"330px",maxWidth:"2000px"}}
        data-testid={"footer-container"}
      >
        <Grid maxWidth={"2000"} marginRight="10px">
          <br></br>
          <Stack direction={"column"}>
            <Stack direction="row">
              <Stack direction="column" width={"30%"}>
                <img
                  src={blinkist}
                  height="24px"
                  width="124px"
                  alt="footer-logo"
                />
                <br></br>
                <Typography
                  fontSize={"24px"}
                  fontFamily={"ceraProTrue"}
                  color={"#0365F2"}
                  fontWeight={"bold"}
                >
                  {" "}
                  Big Ideas in small packages
                </Typography>
                <Typography
                  fontSize={"24px"}
                  fontFamily={"ceraProTrue"}
                  color={"#0365F2"}
                  fontWeight={"bold"}
                >
                  {" "}
                  Start learning now
                </Typography>
              </Stack>
              <Stack
                fontFamily={"ceraProTrue"}
                direction="column"
                width={"20%"}
              >
                <Typography variant="body2" color={"#03314B"}>
                  {" "}
                  <strong>Editorial</strong>
                </Typography>
                <Typography variant="body1">
                  <br />
                  Book lists
                  <br />
                  What is nonfiction
                  <br />
                  What to read next?
                  <br />
                  Benefits of reading
                </Typography>
              </Stack>
              <Stack direction="column" width={"20%"}>
                <Typography variant="body2" color={"#03314B"}>
                  {"  "}
                  <strong>Useful Links</strong>
                </Typography>
                <Typography variant="body1">
                  <br />
                  Pricing
                  <br />
                  Blinkist Business
                  <br />
                  GiftCards
                  <br />
                  Blinkist Magazine
                  <br />
                  Contact and help
                </Typography>
              </Stack>
              <Stack direction="column" width={"20%"}>
                <Typography variant="body2" color={"#03314B"}>
                  {" "}
                  <strong>Company</strong>
                </Typography>
                <Typography variant="body1">
                  <br />
                  About
                  <br />
                  Careers
                  <br />
                  Partners
                  <br />
                  Code of conduct
                </Typography>
              </Stack>
            </Stack>
            <br />
            <br />
            <Stack direction={"row"} width={"100%"}>
              <Typography fontFamily={"ceraProTrue"}>
                &#169; Blinkist sitemap | Imprint | Terms of service | Privacy
                Policy |
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
