import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './PartM.module.css'





export default function PartM() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "0. General", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "0.1. Acronyms", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1. Introduction", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "1.1. Airworthiness Regulation", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "1.2. Aircraft Classification", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "2. Part M Revision", url: "" },
    { name: "2.1. Airworthiness regulation and applicability", url: "" },
    { name: "2.2. Part-M vs Part-CAMO", url: "" },
    { name: "2.3. PART-M CAME vs PART-CAMO CAME", url: "" },
    { name: "2.4. AltMoC and SMS", url: "" },
    { name: "3. Part-CA(M)O Transition", url: "" },
    { name: "3.1. Steps of Transition to PART-CA(M)O", url: "" },
    { name: "4. Conclusion", url: "" },
    
    
    
   
       
    
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