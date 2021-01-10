import React, { useState, createContext } from "react";

type themeState = {
  isDarkMode: boolean;
  toggleTheme: any;
};

export const ThemeContext = createContext<themeState>({
  isDarkMode: false,
  toggleTheme: null,
});
function ThemeProvider(props: any) {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
