import React, { useContext, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Analysis from './Route/Analysis/Analysis';
import Training from './Route/Training/Training';
import Login from './components/Login/Login';
import useToken from './useToken';
import config from './config';
export const DarkModeContext = React.createContext({ darkMode: false, setDarkMode: ((fn: (a: boolean) => boolean) => { }) });

interface TokenContextI{
  token: string | null;
  setToken: (token: string|null) => void;
}
export const TokenContext = React.createContext<TokenContextI>({ token: null, setToken: (token: string|null) => { } })
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { token, setToken } = useToken();
  // Validate token
  if (token) {
    fetch(`http://${config.serverIp}:${config.serverPort}/user`, {
      method: 'GET',
      headers: { 'authorization': token }
    }).then(res => {
      if (!res.ok) {
        return setToken(null);
      }
      console.log(res.json());
    }).catch(err => {
      setToken(null);
    })
  }
  
  /**
   * @returns undefined if the token is invalid, or else the current user
   */

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
  if (!token) {
    return (

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <TokenContext.Provider value={{token, setToken}}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Login></Login>
          </DarkModeContext.Provider>
        </TokenContext.Provider>
      </ThemeProvider>);
  }
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <TokenContext.Provider value={{ token, setToken }}>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <NavBar></NavBar>
          <Routes>
            <Route path='/analysis' Component={Analysis} />
            <Route path='/training' Component={Training} />
          </Routes>
        </DarkModeContext.Provider>
        </TokenContext.Provider>
      </ThemeProvider>
    </div>
  );

}
export default App;
