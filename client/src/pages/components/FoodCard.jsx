import * as React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FoodCard({
  index,
  name,
  description,
  image,
}) {
  return (
    <motion.div whileHover={{ scale: 0.95 }}>
      <Card sx={{ maxWidth: 345 }}>
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
          <Button size="small">Free</Button>
          <Button size="small">Trade</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
