import { Box, Stack } from "@mui/material";
import Link from "next/link";
import styles from "./SideNav.module.css";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CallIcon from "@mui/icons-material/Call";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export default function SideNav() {
  return (
    <nav className={styles.sideNav}>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="start"
        sx={{ height: "100%" }}
      >
        <Box sx={{ pt: "16px" }}>
          <Box
            sx={{
              height: "72px",
              width: "256px",
              padding: "20px 0 20px 37px",
            }}
          >
            <Link href="/">
              <Stack direction="row" justifyContent="start" alignItems="center">
                <HomeIcon
                  sx={{
                    height: "32px",
                    width: "32px",
                    opacity: 0.8,
                    pr: "8px",
                  }}
                />
                Home
              </Stack>
            </Link>
          </Box>
          <Box
            sx={{
              height: "72px",
              width: "256px",
              padding: "20px 0 20px 37px",
            }}
          >
            <Link href="/buttons">
              <a>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  <WidgetsIcon
                    sx={{
                      height: "32px",
                      width: "32px",
                      opacity: 0.8,
                      pr: "8px",
                    }}
                  />
                  Buttons
                </Stack>
              </a>
            </Link>
          </Box>
          <Box
            sx={{
              height: "72px",
              width: "256px",
              padding: "20px 0 20px 37px",
            }}
          >
            <Link href="/contact">
              <a>
                <Stack
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                >
                  <CallIcon
                    sx={{
                      height: "32px",
                      width: "32px",
                      opacity: 0.8,
                      pr: "8px",
                    }}
                  />
                  Contact
                </Stack>
              </a>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            height: "72px",
            width: "256px",
            padding: "20px 0 20px 37px",
          }}
        >
          <Link href="/help">
            <a>
              <Stack direction="row" justifyContent="start" alignItems="center">
                <HelpCenterIcon
                  sx={{
                    height: "32px",
                    width: "32px",
                    opacity: 0.8,
                    pr: "8px",
                  }}
                />
                Help
              </Stack>
            </a>
          </Link>
        </Box>
      </Stack>
    </nav>
  );
}
