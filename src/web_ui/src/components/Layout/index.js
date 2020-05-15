import React from 'react';
import HeaderBar from './Header/HeaderBar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '65vh',
    marginTop: '64px',
    [theme.breakpoints.down('md')]: {
      margin: '10% 0 0 14%',
    },
  },
}));

export default function Layout(props) {
  const {children} = props,
    classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderBar />
      <main className={classes.main}>
        {/* Content unit */}
        {children}
        {/* End content unit */}
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}