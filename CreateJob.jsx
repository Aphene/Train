
import React, { useEffect,  forwardRef } from "react";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Ajax from "./Ajax";


const Register = forwardRef((props, ref) => {

global.jobMode="New";





const initJob = () => {
    global.count=0;
    global.job={};
    global.name="";
    global.title="";
    global.bounty="0.5";
    global.description="";
    global.instructions="";
    global.budget="20.00";
  


}    


const jobName= (e) => {
    global.name = e.target.value;

}

const jobTitle = (e) => {
    global.title = e.target.value;
}

const jobDescription = (e) => {
    global.description = e.target.value;
}

const jobInstructions = (e) => {
    global.instructions = e.target.value;
}

const jobBounty = (e) => {
    global.bounty = e.target.value;
}

const jobBudget = (e) => {
  global.budget = e.target.value;
}

// const submit= (e) => {
//   global.gotoPage("Gallery");
// }

const submit= (e) => {
  let url = global.server+"PublishJob1";
  url = url +"&UserID="+global.userID+"&Name="+global.name;
  let job={ 
      userID: global.userID,
      name: global.name,
      title: global.title,
      description: global.description,
      instructions: global.instructions,
      bounty: global.bounty,
      budget: global.budget
  };
  global.jobCandidate=job;
  let data= JSON.stringify(job);
  let ajax = new Ajax();
  ajax.post(url,data,publishJobReply);
}

const publishJobReply = (reply) => {
  if (reply.includes("Error:")) {
    alert(reply);
    return;
  }
  let job=JSON.parse(reply);
  global.currentJob=job;

  global.gotoPage("Gallery");
}


const cancel= (e) => {
    global.gotoPage("Dashboard");
  }

   if (global.job===undefined || global.job===null) {
    initJob();
   }
   ++global.count;

    return (


      <div>
     
             <p></p> Create a new Job.
             <o></o>
              <label>
                
              <TextField
                  id="outlined-basic"
                  label="Job Name"
                  name="jobname"
                  defaultValue={global.name}
                  fullWidth
                  variant="outlined"
                  onChange={jobName}
                  required
                />
              </label>
              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="Title"
                  name="title"
                  defaultValue = {global.title}
                  fullWidth
                  variant="outlined"
                  onChange={jobTitle}
                  required
                />
              </label>
              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="Description"
                  name="description"
                  defaultValue = {global.description}
                  fullWidth
                  variant="outlined"
                  onChange={jobDescription}
                  required
                />
              </label>

              <br />
              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="Instructions for Tasker"
                  name="instructions"
                  defaultValue = {global.instructions}
                  multiline
                  fullWidth
                  variant="outlined"
                  onChange={jobInstructions}
                  required
                />
              </label>

              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="Bounty in US Dollars (five cents would be 0.05)"
                  name="bounty"
                  defaultValue = {global.bounty}
                  fullWidth
                  variant="outlined"
                  onChange={jobBounty}
                  required
                />
              </label>

              <br />
              <br />

              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="Total budget for job in US Dollars (twenty dollars would be 20.00)"
                  name="budget"
                  defaultValue = {global.budget}
                  fullWidth
                  variant="outlined"
                  onChange={jobBudget}
                  required
                />
              </label>

              <br />

              <Button
          
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {submit()}}
              >
               Next: Set Training Type
              </Button>
              <br />
              <br />
              <Button         
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => {cancel()}}
            >
            Cancel Job
            </Button>
              </div>


    )
});





export default Register