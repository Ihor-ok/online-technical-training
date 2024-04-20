import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './EASAPart66.module.css'





export default function EASAPart66() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "1. General", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1.1. Acronyms", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1.2. Definitions", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "2. Regulatory framework", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "2.1. Role of International Civil Aviation Organisation", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "2.2. Role of European Commission", url: "" },
    { name: "2.3. Role of EASA", url: "" },
    { name: "2.4. Role of Member States and National Aviation Authorities", url: "" },
    { name: "2.5. Regulation (EC) No 216_2008 and its implementing rules Regulations (EU) No 748_2012 and (EU) No 1321_2014", url: "" },
    { name: "2.6. Relationship between the various Annexes (Parts) such as Part-21, Part-M, Part-145, Part-66, Part-147 and Regulation (EU) 9652012", url: "" },
    { name: "3. Certifying Staff — Maintenance", url: "" },
    { name: "3.1. Concept of Certifying Staff", url: "" },
    { name: "3.2. Technical Requirements", url: "" },
    { name: "3.3. Appendix I to Part-66", url: "" },
    { name: "3.4. Appendix II to Part-66", url: "" },
    { name: "3.5. Mandatory maintenance experience", url: "" },
    { name: "3.6. Appendix VI to Part-66", url: "" },
    { name: "3.7. Endorsement with aircraft ratings", url: "" },
    { name: "3.8. Appendix III to Part-66", url: "" },
    { name: "3.9. Section B", url: "" },
   
    
    
    
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