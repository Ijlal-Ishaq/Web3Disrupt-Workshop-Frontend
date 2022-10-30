import { FC, useMemo, useState } from "react";
import { CssBaseline, PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    smd: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false;
    tablet: false;
    laptop: false;
    desktop: false;
  }

  interface Palette {
    regular: Palette["primary"];
  }
}

const getTheme = (mode: PaletteMode): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 992,
      md: 1152,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#49281A",
            dark: "#AB6832",
            light: "#DFB78C",
          },
          background: {
            default: "#DFB78C",
            paper: "#49281A",
          },
          text: {
            primary: "#49281A",
            secondary: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#fff",
          },
          background: {
            default: "#000",
            paper: "#fff",
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
        }),
  },
});

const Theme: FC = ({ children }) => {
  const [mode] = useState("light");

  const theme = useMemo(
    () => createTheme(getTheme(mode as PaletteMode)),
    [mode]
  );

  theme.typography.body2 = {
    [theme.breakpoints.down("sm")]: {
      fontWeight: 300,
      fontSize: "0.7rem",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Theme;
