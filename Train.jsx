import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Canvas from './Canvas'
import User from './User'
import Ajax from './Ajax'
import Amount from './Amount'
import { requirePropFactory } from "@material-ui/core";

const Train = forwardRef((props, ref) => {
    const divRef = useRef(null)
    const canvasRef = useRef(null)
    let x=0;
    let y=0;
    let width=0;
    let height=0;
    let imageIndex=0;
    let imageCount=50;
    let currentUrl="";
    let userID=0;

    useEffect (() => {
        getNextImage();
    } ,[]);


    const getNextImage = () => {
        userID=User.ID;
        let istr=imageIndex.toString();
        if (istr.length==1) istr="0"+istr;
        let prevUrl=currentUrl;
        currentUrl = "./images/car"+istr+".jpg";
        canvasRef.current.loadImage(currentUrl);
        ++imageIndex;
      
       // report(prevUrl);
    }

    const report = (oldUrl) => {
        let oldIndex=oldUrl.replaceAll('./images/', '');
        let url = "./ReportTrain.aph";
        let data={ 
            User: userID,
            Index: oldIndex,
            X: x,
            Y: y,
            Width: width,
            Height: height
        };
        global.ajax.submitTrain(data);
       // Ajax.post(url,JSON.stringify(data),reportReply);     
    }

    const reportReply = (reply) => {
        let replyOb = JSON.parse(reply);
    }


      const callback = (xx,xy,xwidth,xheight) => {
        x=xx;
        y=xy;
        width=xwidth;
        height=xheight;
      }

    return (
        <div ref ={divRef} >
            <p></p>
         <Box textAlign='center'>
          <Canvas ref={canvasRef} callback={callback} />
          <p></p>
    Move the sqare around the car with as tightly as possible, then press 'Submit Image'
          <p></p>

          <Button variant="contained" color="primary" onClick={() => {getNextImage()}}>   Submit Image</Button>
          ....
          <Button variant="contained" color="primary" onClick={() => {global.pages.push("Dashboard")}}>  Finished</Button>
          <Amount/>
          </Box>
      </div>

    )
});

export default Train