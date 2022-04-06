import Link from 'next/link'
import styles from './Layout.module.css'
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={styles.footer}
                sx={{pl: 2, pr: 2}}
            >
                <Box>
                    <Image src={"/cslogo.png"} alt={"CS Logo"}  height={"27px"} width={"140px"}/>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{pr:2}}>Terms & Conditions</Typography>
                    <Typography>Privacy Policy</Typography>
                </Box>


            </Stack>
    )
}