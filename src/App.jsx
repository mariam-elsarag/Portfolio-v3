import { ThemeProvider } from "./context/DarkMode";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
