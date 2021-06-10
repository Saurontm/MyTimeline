import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import TimeLine from "./components/TimeLine";

const theme = {
  mainColor: "white",
  backgroundColor: "#222222",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
        <TimeLine />
      </ThemeProvider>
    </div>
  );
}

export default App;
