import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouter } from "./router/AppRouter";
import { Container } from "@mui/material";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="md" className="py-8">
          <AppRouter />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
