import React, { useRef, useState, forwardRef, useImperativeHandle,makeStyles} from "react";
import Button from '@material-ui/core/Button';
import Ajax from './Ajax';


const removeImages = () =>{
    let rurl = global.server+"RemoveImages&Path=&UserID="+global.userID+"&JobID="+global.currentJob.ID;
    global.ajax.get(rurl,removeReply);
}

const removeReply = (reply) => {
   alert(reply);
}


const Upload = forwardRef((props, ref) => {


    let url = global.server+"Uploader&Path=&UserID="+global.userID+"&JobID="+global.currentJob.ID;


return (
    <div>
     <p></p>
     <p></p>
    <h4>Drop image file or folder on the square below. Or click on the square to bring up the file picker</h4>
    <p></p>
    <iframe src={url} width={100+"%"} height={200+"px"} scrolling="no"></iframe>
    <p></p>

    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {removeImages()}}> Delete current images on server </Button>
    <p></p>
    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("PublishJob")}}> Next </Button>
    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Gallery")}}> Back </Button>
    <p></p>

    </div>
)

});

export default Upload;