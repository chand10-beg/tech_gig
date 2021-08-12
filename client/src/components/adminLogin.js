import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import admin from './../utils/admin.svg'


const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      textAlign:'center',
      marginTop:'3rem',

      '& p':{
        fontSize:'2.7rem',
        '& strong':{
            color:"#FF4F5B"
          }
      }
      
    },
    grid:{
        width:'80%',
        margin:'auto',
        display:'flex',
        justifyContent:'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius:'5px'

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    form_div:{
      boxSizing:'border-box',
  
    },
    form: {
        textAlign:'center',            
        display:'flex', 
        flexDirection:'column',   
        flexWrap:'wrap',
        width:'100%',
        padding:'3rem 1rem',
        '& > *': {
   
        
         width:"50%",
         margin: '1rem auto'
         
        },
      },

      login:{
          backgroundColor:'yellow',
          color:'#000',
          '&:hover':{
            backgroundColor:'yellow',
          }

      },
      left:{
        backgroundColor:'#FF4F5B',
        borderTopLeftRadius:'5px',
        borderBottomLeftRadius:'5px',
          '& img':{
             
              margin:'2.5rem auto'
          }
      },

 
  }));
  

  
const AdminLogin = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <p><strong>Admin</strong> login</p>

            <Grid className={classes.grid} spacing={3}>

        <Grid className={classes.left} item xs={5}>
<img src={admin} width="70%" height=" 70%" alt="admin"></img>
        </Grid>
        <Grid className={classes.form_div} item xs={7}>
        <form className={classes.form} Validate>
      <TextField id="outlined-basic" label="Email" type ="email" variant="outlined" />
      <TextField  id="outlined-basic" label="Password" type="password" variant="outlined" />
      <Button className={classes.login} variant="contained" color="primary">
        Login
      </Button>
    </form>
        </Grid>

      </Grid>
        </div>
     );
}
 
export default AdminLogin;