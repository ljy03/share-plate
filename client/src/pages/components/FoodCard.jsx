import * as React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FoodModal from './FoodModal';
import { useState } from 'react';

export default function FoodCard({
  index,
  name,
  description,
  image,
  expiray_date,
  inital_amount,
}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [amount, setAmount] = useState(inital_amount);
  const [Free, setStatus] = useState(false);

  return (
  <>
    <motion.div whileHover={{ scale: 0.95 }} onClick={handleOpen}>
      <Card sx={{ maxWidth: 345, position: 'relative' }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
        {Free === true ?(
          <Typography variant="body2" color="green" free={false}>
              Free
          </Typography>
        )
          :
        (
          <Typography variant="body2" color="orange" free={true}>
              Trade
          </Typography>
        )}
        </CardActions>
        

        <Typography
            sx={{ position: 'absolute', bottom: 5, right: 5, backgroundColor: 'white', padding: '5px' }}
        >
            {`Amount: ${amount}`}
        </Typography>

      </Card>
    </motion.div>

    <FoodModal
      open={open}
      handleClose={handleClose}
      name={name}
      description={description}
      image={image}
      expiray_date={expiray_date}
      amount={amount}
      setAmount={setAmount}
      setStatus = {setStatus}
      free = {Free}
    />
  </>
  );
}
