import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const DarkModeContext = React.createContext({ darkMode: false, setDarkMode:(foo:any)=> { }});
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const value = { darkMode, setDarkMode };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: blueGrey[900]
      }
    }
  })
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: blueGrey[200]
      }
    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <DarkModeContext.Provider value={value}>

          <NavBar></NavBar>
        </DarkModeContext.Provider>

      </ThemeProvider>

    </div>
  );
  
}

export default App;
