import React from 'react';
import JobCard from './jobCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width:'100%',
        textAlign:"center",
 },
 heading:{
     fontSize:'2.3rem',
     '& strong':{
         color:'#FF4F5B'
     }
 }

  }));

const Findjobs = () => {

    const classes = useStyles();

    return (<div className={classes.container}>
        <p className={classes.heading}>
            Find jobs at 
            <strong> any location</strong>
        </p>
        <JobCard></JobCard>

    </div>  );
}
 
export default Findjobs;