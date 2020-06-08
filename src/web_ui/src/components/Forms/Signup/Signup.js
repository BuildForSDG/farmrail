import React from 'react';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/index';
import XTextInput from '../common/XTextInput';
import { useStyles } from '../common/Styles';

function SignUp() {
  const classes = useStyles();

  return (
    <Layout>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1">Sign Up</Typography>
          <Formik
            initialValues={{
              username: 'maria5angella@gmail.com',
              password: 'Farmrail@123',
              confirmpassword: 'Farmrail@123'
            }}
          >
            {(formState) => (
              <Form className={classes.form}>
                <XTextInput type="email" name="username" label="Email" autoComplete="off" autoFocus margin="normal" />

                <XTextInput type="password" name="password" label="Password" autoComplete="off" margin="normal" />

                <XTextInput
                  type="password"
                  name="confirmpassword"
                  label="Confirm Password"
                  autoComplete="off"
                  margin="normal"
                />
                <Link to="/login">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={formState.isSubmitting}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Form>
            )}
          </Formik>
        </Paper>
      </main>
    </Layout>
  );
}

export default SignUp;
