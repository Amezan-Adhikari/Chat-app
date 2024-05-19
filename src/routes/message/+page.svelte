<script>
  //@ts-nocheck
    import { onMount } from 'svelte';
    import { userData } from "../store";
    import { io } from 'socket.io-client';
    import Chat from '$lib/pages/components/Chat.svelte';
  
    let socket;
    let allMessages=[];
    onMount(() => {
      console.log('Attempting to connect to Socket.IO server...');
      socket = io('https://chat-app-backend-1tlp.onrender.com');
  
      socket.on('connect', () => {
        console.log('Connected to server');
      });
  
      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });
  
      socket.on('error', (error) => {
        console.error(' error:', error);
      });

      socket.on('incommingMessage',(msg)=>{
        let data = {
          message:msg.message,
          user:msg.user,
          type:"incomming"
        }
        allMessages = [...allMessages,data];
      })
    });

    function emmitMessage(message){
        let data = {
          message:message,
          user:$userData,
          type:"outgoing"
        }
        socket.emit('message',data);
        allMessages = [...allMessages,data];
      }
      
    const updateMessage=(e)=>{
           emmitMessage(e.detail.message);
           console.log(allMessages);
          }
  </script>
<div>
   <Chat on:inputData={updateMessage} {allMessages}/>
</div>