import {useState} from 'react'



export const UseDarkMode = () => {
  const [theme, setTheme] = useState("dark");


  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

    return [theme, themeToggler];
}

export default UseDarkMode
