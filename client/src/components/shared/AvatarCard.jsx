import { Avatar, AvatarGroup, Stack, Box } from '@mui/material';
import React from 'react';
import { transformImage } from '../../lib/features';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  // Ensure avatar is an array
  const avatarArray = Array.isArray(avatar) ? avatar : [];

  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"} sx={{ position: 'relative' }}>
          {avatarArray.length > 0 ? (
            avatarArray.map((i, index) => (
              <Avatar
                key={index} // Use index for keys
                src={transformImage(i)}
                alt={`Avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                  },
                }}
              />
            ))
          ) : (
            <Box>No Avatars Available</Box> // Fallback for empty array
          )}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
