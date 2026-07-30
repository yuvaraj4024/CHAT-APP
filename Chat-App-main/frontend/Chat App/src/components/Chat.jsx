import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React,{useState, useEffect, useRef} from 'react'
import io from 'socket.io-client'
import { Editor } from '@tinymce/tinymce-react';
import Info from "./Info"
import { Avatar } from '@mui/material';
import NoChat from './NoChat';
import { sendButtonStyle, editAreaStyle, meStyle, notMeStyle, chatAreaStyle, wrapperStyle, headingStyle} from '../assets/Styles.js'
import { editorConfig } from '../assets/EditorConfig';
import { stringAvatar } from '../assets/Styles.js';



const socket = io("http://localhost:5000")

function Chat() {
  
  const name=sessionStorage.getItem("username")
  const [chat, setChat] = useState([])
  
  useEffect(()=>{
    socket.on("chat", (payload)=>{
      console.log(payload.id,"pm");
      setChat([...chat,payload])
    })
  })
  
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(()=>{
    scrollToBottom()
  },[chat])


  
  

  const editorRef = useRef(null);
  const log = () => {
    // console.log(editorRef.current.getContent(),"content");
    
    if (editorRef.current.getContent()!=='') {
      // console.log(editorRef.current.getContent());
      // console.log(socket.id,"my id");
      socket.emit("chat", {state:1,message:editorRef.current.getContent(),username:name,id:socket.id}) //  not me
      setChat([...chat,{state:0,message:editorRef.current.getContent(),username:name,id:socket.id}]) // me
      editorRef.current.setContent('')
      
    }
  };



  

  
  return (
    <>
    <h1 style={headingStyle}>Welcome to the Chat, {name}</h1>
    <Box sx={wrapperStyle} id="wrapper">  
      <Box sx={chatAreaStyle} id="chatArea">
        {chat.length===0?<NoChat/>:chat.map((payload, index)=>{
          if(payload.state===1){
            return (
              <Box
              sx={{
                textAlign:"left",
                display:"flex",
                padding:"1%"
              }}
              >
                {/* {payload.username} */}
                <Avatar key={index} {...stringAvatar(payload.username)} />
                <Box key={index} style={notMeStyle}
                  dangerouslySetInnerHTML={{ __html:`<span id="notme"
                  >${payload.username}</span>`+payload.message}}
                >
              </Box>  
              </Box>
            )
          }else{
            return (
              <Box
                sx={{
                  textAlign:"right",
                }}
                key={index}
              >
                {/* {payload.username} */}
                {/* <Avatar {...selfStyle()} /> */}
                <Box component="div" key={index} sx={meStyle}
                dangerouslySetInnerHTML={{ __html:payload.message}}
                ></Box>
                
              </Box>
            )
          }
        })}
        <div ref={messagesEndRef} />
      </Box>
      
    </Box>
    <Box
      sx={editAreaStyle}
    >
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        apiKey='6pcvrelrqxmizvagl6rtwo61opamt7ap8ipl1didho3j6f4g'
        initialValue=""
        init={editorConfig}
      />

        <Button variant="contained" onClick={log}  endIcon={<SendIcon />}
          sx={sendButtonStyle}
        >
          Send
        </Button>
        <Info users={chat}/>
      
    </Box>
    </>
  )
}

export default Chat



