import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Language, german } from './model/Language';

export const LanguageContext = React.createContext({ language: german, setLanguage: (l: Language)=> { }});

class App extends Component {
  setLanguage(l: Language) {
    this.setState({language: l})
  }
  state = {
    language: german
  }

  render() {
    return (
      <div className="App">
        <LanguageContext.Provider value={{ language: this.state.language, setLanguage: this.setLanguage }}>

          <NavBar></NavBar>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
