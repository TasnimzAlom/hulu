import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.fontColor};
    }
`;

export const lightTheme ={
    body:"whitesmoke",
    fontColor: "#000000"
};


export const darkTheme ={
    body:"#000000",
    fontColor: "whitesmoke"
};



//  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>     
//     <GlobalStyles>
     
//         * </GlobalStyles>
//   </ThemeProvider> 