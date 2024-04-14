import React from 'react';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';
import { ModalClose } from '@mui/joy';

const VideoModal = ({ open, onClose, url }) => {
    console.log(open);
    console.log(url);
    
    const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
    return (
    <Modal
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
      open={open}
      onClose={onClose}
      onClick={handleClose}
      
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}

    >
      <div >
              <ReactPlayer  url={url} controls width="1000px" height="600px" />
      </div>
      
    </Modal>
  );
};

export default VideoModal;