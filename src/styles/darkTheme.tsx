import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1f6feb", // Azul eléctrico
    },
    secondary: {
      main: "#3ddc97", // Verde menta
      light:"#434343"
    },
    background: {
      default: "#0d1117", // Azul oscuro (GitHub Dark)
      paper: "#161b22", // Gris grafito,
    },
    text: {
      primary: "#eaeaea", // Gris claro
      secondary: "#b0b0b0", // Gris medio
    },
    error: {
      main: "#ff4c4c", // Rojo intenso
    },
    success: {
      main: "#4caf50", // Verde lima
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
  },
});

export default darkTheme;
