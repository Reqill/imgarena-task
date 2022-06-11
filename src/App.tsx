import React, { useState } from "react";
import "./App.css";
import { Grid, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { Error404 } from "./screens/index";
import { NAVIGATION_ROUTES } from "./navigationRoutes";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [iconTheme, setIconTheme] = useState<PaletteMode>("light");

  const toggleTheme = (mode: PaletteMode) => {
    if (mode === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
    setIconTheme(mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Stack direction='column' height='100vh'>
          <TopBar toggleTheme={toggleTheme} theme={iconTheme} />
          <Grid container height='100%'>
            <Grid item sx={{ width: 200 }}>
              <LeftNavigation />
            </Grid>
            <Grid item xs sx={{ background: theme.palette.background.default }}>
              <Routes>
                {Object.values(NAVIGATION_ROUTES).map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                <Route path={"*"} element={<Error404 />} />
              </Routes>
            </Grid>
          </Grid>
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
