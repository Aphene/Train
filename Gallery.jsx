
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




const Gallery = forwardRef((props, ref) => {


  let buttonsEnabled=false;

  const upload= () => {

    global.pages.push("Drop");
  }
  

  

  useEffect(() => {
    const timer = setTimeout(() => {
      buttonsEnabled=true;
    }, 500);
    return () => clearTimeout(timer);
  }, []);




    return (
        <div>
        <p></p>
     <h3>Available Classification Types</h3> 
        <Paper>
        <Grid container  spacing={12} >  
        <Grid item xs={8}>
        <h4 align="left"> Outline a feature in an image. </h4>
        </Grid>
           <Button  variant="contained" color="primary" onClick={() => {global.gotoPage("Upload")}}>  Choose this Train type </Button>
        </Grid>        
        </Paper>
        <p></p>
        <p></p>

        <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Upload")}}> Next </Button>
        <p></p>
        { global.jobMode == "New" && <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("CreateJob")}}> Back </Button>}
        { global.jobMode == "Edit" && <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("EditJob")}}> Back </Button>}
        <p></p>
        <Button variant="contained" color="secondary"  onClick={() => {global.gotoPage("Dashboard")}}> Cancel </Button>
      </div>
    )
});

export default Gallery