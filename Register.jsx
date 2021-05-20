//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import Ajax from "./Ajax";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


const Register = forwardRef((props, ref) => {

const handleEmailChange= (e) => {
  global.email = e.target.value;
}

const handlePasswordChange= (e) => {
  global.password = e.target.value;
}

const handlePassword2Change= (e) => {
  global.password2 = e.target.value;
}

const submit= (e) => {
  global.ajax = new Ajax();
  global.ajax.get(global.server+"RequesterRegistration&Email="+global.email+"&Password="+global.password,registerReply);
}

const registerReply = (reply) => {
  if (reply.includes("Error:")) {
    alert(reply);
    return;
  }
  global.userID=reply;
  global.gotoPage("Dashboard");
}

    return (
      <div>
             <p></p> Register so you can take a break, if need be, then come back to where you left.
             <o></o>
              <label>
                
              <TextField
                  id="outlined-basic"
                  label="email"
                  name="email"
                  fullWidth
                  variant="outlined"
                  onChange={handleEmailChange}
                  required
                />
              </label>
              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="password"
                  name="password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  onChange={handlePasswordChange}
                  required
                />
              </label>

              <br />
              <label>
                <br />
                
                <TextField
                  id="outlined-secondary:cyan"
                  label="verify password"
                  name="password2"
                  type="password"
                  fullWidth
                  variant="outlined"
                  onChange={handlePassword2Change}
                  required
                />
              </label>

              <br />
              <br />

              <Button
          
                variant="contained"
                color="primary"
                fullWidth
                onClick={submit}
              >
                Register
              </Button>
              </div>


    )
});





export default Register