import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#ffffff"}
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25
                }
            }
        }
    },
    typography: {
        button: {
            fontSize: "1.1rem",
            fontWeight: "bold"
        }
    }
});

export default theme;