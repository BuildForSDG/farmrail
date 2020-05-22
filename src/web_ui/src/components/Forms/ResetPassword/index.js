import React from "react"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import './ResetPassword.css';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: 0
  },
  submitButton: {
    width: '100%',
    background: 'springgreen',
    color: 'black',
    borderRadius: '4px',
    padding: theme.spacing(1.25),
    border: 0
  },
  inputField: {
    width: '100%',
    padding: '10px 15px',
    margin: '15px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
  },
  h6: {
    margin: 0,
    textAlign: 'center'
  },
  h1: {
    margin: '5px',
    color: 'green',
    textAlign: 'center'
  },
  p: {
    margin: '15px 0 0',
    textAlign: 'left'
  },
  farmImage: {
    width: '250px',
    height: '250px',
    borderRadius: '50%'
  },
  imageWrapper: {
    width: '250px',
    height: '250px',
    marginLeft: '-10%',
    marginTop: '-10%'
  },
  resetForm: {
    width: '230px',
    margin: '-15% auto 0',
    paddingBottom: '30px'
  }
}));

const ResetPassword = () => {
  const classes = useStyles();
  return (
    <div className="content-wrapper" data-content-wrapper="data-content-wrapper">
      <Card className={` ${classes.card} reset-password-card`}>
        <CardContent>
          <div className={`${classes.imageWrapper} reset-image`}>
            <img data-reset-image="data-reset-image" src="/images/resetimg.jpg" 
            alt="farm" className={classes.farmImage} />
          </div>
          <div className={`${classes.resetForm} reset-form`}>
            <h1 data-heading="data-heading" className={classes.h1}>Farmrail</h1>
            <h6 data-reset-title="data-reset-title" className={classes.h6}>RESET PASSWORD</h6>
            <form>
              <input data-email-input="data-email-input" type="text" placeholder="Email" className={classes.inputField} />
              <button data-reset-button="data-reset-button" type="button" className={classes.submitButton}>
                Send Reset Password Link
              </button>
            </form>
            <p data-back-home="data-back-home" className={classes.p}>Back to Home</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ResetPassword;
