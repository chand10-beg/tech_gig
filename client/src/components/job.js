import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Girl from './../utils/deliveryGirl.svg';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign:'center',
      '& > h1':{
        color:"#FF4F5B",
        margin:'1.5rem 0 0 0',
      },
      '& > p':{
          fontSize:'1.3rem',
          margin:'1rem 0 ',
          padding:'0'

      }
    },
    paper: {
      padding: theme.spacing(3,2),
      textAlign: 'center',
    },
    girl:{
        width:'70%' ,
    },
    heading: {
        fontSize: '1.1rem',
        color:"#FF4F5B",
        fontWeight:'bold'
      },

    aCard:{
  boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    },
    listItem:{
        display:'flex',
        alignItems:'center',
        '& > svg':{
            fontSize:'small',
            marginRight:'1rem'
        },
        '& > p':{
            margin:0
        }
    },
    highlight:{
        width:'70%',
        margin:'1rem auto',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        textAlign:'left',

    },
    box:{
        width: '40%',
        margin:'.5rem 1rem',
        '& > strong':{
            color:"#FF4F5B"

        },
        '& > p':{
            margin:'0',

        }
    },
    apply:{
        margin:"2rem 0",
        backgroundColor:"#fefe22",
        color:"#000",
        textTransform:"none",
        marginLeft:'auto',
              
      '&:hover': {
        backgroundColor:"yellow",
        },
    },
  }));


const Job = () => {
    const classes = useStyles();  
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);

    };
    return (<div className={classes.root}>
        <h1>Non biker Delivery Executive</h1>
        <p><strong>Flipkart</strong>, DL road, Ahmedabad</p>
        <Grid container spacing={0}>
        <Grid item xs={12} sm ={6} className={classes.paper}>
            <img src ={Girl} className={classes.girl} alt="girl"></img>
            <div className={classes.highlight}> 
                <div className={classes.box}>
                    <strong>Driving License</strong>
                    <p>required</p>
                </div>
                <div className={classes.box}>
                <strong>Aadhar Card</strong>
                    <p>required</p>
                </div>
                <div className={classes.box}>
                <strong>Gender</strong>
                    <p>female</p>
                </div>
                <div className={classes.box}>
                <strong>Two-wheeler</strong>
                    <p>required</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={12} sm ={6} className={classes.paper}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.aCard}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Job Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Company, <strong>Flipkart</strong></p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Adress, <strong>DL, road Ahmedabad</strong></p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p><strong>Morning </strong>shift, <strong>10:00 AM - 1:00 PM</strong></p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Deliver products to customer</p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Collects payments and ensure timely delivery</p></div>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.aCard}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Key Features</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Daily earning, <strong>120 Rs/hour</strong></p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Flexible, <strong>working hours</strong></p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p><strong>paid</strong> training</p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>T-shirts and gadgets</p></div>
              <div className={classes.listItem}><FiberManualRecordIcon></FiberManualRecordIcon><p>Zero onboarding fee</p></div>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button className={classes.apply} variant="contained" color="primary">
        Apply now
      </Button>
        </Grid>
      </Grid>
    </div>  );
}
 
export default Job;