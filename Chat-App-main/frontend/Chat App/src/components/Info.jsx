
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React,{ useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import {  stringAvatar } from '../assets/Styles';


export default function TemporaryDrawer(props) {
  const [arr, setArr] = useState(new Set())
  
  const [state, setState] = React.useState({
    right: false,
  });

  useEffect(()=>{
    
    if(props.users.length!==0){
      // arr.push(props.users[props.users.length-1].username)
      const name=props.users[props.users.length-1].username
      if(!arr.has(name) && name!==sessionStorage.getItem("username")){
        arr.add(name)
        setArr(arr)
      }
    }
    // console.log(arr,"arr");
    // arr.forEach((e)=>{console.log(e);})
  })
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  

  const handleLeave = () =>{
    arr.delete(sessionStorage.getItem("username"));
    setArr(arr)
    sessionStorage.clear();
    // console.log("pm");
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
          <ListItem>
            <ListItemText
              sx={{
                marginLeft:"2%",
                color:"#5a5a5a"
              }}
            >You</ListItemText>
          </ListItem>
          <ListItem >
            
          <Avatar {...stringAvatar(sessionStorage.getItem("username"))} />
          <ListItemText sx={{ marginLeft:"5%"}}primary={sessionStorage.getItem("username")} />
            
          </ListItem>
      
      </List>

      <Divider />
      <List>
      {
        Array.from(arr).length===0?<ListItem>
        <ListItemText
          sx={{
            marginLeft:"2%",
            color:"#5a5a5a"
          }}
        >No one's Here</ListItemText>
      </ListItem> 
        :<>
        <ListItem>
            <ListItemText
              sx={{
                marginLeft:"2%",
                color:"#5a5a5a"
              }}
            >Chat Members</ListItemText>
          </ListItem>
        {Array.from(arr).map((text, index) => {
          if(text!==sessionStorage.getItem("username"))
          return (
            <>
            
            <ListItem key={text}>
              
              <Avatar {...stringAvatar(text)} />  
              <ListItemText sx={{ marginLeft:"5%"}} primary={text} />
              
            </ListItem>
            </>
          )
        })}
      </>
      }
      </List>
      <Link to="/">
        <Button sx={{
          margin:"0 0 5% 7% ",
          backgroundColor:"#7a4195",
          ":hover":{backgroundColor:"#a568c4"},
        }} variant="contained"
          onClick={handleLeave}
        >
        
          Leave Chat
        </Button>
      </Link>
    </Box>
  );

  return (
    <>
      
        
          <Button 
          sx={{backgroundColor:"#7a389c",
            color:"white",
            padding:"1%",
            marginRight:"2%",
            height:"50%",
            ":hover":{backgroundColor:"#a568c4"}
          }}
          onClick={toggleDrawer('right', true)} variant='conatined' endIcon={<AccountCircleIcon/>}>{"Info"}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
           
          </Drawer>
        
      
    </>
  );
}
