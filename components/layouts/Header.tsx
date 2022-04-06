import { Box, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./Layout.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <Stack
      className={styles.header}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ pl: "32px", pr: "32px" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ pr: "17px" }}>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            src={"/axislogo.png"}
            alt={"CS Logo"}
            height={"40px"}
            width={"36px"}
          />
          <Box sx={{ pr: 3 }} />
          <Typography variant={"h6"} component="p" sx={{}}>
            Issuer Axis
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          component="span"
          sx={{
            p: 2,
            border: "1px solid #efefef",
            width: "256px",
            textAlign: "start",
          }}
        >
          <Typography>Company Name 1</Typography>
        </Box>
        <Box sx={{ pr: "17px" }} />
        <Box
          component="span"
          sx={{
            p: 2,
            border: "1px solid #efefef",
            width: "134px",
            textAlign: "start",
          }}
        >
          <Typography>My Apps</Typography>
        </Box>
        <Box sx={{ pr: "17px" }} />
        <Box sx={{ cursor: "pointer" }}>
          <AccountCircleIcon
            sx={{ height: "40px", width: "40px", opacity: 0.75 }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}
