import React from 'react'
import Header from './Header'
import Title from '../shared/Title';
import { Grid2 as Grid } from '@mui/material';
import ChatList from '../specific/ChatList';
import Profile from '../specific/Profile';
import { sampleChats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';



const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        const params = useParams();
        const chatId = params.chatId;


        const handleDeleteChat = (e,_id, groupChat) => {
            e.preventDefault();
            console.log("Delete Chat", _id, groupChat);
        }
        return (
            <>
                <Title />
                <Header />

                <Grid container height={"calc(100vh - 4rem)"} >

                    <Grid item
                        sm={4} 
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }} height={"100%"} width={"30%"} 
                        
                        >
                    
                        <ChatList chats ={sampleChats} chatId={chatId}

                        handleDeleteChat={handleDeleteChat}

                        // newMessagesAlert = {[
                        //     {
                        //          chatId: "",
                        //         count: 0,
                        //     },
                        // ]}
                        
                        
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}  width={"40%"}  >
                        <WrappedComponent {...props} />
                    </Grid>


                    <Grid item md={4} lg={3} height={"100%"} width={"30%"}
                        sx={{
                            display: { xs: "none" , md: "block"},
                            padding: "2rem",
                            bgcolor: "rgba(0,0,0,0.85)"
                        }}
                    >
                        <Profile/>

                    </Grid>
                </Grid>

            </>
        );
    };
};

export default AppLayout