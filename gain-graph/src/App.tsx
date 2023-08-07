import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeContext } from '@emotion/react';

export const DarkModeContext = React.createContext({ darkMode: false, setDarkMode:(foo:any)=> { }});
const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const value = { darkMode, setDarkMode };
  
  return (
    <div className="App">
      <DarkModeContext.Provider value={value}>

        <NavBar></NavBar>
      </DarkModeContext.Provider>

    </div>
  );
  
}

export default App;
