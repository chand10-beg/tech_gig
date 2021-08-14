import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import confirm from './../utils/confirm.svg';
import submit from './../utils/submit.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  form1:{
      width:'85%',
      margin:'1rem auto 2rem',
      textAlign:'center'
  },
  textField:{
      width:'80%',
      margin:'.5rem'
  },
  input: {
    display: 'none',
  },
  upload:{
      width:'100%',
    display:'flex',
    alignItems:'center',
    margin:'.5rem 0',
    backgroundColor:'#EEEEEE',
    borderRadius:'5px',
    justifyContent:'space-between',
    padding:'0 1rem'

  },
  confirm:{
      width:'150px'
  },
  button:{
    backgroundColor:"#fefe22",
    color:"#000",
    textTransform:"none",
          
  '&:hover': {
    backgroundColor:"yellow",
    color:"#000"
    },
},
final:{

},
done:{
    width:'50%',
    margin:'0 auto'
}
}));

function getSteps() {
  return ['Personal Information', 'Documents', 'Affirmation'];
}


export default function Application() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return(
          <Grid container className={classes.form1}>
          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic1"className={classes.textField} size="small" disabled label="Full Name" defaultValue="Rashika Rawat"  variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic2" className={classes.textField}  size="small" label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic" className={classes.textField}  size="small" disabled label="Mobile" defaultValue="8146515308" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic" className={classes.textField}  size="small" label="Aadhar card number" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic" className={classes.textField}  size="small" label="License card number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
      <TextField id="outlined-basic" className={classes.textField}  size="small" label="PAN card number" variant="outlined" />
          </Grid>
        </Grid>
        );
      case 1:
        return (
            <Grid container className={classes.form1}>
          <Grid item xs={12}>
              <div className={classes.upload}>
              <p>Driving License</p>
              <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.button}  color="primary" component="span">
          Upload
        </Button>
      </label>
              </div>
              </Grid>
          <Grid item xs={12}>
          <div className={classes.upload}>
              <p>Aadhar Card</p>
              <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.button} color="primary" component="span">
          Upload
        </Button>
      </label>
              </div>
          </Grid>
          <Grid item xs={12}>
          <div className={classes.upload}>
              <p>PAN card</p>
              <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.button}  component="span">
          Upload
        </Button>
      </label>
              </div>
              </Grid>   
        </Grid>
        );
      case 2:
        return (
            <Grid container className={classes.form1}>
            <Grid item xs={12}>
                <img src={confirm} className={classes.confirm} alt ="confirm"></img> 
            </Grid>
            <Grid item xs={12}>
                <p>I hereby declare that all the information given by me is <strong>correct</strong>.</p>
            </Grid>
 
          </Grid>
        );
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmit =()=>{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel color="secondary">
        {steps.map((label) => (
          <Step key={label} >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ?(
            <div className={classes.form1}>
             <img src={submit} className={classes.done} alt="submit"></img>
             <p>We <strong>recevied your application</strong>, our team will soon contact you for <strong>futher verification</strong></p>
                </div>
        ): (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {
                  (activeStep === steps.length - 1)?
                  <Button variant="contained" className={classes.button} onClick={handleSubmit}>
                      Submit
                  </Button>
                  :
                  <Button variant="contained" className={classes.button}  onClick={handleNext}>
                      Next
                </Button>
              }

            </div>
          </div>
        )}
      </div>
    </div>
  );
}