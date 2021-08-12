import React, {useState} from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as animationData from './../utils/deliveryMan.json';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import call from './../utils/call.svg'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    home_div: {
        textAlign:"center",

    },

    home_heading:{
        fontSize:"2.5rem",
        margin:"2rem 0 3rem",
        '& strong':{
          color:"#FF4F5B"
        }
    },
    find_jobs:{
        margin:"2rem 0",
        backgroundColor:"#fefe22",
        color:"#000",
        textTransform:"none",
        marginLeft:'1rem',
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },
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
      width:'55%',
      boxShadow: theme.shadows[5],
      paddingBottom: theme.spacing(4, 2),
      display:'flex',
    },
    info:{
      width:'50%',
      padding:'2rem',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > p':{
        fontSize:"1rem",
        textAlign:'center',
        margin:0,
        '& strong':{
          color:"#FF4F5B"
        }
      }

    },
    form:{
      
      width:'50%',
      display:'flex',
      padding:'3rem 2rem',
      boxSizing:'border-box',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > *':{
        width:'200px',
        margin:'0.5rem'
        
        
      }
    }
    
  }));

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Home = () => {

 const classes = useStyles();
 const [open, setOpen] = React.useState(false);
 const [name, setName] = useState("");
 const [org, setOrg] = useState("");
 const [phone, setPhone] =useState("");
 const [adding, setAdding] = useState(false);
 
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleSubmit =(e)=>{
  e.preventDefault();
  setAdding(true);
  

  setTimeout(()=>{
    handleClose();
  setAdding(false);  
  console.log("submitted");
  toast.success("Job Saved Sucessfully!");
  },4000)
}
    return ( <div className={classes.home_div}>
       <ToastContainer />   
        <p className={classes.home_heading}>
            Earn <strong> hourly</strong>, where ever and when ever you want!
        </p>
        <Lottie options={defaultOptions}
              height={300}
              width={500}
              isStopped={false}
              isPaused={false}/>

<Button className={classes.find_jobs} variant="contained" color="primary">
        <Link to="/findJobs" >Lets find jobs</Link>
      </Button>
      
      <Button className={classes.find_jobs} variant="contained" color="primary"
      
      onClick={handleOpen}>
        Hire workers
      </Button>

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
          <div className={classes.info}>
           
<img src={call} width="80%" height=" 80%" alt="admin"></img>

<p>Our team will <strong>contact you</strong>, at the earliest</p>
          </div>
          <form className={classes.form} Validate onSubmit={handleSubmit} autoComplete="off">
  <TextField  size="small" id="clientId" value={name} onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined" />
  <TextField size="small" id="clientName" value={org} onChange={(e) => setOrg(e.target.value)} label="Organisation" variant="outlined" />
  <TextField  size="small" id="timings" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone" variant="outlined" />
<Button
        variant="contained"
        type="submit" 
        className={classes.find_jobs}
        
        
      >
        Submit
      </Button>
      {
        adding?
        <CircularProgress color="secondary" />:null
      } 
</form>

          </div>
        </Fade>
      </Modal>
    </div> );
}
 
export default Home;