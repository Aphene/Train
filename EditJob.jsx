
import React, { useEffect,  forwardRef } from "react";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";


const Register = forwardRef((props, ref) => {

    global.jobMode="Edit";





const initJob = () => {
    global.currentJob={};
    global.currentJob.count=0;
    global.currentJob.job={};
    global.currentJob.name="";
    global.currentJob.title="";
    global.currentJob.bounty="0.5";
    global.currentJob.description="";
    global.currentJob.instructions="";
    global.currentJob.budget="20.00";
  


}    


const jobName= (e) => {
    global.currentJob.name = e.target.value;

}

const jobTitle = (e) => {
    global.currentJob.title = e.target.value;
}

const jobDescription = (e) => {
    global.currentJob.description = e.target.value;
}

const jobInstructions = (e) => {
    global.currentJob.instructions = e.target.value;
}

const jobBounty = (e) => {
    global.currentJob.bounty = e.target.value;
}

const jobBudget = (e) => {
  global.currentJob.budget = e.target.value;
}

const submit= (e) => {
  global.gotoPage("Upload");
}

const cancel= (e) => {
    global.gotoPage("Dashboard");
  }

   if (global.currentJob===undefined || global.currentJob===null) {
    initJob();
   }
   ++global.count;

    return (


      <div>
     
             <p></p> Edit a current job.
             <o></o>
              <label>
                
              <TextField
                  id="outlined-basic"
                  label="Job Name"
                  name="jobname"
                  defaultValue={global.currentJob.name}
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
                  defaultValue = {global.currentJob.title}
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
                  defaultValue = {global.currentJob.description}
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
                  defaultValue = {global.currentJob.instructions}
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
                  defaultValue = {global.currentJob.bounty}
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
                  defaultValue = {global.currentJob.budget}
                  fullWidth
                  variant="outlined"
                  onChange={jobBudget}
                  required
                />
              </label>
              <p></p>
              <p></p>

              Job Type:
              <p></p>

              <Button variant="contained" color="secondary"  onClick={() => {global.gotoPage("Gallery")}}> Outline a feature in an image. - Change</Button>
              <p></p>
              <p></p>
              <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Upload")}}> Next</Button>
              <p></p>
              <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Dashboard")}}> Return to Dashboard </Button>

              </div>


    )
});





export default Register