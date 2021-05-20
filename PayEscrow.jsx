import React, { useRef, useState, forwardRef, useImperativeHandle,makeStyles} from "react";
import Button from '@material-ui/core/Button';

const PayEscrow= forwardRef((props, ref) => {



return (
    <div>
     <p></p>
     <p></p>
    <h3>Current Escrow Wallet Amount: 0.0000 Dash</h3>
    <p></p>
    <h3>Your Dash Escrow wallet address is:</h3>
    <p></p>
    <h2> XexGuRftRurPfmnYwoKdi7XnwoRXjdbw4q</h2>  
    <p></p>
    Send 0.01 Dash or above to this address to get started.
    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Dashboard")}}> Update Available Funds Display </Button>
    <p></p>
    <p></p>
    <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Dashboard")}}> Return </Button>
    <p></p>
 
    

    </div>
)

});

export default PayEscrow