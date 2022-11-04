import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  //custom theme variables
  bg: {
    main: '#fff',
    light: '#F4F5F7'
  },
  text: {
    main: '#172B4D',
    light: '#262930'
  },

  containerTopHeight: '180px',

  palette: {
    primary: {
      main: '#3F8AE0',
    },
    secondary: {
      main: '#326eb3'
    }
  },
});

export default theme;
