import { Box } from '@mui/material'
import React, { useState } from 'react'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState('')
   
    return (
    <Box sx={{backgroundColor:"#e5b8f4",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <h1 style={{fontSize:"250%"}}>Chat App <MarkUnreadChatAltIcon sx={{fontSize:"130%"}}/></h1>
        <input type="text" name="" id="name" placeholder='Username'
            style={{
                width:"20%",
                height:"7%",
                fontSize:"large",
                backgroundColor:"#e5b8f4",
                border:"2px solid #7d4c95",
                borderRadius:"15px",
                color:"#7c409b",
                padding:"0.5%"
            }}
            onChange={(e)=>{setUsername(e.target.value)}}
        />
        <Link to="/chat">
            <Button variant="contained" onClick={()=>{
                sessionStorage.setItem("username",username)
            }} sx={{backgroundColor:"#7a389c",
                margin:"10%",
                ":hover":{backgroundColor:"#a568c4"}
            }}>Enter</Button>
        </Link>
    </Box>
  )
}

export default Home