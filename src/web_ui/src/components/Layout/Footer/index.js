import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Copyright from '../../common/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer id="footerDiv" className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Farmrail Connecting Farmers
      </Typography>
      <Copyright />
    </footer>
  );
}
