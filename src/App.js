import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import "./App.css";
import Landing from "./Landing";
import Dropdown from "./Dropdown";
import Header from './Header';
import {Route}from "react-router-dom"
import Home from './Home';
// import { ThemeProvider } from 'styled-components';
import {UseDarkMode} from "./UseDarkMode";
import {GlobalStyles, lightTheme, darkTheme} from "./GlobalStyles";


const StyledApp = styled.div``;

function App() {
  const [theme, themeToggler] = UseDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggle = () => {
    setIsOpen(!isOpen);
  }

 
 

  return (
  <ThemeProvider theme={themeMode}>
         <StyledApp >
     <GlobalStyles/>
          
         
           <Header toggle={toggle}/>
     
            <Dropdown isOpen={isOpen} toggle={toggle}/>
          
            
          <Route exact path="/">
            <Landing/>
          </Route>

            <Route exact path="/Home">
              <Home theme={theme} themeToggler={themeToggler}/>
            </Route>
          
</StyledApp>
</ThemeProvider>
  
  );
}

export default App;
