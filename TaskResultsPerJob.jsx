//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


const TaskResultsPerJob = forwardRef((props, ref) => {

const handleAddressChange= (e) => {
  global.address= e.target.value;
}

let taskID=1;
let jobID=2;
let taskCount=3;

jobID= global.currentJob.ID;

const submit= (e) => {
  global.amountSent= global.amount;
  global.amount=0;
  global.gotoPage("FundsSent");
}

const cancel= (e) => {
  global.gotoPage("Dashboard");
}

const saveToFile = (e) => {
    var fileContent =  JSON.stringify(global.taskResultsPerJob);
    var bb = new Blob([fileContent ], { type: 'text/plain' });
    var a = document.createElement('a');
    a.download = 'download.txt';
    a.href = window.URL.createObjectURL(bb);
    a.click();
}

    return (
      <div>
           <p></p>
         Task Results for Job {global.currentJob.name}
         <p></p>
         Number of tasks peformed: {global.numberOfTasksPerformed.toString()}
         <p></p>
         Number of people who peformed this Task: {global.taskerCount.toString()}
          <p></p>
          <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => {saveToFile()}}
                    >
                    Download Task Results
                </Button>

                <p></p>
              <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={cancel}
                    >
                    Return
                </Button>
              </div>


    )
});





export default TaskResultsPerJob