import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import EstilosGlobales from "./theme/global";
import theme from "./theme/theme";
import MyThemeContext from "./components/ThemeContext/ThemeContext";

import SongContainer from "./components/SongContainer/SongContainer";


function App() {
  return (
    <div>
    <EstilosGlobales/>
    <MyThemeContext>
    <ThemeProvider theme={theme}>
    <Header/>
    <SongContainer/>
    </ThemeProvider>
    </MyThemeContext>
    </div>
  );
}

export default App;
