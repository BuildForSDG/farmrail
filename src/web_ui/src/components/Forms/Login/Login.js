// import React from 'react';
// import { Link } from 'react-router-dom';



// export default function Login() {
//   return (
//     <div>
      
//       <Link to="/dashboard">
//         <h2>Login</h2>
//       </Link>
//     </div>
//   );
// }




import React from 'react';
import {Button} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Form, Formik, } from 'formik';
import {useDispatch} from 'react-redux'
import {handleLogin} from "../../Layout/LayoutDashboard/coreActions";
import Layout from '../../Layout/index'
import * as yup from "yup";
// import {post} from "../../utils/ajax";
// import {remoteRoutes} from "../../data/constants";
// import Toast from "../../utils/Toast";
import XTextInput from "./XTextInput";
import {useLoginStyles} from "./loginStyles";
import { Link } from 'react-router-dom';

function Login() {
    const classes = useLoginStyles();
    // const dispatch = useDispatch();
    // const onSubmit = (data, actions) => {
    //     // post(remoteRoutes.login, data, resp => {
    //     //     dispatch(handleLogin(resp))
    //     // }, () => {
    //     //     Toast.error("Invalid username/password")
    //     // }, () => {
    //     //     actions.setSubmitting(false)
    //     // })
    // }

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
                    // validationSchema={schema}
                    // onSubmit={onSubmit}
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


