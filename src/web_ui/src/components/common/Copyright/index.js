import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography data-copyright="copyright" variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link data-copyright="farmrail" color="inherit" href="https://farmrail-staging.netlify.app">
        {'Farmrail '}
      </Link>
      {`${new Date().getFullYear()}.`}
    </Typography>
  );
}
