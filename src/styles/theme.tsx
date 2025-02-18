import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1565c0", // Azul vibrante
    },
    secondary: {
      main: "#ff6b81", // Rosa coral
    },
    background: {
      default: "#f5f5f5", // Gris muy claro
      paper: "#ffffff", // Blanco puro
    },
    text: {
      primary: "#333333", // Gris oscuro
      secondary: "#555555", // Gris intermedio
    },
    error: {
      main: "#ff5252", // Rojo anaranjado
    },
    success: {
      main: "#43a047", // Verde esmeralda
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
  },
});

export default lightTheme;
