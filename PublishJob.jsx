import React, { useRef, useState, forwardRef, useImperativeHandle,makeStyles} from "react";
import Button from '@material-ui/core/Button';
import Ajax from './Ajax'


const publish = () => {
    let url = global.server+"PublishJob2";
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
    ajax.post(url,data,ajaxReply);
}

const update = () => {
    let url = global.server+"UpdateJob";
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
    ajax.post(url,data,ajaxReply);
}

const ajaxReply = (replyString) => {
    if (replyString.includes("Error:")) {
        alert(replyString);
        return;
    }
    let job=JSON.parse(replyString);
    global.currentJob=job;
    getJobs();
}

const getJobs = () => {
    global.ajax.get(global.server+"GetUserJobs&UserID="+global.userID,getJobsReply);
  }
  
  const getJobsReply = (reply) => {
    if (reply.includes("Error:")) {
      alert(reply);
      return;
    }
    global.jobs=JSON.parse(reply);
    global.gotoPage("Dashboard");
  }

const PublishJob = forwardRef((props, ref) => {



return (
    <div>
     <p></p>
     <p></p>
     {global.jobMode=="New" && <h3>Publsh Job</h3>}
     {global.jobMode=="Edit" && <h3>Update Job</h3>}
    <p></p>
    Note: Job will not go live until escrow wallet receives funds.
    <p></p>

    <p></p>
    <p></p>
    {global.jobMode=="New" && <Button variant="contained" color="primary"  onClick={() => {publish()}}> Publish </Button>}
    {global.jobMode=="Edit" && <Button variant="contained" color="primary"  onClick={() => {publish()}}> Update Job </Button>}
    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Upload")}}> Back </Button>
    <p></p>
    <Button variant="contained" color="secondary"  onClick={() => {global.gotoPage("Dashboard")}}> Cancel</Button>
    <p></p>

    </div>
)

});

export default PublishJob;