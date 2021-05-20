//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const styles = theme => ({
  spacer:{
      color:'red'
  }
});

const editJob = (jobName) =>
{

}


const Dashboard = forwardRef((props, ref) => {

    const divRef = useRef(null)



    if (global.jobs===undefined || global.jubs===null) global.jobs=[];

    global.jobTable={};
    for(let i=0;i<global.jobs.length;++i) {
      global.jobTable[global.jobs[i].ID]=global.jobs[i];
    }

    const editJob= (id) =>    {
       global.currentJob=global.jobTable[id];
       global.gotoPage("EditJob");
    }




    return (
        <div ref ={divRef} >
          <Box textAlign='center'>
          <p></p>
          <h2>Current Jobs</h2>
          
          <p></p>
          {global.jobs.length==0 && "No current Jobs"}
          {global.jobs.map(job => (
              <div>
              <p></p>
              <Button  variant="contained" color="secondary" onClick={() => {editJob(job.ID)}}> {job.name} </Button>
              </div>
            
          ))}

          <p></p>

          <h2>Create a new Job</h2>
          <p></p>
          Ready to Create a Machine Learning Job?
          <p></p>
          <h6 color="primary"  ></h6>
          {<Button  variant="contained" color="primary" onClick={() => {global.gotoPage("CreateJob")}}> Create a New Job</Button>}

          <p></p>
          <h3>Escrow Wallet Amount: 0.000 Dash</h3>

          <p></p>
          <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("PayEscrow")}}> Upload Funds to Escrow account </Button>

          <p></p>
          <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("ResultsDashboard")}}> See training results </Button>
 
          </Box>
      </div>

    )
});

export default Dashboard