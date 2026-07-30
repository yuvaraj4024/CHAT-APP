import express from "express";
import {createServer} from "http";
import { Server } from "socket.io";

const app=express();
const server = createServer(app);

const io = new Server(server,{
    cors: {
        origin: "*",
        
        credentials: true
      }
});

io.on("connection", (socket)=>{
    console.log(socket);
    console.log("socket is active to be connected");

    socket.on("chat", (payload)=>{
        console.log(socket.id);
        socket.broadcast.emit("chat", payload);      
    })

    

})

server.listen(5000, ()=>{
    console.log("Server listening on 5000");
})