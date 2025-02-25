import { createSlice } from "@reduxjs/toolkit";

const getDarkMode = () => {  
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
}

const initialState = { darkMode: getDarkMode() }

export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleTheme } = darkThemeSlice.actions;