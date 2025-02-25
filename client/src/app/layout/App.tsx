import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleTheme } from "./darkThemeSlice";

/*
  const getInitialDarkMode = () => {  
  const storedDarkMode = localStorage.getItem('darkMode');
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
}
*/

function App() {  

  /*
  const [darkMode, setDarkMode] = useState(getInitialDarkMode());
  const switchMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }
  */

  const dispatch = useAppDispatch()

  const switchMode = () => {
    dispatch(toggleTheme());
  }

  const { darkMode } = useAppSelector(state => state.darkTheme);

  const palleteType = darkMode ? 'dark' : 'light';
  const darkTheme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} switchMode={switchMode} />
      <Box
        sx = {{
          minHeight:'100vh',
          background: darkMode
                      ? 'radial-gradient(circle, #1e3aBa, #111B27)'
                      : 'radial-gradient(circle, #baecf9, #f0f9ff)',
                      py: 6
        }}
      >
        <Container maxWidth='xl' sx={{mt: 10}}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
