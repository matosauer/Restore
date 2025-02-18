import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean
    switchMode: () => void
}

export default function NavBar({darkMode, switchMode}: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <IconButton onClick={() => switchMode()}>
                    {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}} />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}