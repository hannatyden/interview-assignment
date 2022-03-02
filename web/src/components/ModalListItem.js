import * as React from 'react';
import {Modal} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

const StyledModal = styled(Modal)(({theme}) => ({
  width: 500,
  margin: 10,
}));

const StyledCard = styled(Card)(({theme}) => ({
  display: 'block',
  width: 800,
  height: 600,
  margin: 20,
}));

function ModalListItem({post, open, onClose}) {
  return (
    <div>
      {post && (
        <StyledModal open={open} onClose={onClose}>
          <StyledCard>
            <CardMedia
              component="img"
              height="80%"
              alt={post.data.media[0].description}
              src={post.data.media[0].image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {<span>by: {post.data.media[0].description}</span>}
              </Typography>
            </CardContent>
          </StyledCard>
        </StyledModal>
      )}
    </div>
  );
}

export default ModalListItem;
