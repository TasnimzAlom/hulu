import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components'
import "./App.css";
import Landing from "./LandingPage/Landing";
import Dropdown from "./Dropdown";
import Header from './LandingPage/LandingHeader/Header';
import {Route}from "react-router-dom"
import {UseDarkMode} from "./HomePage/UseDarkMode";
import {GlobalStyles, lightTheme, darkTheme} from "./GlobalStyles";
import Home from './HomePage/Home';
import Skeletons from './Skeletons';


const StyledApp = styled.div`

`;

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
          
         
              <Header theme={theme} themeToggler={themeToggler} toggle={toggle}/>
     
                  <Dropdown isOpen={isOpen} toggle={toggle}/>
          
            
                       <Route exact path="/">
                        <Landing/>
                       </Route>

                       <Route exact path="/home">
                         <Home/>
                       </Route>

                       <Route exact path="/skeletons">
                         <Skeletons/>
                       </Route>
    
          
          </StyledApp>
  </ThemeProvider>
  
  );
}

export default App;
