import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import {Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root:{
        width:"700px",
        margin:"150px auto",
        [theme.breakpoints.between('xs','sm')]:{
            width:"300px",
            margin: "150px auto",
            padding:"20px"
        }
    },
    card:{
        padding:0
    },
    submitButton:{
        width:"100%",
        background:"springgreen",
        color:"black",
        borderRadius:"4px",
        padding:theme.spacing(1.25),
        border:0
    },
    inputField:{
        width: "100%",
        padding:"10px 15px",
        margin: "8px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        '&:focus':{
            outline:"none"
        },
    },
    h3:{
        margin:0,
        textAlign:"center"
    },
    p:{
        margin:"15px 0 0",
        textAlign:'left'
    },
    farmImage:{
        width:"250px",
        height:"250px",
        borderRadius:"50%",
    },
    imageWrapper:{
        width:"250px",
        height:"250px",
        marginLeft: "-10%",
        marginTop: "-10%",
        [theme.breakpoints.between('xs','sm')]:{
            display: "none",
        }
    },
    resetForm:{
        width:"230px",
        margin:"-15% auto 0",
        paddingBottom:"30px",
        [theme.breakpoints.between('xs','sm')]:{
            margin:0,
            width:"100%"
        }
    },
    errorMessage:{
        color:"red",
        marginBottom:theme.spacing(1)
    }

}))


const ResetPassword = () =>{
    const classes = useStyles()
    return (
        <div data-content-wrapper className={classes.root}>
            <Card data-reset-password-card className={classes.card}>
                <CardContent>
                    <div className={classes.imageWrapper}>
                        <img data-reset-image src="/images/resetimg.jpg"  alt="farm"  className={classes.farmImage}/>
                    </div>
                    <div className={classes.resetForm}>
                        <h3 data-heading className={classes.h1}>RESET PASSWORD</h3>
                        <Formik
                            initialValues={{email:''}}
                            validationSchema={Yup.object({
                                email:Yup.string()
                                .email('Invalid email address')
                                .required('Required')
                            })}
                            onSubmit={(values,{setSubmitting})=>{
                                alert(JSON.stringify(values))
                                setSubmitting(false)
                            }}
                        >
                        {formik=>(
                        <form onSubmit={formik.handleSubmit}>
                            <input data-email-input type="email" id="email" {...formik.getFieldProps('email')}
                             placeholder="Email" className={classes.inputField} 
                             style={{border:formik.touched.email && formik.errors.email && "1px solid red"}}
                             autoComplete="off"/>
                             {formik.touched.email && formik.errors.email ?
                                 (<div className={classes.errorMessage}>{formik.errors.email}</div>):null}
                            <button type="submit" data-reset-button className={classes.submitButton}>Send Reset Password Link</button>
                        </form>
                        )}
                        </Formik>
                        <Link to="/"><p data-back-home className={classes.p}>Back to Home</p></Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default ResetPassword;
