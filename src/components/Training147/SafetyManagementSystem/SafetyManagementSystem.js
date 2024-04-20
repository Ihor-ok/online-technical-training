import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './SafetyManagementSystem.module.css'





export default function SafetyManagementSystem() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "0. Safety Management System (SMS)", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1. Safety in Aviation, General", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "2. Case Study", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "3. Safety Management System", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "4. Evolution of Safety", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "5. Human Factors in Safety", url: "" },
    { name: "6. Accident Causation", url: "" },
    { name: "7. Safety policy and objectives", url: "" },
    { name: "8. Safety Risk Management", url: "" },
    { name: "9. Safety Assurance", url: "" },
    { name: "10. Safety Promotion", url: "" },
    { name: "11. Summary", url: "" },
    
    
    
   
       
    
]

  const handleVideoClick = (url) => {
    setVideoUrl(url);
    setOpen(true);
    console.log(url);
  };

  const handleCloseModal = () => {
    setVideoUrl(null);
    setOpen(false);
    
  };

 
  return (
      <div className={css.container}>

        <ul className={css.videoList}>
            {courses.map(course => {
                return (
                    <li className={css.videoItem} key={nanoid()}
                        onClick={() => handleVideoClick(course.url)}>
                        
                      <p>{course.name}</p>
                      <button className={css.buttonView}>View</button>
                     </li>
               
            ) }) }

        </ul>
        {open && <VideoModal  open={open} url={videoUrl} onClose={handleCloseModal}></VideoModal>}
    </div>
  );
}