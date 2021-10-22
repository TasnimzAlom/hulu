import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.fontColor};

        nav{
            background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.fontColor};
        }

       a{
        color:${({ theme }) => theme.fontColor};

       }

       .rowimg{
         border-left:${({ theme }) => theme.border};

       }
    }

 
`;

export const lightTheme ={
    body:"whitesmoke",
    fontColor: "#000000",
    border:"4px solid whitesmoke"
};


export const darkTheme ={
    body:"#1E2126",
    fontColor: "whitesmoke",
    border:"4px solid #1E2126"
   

};



//  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>     
//     <GlobalStyles>
     
//         * </GlobalStyles>
//   </ThemeProvider> 