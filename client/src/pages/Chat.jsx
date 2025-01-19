import React, { Fragment,useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { grayColor,orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { Stack, IconButton } from '@mui/material';
import { InputBox } from '../components/styles/StyledComponent';
import FileMenu from '../components/dialogs/FileMenu';
import MessageComponent from '../components/shared/MessageComponent';
import { sampleMessage } from '../constants/sampleData';














const user={ 
  _id:"sdfsdfsdf",
  name:"Chaman",
};
const Chat = () => {
  const containerRef=useRef(null);
  // const fileMenuRef=useRef(null);
  return (
  <Fragment>
    <Stack
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      bgcolor={grayColor}
      height={"90%"}
      sx={{
        overflowX:"hidden",
        overflowY:"auto",
      }}
    >
      { 
        sampleMessage.map((i)=>(
          <MessageComponent  key ={i._id} message={i} user={user}/>
        ))
      }
    </Stack>
    <form style={{
      height:"10%",
    }}>
      <Stack
       direction={"row"}
       height={"100%"}
       padding={"1rem"}
       alignItems={"center"}
       position={"relative"}>
        <IconButton sx={{
          position:"absolute",
          left:"1.5rem",
          rotate:"30deg",

        }}
        // ref={fileMenuRef}
        >

          <AttachFileIcon/>
        </IconButton>
      <InputBox placeholder="Type message here..."/>  
      <IconButton
       type="submit"
       sx={{
        rotate:"-30deg",
        bgcolor:orange,
        color:"white",
        marginLeft:"1rem",
        padding:"0.5rem",
        "&:hover":{
          bgcolor:"error.dark",
        }
       }}
      >
       < SendIcon/>
      </IconButton>
      </Stack>
    </form>
    <FileMenu />
  </Fragment>
);
};

export default AppLayout()(Chat);