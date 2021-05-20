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


const ResultsDashboard = forwardRef((props, ref) => {

    const divRef = useRef(null)



    if (global.jobs===undefined || global.jubs===null) global.jobs=[];

    global.jobTable={};
    for(let i=0;i<global.jobs.length;++i) {
      global.jobTable[global.jobs[i].ID]=global.jobs[i];
    }

    const taskResults= (jobID) =>    {
       global.currentJob=global.jobTable[jobID];
       global.ajax.get(global.server+"GetTasksPerJob&JobID="+jobID,taskResultsReply);

    }

    const taskResultsReply = (reply) => {
        if(reply.includes("Error:")) {
            alert(reply);
            return;
        }
        global.taskResultsPerJob=JSON.parse(reply);
        calcTaskerStats();
        global.gotoPage("TaskResultsPerJob");
    }

    const calcTaskerStats = () => {
        global.numberOfTasksPerformed=global.taskResultsPerJob.length;
        let users={};
        global.taskerCount=0;
        for (let i=0;i<global.taskResultsPerJob.length;++i) {
            let tsk=global.taskResultsPerJob[i];
            if (!users[tsk.UserID]) ++global.taskerCount;
            users[tsk.UserID]=true;
        }
    }


    return (
        <div ref ={divRef} >
          <Box textAlign='center'>
          <p></p>
          <h2>Select a Job to see the training results </h2>
          
          <p></p>
          {global.jobs.length==0 && "No current Jobs"}
          {global.jobs.map(job => (
              <div>
              <p></p>
              <Button  variant="contained" color="secondary" onClick={() => {taskResults(job.ID)}}> {job.name} </Button>
              </div>
            
          ))}

          <p></p>


          <h6 color="primary"  ></h6>
          {<Button  variant="contained" color="primary" onClick={() => {global.gotoPage("Dashboard")}}> Back </Button>}

          </Box>
      </div>

    )
});

export default ResultsDashboard