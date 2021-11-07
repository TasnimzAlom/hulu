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

       .secondary {
           background:${({ theme }) => theme.background};
       }
    }

 
`;

export const lightTheme ={
    body:"whitesmoke",
    fontColor: "#000000",
    border:"4px solid whitesmoke",
    background:"#EAEDF2"
};


export const darkTheme ={
    body:"#1E2126",
    fontColor: "whitesmoke",
    border:"4px solid #1E2126",
    background:"#292C33"
   

};



//  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>     
//     <GlobalStyles>
     
//         * </GlobalStyles>
//   </ThemeProvider> 