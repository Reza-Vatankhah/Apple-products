import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `"appleSystem", "Helvetica Neue",`
    },
    palette: {
        primary: {
            main: '#034078',
            light: '#0A1128',
            // dark: '#002884',
            // contrastText: '#fff',
        },
    }

});

export default theme;