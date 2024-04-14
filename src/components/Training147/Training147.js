import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';



export default function Training148() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  

  const handleVideoClick = (url) => {
    setVideoUrl(url);
    setOpen(true);
    console.log(url);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setVideoUrl(null);
  };
  
  console.log(videoUrl);

  return (
    <div>
      <ul>
        <li onClick={() => handleVideoClick('https://www.youtube.com/watch?v=mtyEWfiOUoQ')}>Introduction to the U.S. Export Compliance for Non-U.S. Civil Aerospace Companies</li>
        <li>EASA Part-66 Regulatory Training</li>
        <li>EWIS (for target group 1-2)</li>
        <li>Fuel tank safety (phase 1+2)</li>
        <li>Human factors (based on part 66 - module 9)</li>
        <li>Human Factors (in accordance with Part-145)</li>
        <li>Safety Management System (SMS) Foundation Training	</li>
        <li>Transition from Part-M Subpart G to Part-CA(M)O</li>
      </ul>
      {open && <VideoModal  open={open} url={videoUrl} onClose={handleCloseModal}></VideoModal>}
        {/* {showModal && <Modal handleClose={handleCloseModal} url={videoUrl} />} */}
    </div>
  );
}