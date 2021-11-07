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
import TvPage from "./TvPage";
import MoviesPage from "./MoviesPage";
import MyStuff from './MyStuff';
import Hubs from './Hubs';





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
          
            
                       <Route exact path="/landing">
                        <Landing/>
                       </Route>

                       <Route exact path="/home">
                         <Home />
                       </Route>



                       <Route exact path="/tvPage">
                         <TvPage />
                       </Route>
    
                       <Route exact path="/moviesPage">
                         <MoviesPage/>
                       </Route>

                       <Route exact path="/mystuff">
                         <MyStuff/>
                       </Route>

                       <Route exact path="/hubs">
                         <Hubs/>
                       </Route>

                   
               
          </StyledApp>
  </ThemeProvider>
  
  );
}

export default App;
