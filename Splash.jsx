import React, { useRef, useState, forwardRef, useImperativeHandle,makeStyles} from "react";


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';





const Splash = forwardRef((props, ref) => {

    let w=450;
    if (w>window.innerWidth) w=window.innerWidth;

    return (
        <Box textAlign='center'>
        <p></p> 
        <h3>Crowd Source your ML training cheap and easy.</h3>
        <p></p> 
        <Paper > <img src="./images/rosie.png" width={w} /> </Paper>
        <p></p> 
        <h3>Create Training data for 5 cents a pop.</h3>
        <p></p>
        <Button variant="contained" color="primary" onClick={() => {global.gotoPage("Register")}}>  Sign Up</Button>
        <Typography  color="secondary">....</Typography>
        <Button variant="contained" color="primary" onClick={() => {global.gotoPage("SignIn")}}>   Already registered? Sign In</Button>
      
        </Box>
    )

});

export default Splash