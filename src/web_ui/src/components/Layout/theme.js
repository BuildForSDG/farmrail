import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    error: {
      main: blue[500],
    },
  },
});

export default theme;