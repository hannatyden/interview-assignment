import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({theme}) => ({
  display: 'block',
  width: 600,
  height: 500,
  margin: 20,
}));

function CardListItem({post, onClick}) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="80%"
        alt={post.data.media[0].description}
        src={post.data.media[0].image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {<span>by: {post.data.media[0].description}</span>}
        </Typography>
        <Button variant="outlined" onClick={onClick}>Open post</Button>
      </CardContent>
    </StyledCard>
  );
}

export default CardListItem;
