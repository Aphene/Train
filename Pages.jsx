import React, { useRef, useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gallery from './Gallery'
import Train from './Train'
import Register from './Register'
import Dashboard from './Dashboard'
import Splash from './Splash'
import SignIn from './SignIn'
import Payment from './Payment'
import FundsSent from './FundsSent'
import Drop from './Drop'
import CreateJob from "./CreateJob"
import Upload from "./Upload"
import PublishJob from "./PublishJob"
import EditJob from "./EditJob"
import PayEscrow from "./PayEscrow"
import ResultsDashboard from "./ResultsDashboard"
import TaskResultsPerJob from "./TaskResultsPerJob"



let timer =null;

const Pages = props => {

    const [page,setPage] = useState("Splash");


    useEffect(() => {
        if (timer===null) {
                timer = setInterval(() => {
                if (global.pages.length>0) {
                    setPage(global.pages.shift());
                }
        
            }, 200);
        }
    }, [page]);







    if (page=="Register") return <Register/>
    if (page=="Splash") return <Splash/>
    if (page=="SignIn") return <SignIn/>
    if (page=="Dashboard") return <Dashboard/>
    if (page=="Gallery") return <Gallery/>
    if (page=="Train")  return <Train/>
    if (page=="Payment")  return <Payment/>
    if (page=="FundsSent")  return <FundsSent/>
    if (page=="Drop") return <Drop/>
    if (page=="CreateJob") return <CreateJob/>
    if (page=="Upload") return <Upload/>
    if (page=="PublishJob") return <PublishJob/>
    if (page=="EditJob") return <EditJob/>
    if (page=="PayEscrow") return <PayEscrow/>
    if (page=='ResultsDashboard') return <ResultsDashboard/>
    if (page=='TaskResultsPerJob') return <TaskResultsPerJob/>
  



}

export default Pages