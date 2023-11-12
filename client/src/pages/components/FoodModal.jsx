import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center' // Center content vertically
};

const FoodModal = ({ open, handleClose, name, description, image, expiray_date, amount, setAmount  }) => {
    const handleIncrease = () => setAmount(amount + 1);
    const handleDecrease = () => amount > 0 && setAmount(amount - 1);

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
            <img src={image} alt={name} style={{ maxWidth: '80%',maxHeight: '60%', marginTop: '10px' }} />
            <Typography id="modal-description" sx={{ mt: 2 }}>
            {description}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
            {`Expire Day:${expiray_date}`}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Button onClick={handleDecrease} sx={{ width: '100px' }} >-</Button>
                <Typography>{amount}</Typography>
                <Button onClick={handleIncrease} sx={{ width: '100px' }} >+</Button>
            </div>
        </Box>
        </Modal>
    );
};

export default FoodModal;
