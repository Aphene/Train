//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


const TaskResultsPerTask = forwardRef((props, ref) => {

const handleAddressChange= (e) => {
  global.address= e.target.value;
}

let taskID=1;

const submit= (e) => {
  global.amountSent= global.amount;
  global.amount=0;
  global.gotoPage("FundsSent");
}

const cancel= (e) => {
  global.gotoPage("Dashboard");
}

    return (
      <div>
           <p></p>
         Task Results for Task {taskID.toString()}
         <p></p>
         Number of pepple who peformed this Task: {taskCount.toString()}
          <p></p>


                ....
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





export default TaskResultsPerTask