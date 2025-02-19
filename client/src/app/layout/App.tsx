import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {  
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => setDarkMode((m) => !m);

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
