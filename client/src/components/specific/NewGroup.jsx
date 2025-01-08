import React from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';
import { useInputValidation } from '6pp';

const NewGroup = () => {

  const groupName = useInputValidation('');
  const selectMemberHandler = () => {};
  return (
    <Dialog open>
    <Stack p ={{xs:"1rem",sm:"2rem"}} width={"25rem"} spacing={"1rem"}>
      <DialogTitle textAlign={"center"} variant='h5'>New Group</DialogTitle>

      <TextField label= "Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
      <Typography variant='body1' >Members</Typography>

      <Stack>
      {
              sampleUsers.map((i) => (
      
                    <UserItem 
                     user={i}
                     key={i._id} 
                     handler={selectMemberHandler}
                     
                     />
      
      
                  ))}
      </Stack>

      <Stack direction ={"row"} justifyContent={"space-evenly"}>
        <Button variant='outlined' color='error' size="large  ">Cancle</Button>
        <Button variant='contained'>Create </Button>

      </Stack>

      
   

    </Stack>
  </Dialog>
  )
}

export default NewGroup