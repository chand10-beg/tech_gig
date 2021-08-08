import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as animationData from './../utils/deliveryMan.json';
import {Link} from 'react-router-dom';

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
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },
    },
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

    return ( <div className={classes.home_div}>
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
    </div> );
}
 
export default Home;