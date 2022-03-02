import React from 'react';
import '../App.css';
import {Container, List} from '@mui/material';
import {styled} from '@mui/material/styles';
import ModalListItem from './ModalListItem';
import CardListItem from './CardListItem';

const StyledContainer = styled(Container)(({theme}) => ({
  //   height: 1000,
  //   width: 400,
  //   color: theme.palette.success.main,
  /* '& .MuiSlider-thumb': {
      '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
      },
    }, */
}));

const StyledList = styled(List)(({theme}) => ({
  /* display: 'flex',
  flexDirection: 'row',
  padding: 0,
  overflow: 'auto', */
}));

function Home({content}) {
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState(undefined);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer>
      {content !== null ? (
        <StyledList>
          {content.map((post) => (
            <CardListItem
              post={post}
              key={post.id}
              onClick={() => {
                setPost(post);
                handleOpen();
              }}
            />
          ))}
        </StyledList>
      ) : (
        'No content found'
      )}

      <ModalListItem post={post} open={open} onClose={handleClose} />
    </StyledContainer>
  );
}

export default Home;
