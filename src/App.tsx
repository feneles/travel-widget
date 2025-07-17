import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouter } from "./router/AppRouter";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useLineStore } from "./store/lineStore";

const theme = createTheme();

function App() {
  const fetchLineStatuses = useLineStore((state) => state.fetchLineStatuses);

  useEffect(() => {
    fetchLineStatuses();
  }, [fetchLineStatuses]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md" className="py-8">
          <AppRouter />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
