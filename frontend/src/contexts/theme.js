import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      
      25:"#e5f9fc",
      50: "#e0f7fa",
      100: "#b2ebf2",
      200: "#80deea",
      300: "#4dd0e1",
      400: "#26c6da",
      500: "#00bcd4",
      600: "#00acc1",
      700: "#0097a7",
      800: "#00838f",
      900: "#006064",

      //Blue shades
      // 50: '#e3f2fd',
      // 100: '#bbdefb',
      // 200: '#90caf9',
      // 300: '#64b5f6',
      // 400: '#42a5f5',
      // 500: '#2196f3',
      // 600: '#1e88e5',
      // 700: '#1976d2',
      // 800: '#1565c0',
      // 900: '#0d47a1',

      // purpleShades
      // 25: "#faf0fa",
      // 50: "#f3e5f5",
      // 100: "#e1bee7",
      // 200: "#ce93d8",
      // 300: "#ba68c8",
      // 400: "#ab47bc",
      // 500: "#9c27b0",
      // 600: "#8e24aa",
      // 700: "#7b1fa2",
      // 800: "#6a1b9a",
      // 900: "#4a148c",

      //orange shades
      // 50: "#FFF3E0",
      // 100: "#FFE0B2",
      // 200: "#FFCC80",
      // 300: "#FFB74D",
      // 400: "#FFA726",
      // 500: "#FF9800",
      // 600: "#FB8C00",
      // 700: "#F57C00",
      // 800: "#EF6C00",
      // 900: "#E65100",

      error: {
        10: "#ffe6e6",
        50: "#FFCCCC",
        100: "#FF9999",
        200: "#FF6666",
        300: "#FF3333",
        400: "#FF0000",
        500: "#CC0000",
        600: "#990000",
        700: "#660000",
      },
      warning: {
        10: "#fff5e6",
        50: "#FFEB99",
        100: "#FFD966",
        200: "#FFC133",
        300: "#FFAD00",
        400: "#FF9900",
        500: "#FF8800",
        600: "#FF7700",
        700: "#FF6600",
        800: "#FF5500",
        900: "#FF4400",
      },
      monochromic: "#00C9B6",
    },
    secondary: {
      main: "#00ff00",
    },
    ps: { main: "#00ff00" },
    common: {
      maincolour1: "red",
      maincolour2: "green",
    },
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          paddingLeft: 8, // Default horizontal padding
          paddingRight: 8, // Default horizontal padding
        },
      },
    },
  },
});

export default theme;
