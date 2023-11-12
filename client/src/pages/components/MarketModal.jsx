// MarketModal.js

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import ChatIcon from '@mui/icons-material/Chat'; // Import the Chat icon

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px', // Rounded corners
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'space-between', // Center content vertically with space between
};

const MarketModal = ({ open, handleClose, name, description, image, expiray_date, amount, free }) => {
  const setToTrade = () => {
    // You can add functionality for the "Set to Trade" button if needed
  };

  const handleChat = () => {
    // Handle the chat functionality when the chat button is clicked
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <img src={image} alt={name} style={{ maxWidth: '80%', maxHeight: '60%', marginTop: '10px', borderRadius: '8px' }} />
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {`Expire Day:${expiray_date}`}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Button disabled style={{ width: '100px' }} variant="contained" color="primary">
            {`Quantity: ${amount}`}
          </Button>
          <Button
            onClick={handleChat}
            style={{ width: '100px', borderRadius: '8px', backgroundColor: '#2196F3', color: 'white' }}
            variant="contained"
          >
            <ChatIcon style={{ marginRight: '5px' }} />
            Chat
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default MarketModal;
