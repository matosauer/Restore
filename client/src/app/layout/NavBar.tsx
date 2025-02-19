import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

type Props = {
    darkMode: boolean
    switchMode: () => void
}

export default function NavBar({darkMode, switchMode}: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography component={NavLink} to='/' variant="h6">RE-STORE</Typography>
                <IconButton onClick={() => switchMode()}>
                    {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}} />}
                </IconButton>

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <IconButton size="large" sx={{color: 'inherit'}}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                </IconButton>

                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

            </Toolbar>
        </AppBar>
    )
}