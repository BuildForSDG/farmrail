import React from 'react';
import {Button} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Form, Formik, } from 'formik';
import Layout from '../../Layout/index'
import * as yup from "yup";
import XTextInput from "../common/XTextInput";
import {useStyles} from "../common/Styles";
import { Link } from 'react-router-dom';

function Login() {
    const classes = useStyles();

    return (
        <Layout>
        <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon/>
                </Avatar>
                <Typography component="h1">
                    Sign in
                </Typography>
                <Formik
                    initialValues={{
                        "username": "maria5angella@gmail.com",
                        "password": "Farmrail@123"
                    }}
                >
                    {(formState) => (
                        <Form className={classes.form}>
                            <XTextInput
                                type='email'
                                name='username'
                                label='Email'
                                autoComplete="off"
                                autoFocus
                                margin="normal"
                            />

                            <XTextInput
                                type='password'
                                name='password'
                                label='Password'
                                autoComplete="off"
                                margin="normal"
                            />
                            <Link to="/dashboard">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={formState.isSubmitting}
                            >
                                Sign in
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


export const schema = yup.object().shape(
    {
        username: yup.string().email('Invalid email').required("Email is required"),
        password: yup.string().required("Password is required")
    }
);

export default Login


