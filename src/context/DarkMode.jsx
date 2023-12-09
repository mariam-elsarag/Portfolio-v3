import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  useEffect(() => {
    if (darkQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [darkQuery.matches]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}
const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("UseSearch use Outside SearchProvider");
  return context;
};
export { ThemeProvider, useDarkMode };
