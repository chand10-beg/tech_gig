import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import icon from './../utils/delivery-man.png';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Application from './application';

const useStyles = makeStyles((theme) => ({

    jobCard:{
        width:"47%",
        padding:'.9rem',
        boxSizing:"border-box",
        margin:'0.5rem'
    },
    jobInfo:{
        display:"flex"
    },
    jobName:{
lineHeight:"3px",
boxSizing:"border-box",
margin:"0.5rem 1rem"
    },
    apply:{
        backgroundColor:"#fefe22",
        color:"#000",
        padding:'.3rem',
        textTransform:"none",
        fontSize:'.8rem',
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },

    },

    buttonDiv:{
display:'flex',
justifyContent:'space-between',

'& p':{
   
    margin:'.5rem 0 0 0',
    fontSize:'.9rem'
    
}
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '.5px solid #000',
        borderRadius:'5px',
        width:'65%',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
      },
  }));

const JobCard = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (  <Paper elevation={3} className={classes.jobCard} >

<div className={classes.jobInfo}>
<img src={icon}  width="40" height ="40" alt="icon" ></img>
<div className={classes.jobName}>
    <strong> <Link to="/findJobs/xyz">Non biker Delivery Executive</Link></strong>
    <p>Flipkart, DL road, Ahmedabad</p>
</div>
</div>

<div className={classes.buttonDiv}>
<p>
    Earning : <strong>120 Rs/hour</strong>
</p>
<Button className={classes.apply} variant="contained" color="primary" onClick={handleOpen}>
        Apply now
      </Button>
</div>

<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
<Application></Application>
          </div>
        </Fade>
</Modal>

    </Paper> );
}
 
export default JobCard;