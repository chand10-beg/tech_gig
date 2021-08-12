import React,{useState} from 'react';
import JobCard from './jobCard';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
    loader:{
marginTop:'8rem'
    },
    container: {
        width:'100%',
        textAlign:"center",
 },
 heading:{
     fontSize:'2.3rem',
     '& strong':{
         color:'#FF4F5B'
     },

 },
 jobs:{
    backgroundColor:'#EEEEEE',
    border:'4px solid 	#E5E5E5',
    width:'60%',
    margin:'1rem auto',
    padding:'.5rem',
    borderRadius:'5px',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    height:'500px',
    boxSizing:'border-box',
    overflow:'scroll'
},
filter:{
    width:'60%',
    margin:'1rem auto',
    display:'flex',
    flexWrap:'wrap'
},
button:{
    marginRight:'1rem',
    textTransform:'none'
},
select:{
    backgroundColor:'yellow',
    marginRight:'1rem',
    textTransform:'none',
    fontWeight:'bold',
    '&:hover':{
        backgroundColor:'yellow'
    }
}

  }));

const Findjobs = () => {

    const classes = useStyles();
    const [select, setSelect] = useState("all");
const [loader, setLoader] =useState(false);
    
    const filterAll = () =>{
       setSelect("all");
    }
const filterWomen = () =>{
    setSelect("women");
    }
 const filterShift = () =>{
    setSelect("shift");
    }
const filterDelhi = () =>{
    setSelect("delhi");
            }    


    return (<div className={classes.container}>
        <p className={classes.heading}>
            Find jobs at 
            <strong> any location</strong>
        </p>
        <div className={classes.filter}>
        <Button
        variant="contained"
        className={(select === "all")?classes.select:classes.button }
        onClick={filterAll}
      >
        All
      </Button>
      <Button
        variant="contained"
        className={(select === "shift")?classes.select:classes.button }
        onClick={filterShift}
      >
        Shift
      </Button>
      <Button
        variant="contained"
        className={(select === "women")?classes.select:classes.button }
        onClick={filterWomen}
    
      >
        Women jobs
      </Button>
      <Button
        variant="contained"
        className={(select === "delhi")?classes.select:classes.button }
        onClick={filterDelhi}
      >
        Delhi
      </Button>
        </div>
        {
            loader?(
                <div>
                <Loader
                className={classes.loader}
                 type='TailSpin'
                 color="#FF4F5B"
                 height={80}
                 width={80}
               />
               </div>
            ):
            <div className={classes.jobs} >
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            </div>
        }
      


    </div>  );
}
 
export default Findjobs;