import React from 'react'


    

const Home = ({theme, themeToggler}) => {
   
    console.log(theme);
      
    
    return (
     <>
     <button onClick={() => themeToggler()}>change</button>
     <h1>heellloo</h1>
     </>
  
    )
}

export default Home
