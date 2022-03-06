import React from 'react';
import '../App.css';
import {List} from '@mui/material';
import ModalListItem from './ModalListItem';
import CardListItem from './CardListItem';

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
    <div>
      {content !== null ? (
        <List>
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
        </List>
      ) : (
        'No content found'
      )}

      <ModalListItem post={post} open={open} onClose={handleClose} />
    </div>
  );
}

export default Home;
