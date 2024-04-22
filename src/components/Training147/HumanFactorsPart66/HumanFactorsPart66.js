import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './HumanFactorsPart66.module.css'
import { Typography } from '@mui/material';





export default function HumanFactorsPart66() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "0. General", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1.1. Overview", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1.2. The need to take Human factors into account", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "1.3. Incidents attributable to Human Factors", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "1.4. What are Human Factors", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "1.5. Human Factors model – Shell", url: "" },
    { name: "1.6. Murphys law", url: "" },
    { name: "2. Human Performance and Limitations", url: "" },
    { name: "2.1. Vision", url: "" },
    { name: "2.2. Hearing", url: "" },
    { name: "2.3. Information proccesing", url: "" },
    { name: "2.4. Attention and perception", url: "" },
    { name: "2.5. Memory", url: "" },
    { name: "2.6. Situation awareness", url: "" },
    { name: "2.7. Claustrophobia, Physical Access and Fear of Heights", url: "" },
    { name: "3. Social Psychology", url: "" },
    { name: "3.1. Social enviroment", url: "" },
    { name: "3.2. Responsibility individual and group", url: "" },
    { name: "3.3. Motivation and de-motivation", url: "" },
    { name: "3.4. Peer pressure", url: "" },
    { name: "3.5. Culture issues", url: "" },
    { name: "3.6. Team working", url: "" },
    { name: "3.7. Management, supervision and leadership", url: "" },
    { name: "4. Factors affecting Performance", url: "" },
    { name: "4.1. Fitness_health", url: "" },
    { name: "4.2. Stress domestic and work related", url: "" },
    { name: "4.3. Time pressure and deadlines", url: "" },
    { name: "4.4. Workload overload and underload", url: "" },
    { name: "4.5. Sleep and fatigue, shiftwork", url: "" },
    { name: "4.6. Alcohol, medication, drug abuse", url: "" },
    { name: "5. Physical Environment", url: "" },
    { name: "5.1. Noise and fumes", url: "" },
    { name: "5.2. Illumination", url: "" },
    { name: "5.3. Motion and vibration", url: "" },
    { name: "5.4. Working environment", url: "" },
    { name: "6. Tasks", url: "" },
    { name: "6.1. Physical work", url: "" },
    { name: "6.2. Repetative tasks", url: "" },
    { name: "6.3. Visual inspection", url: "" },
    { name: "6.4. Complex systems", url: "" },
    { name: "7. Communication", url: "" },
    { name: "7.1. Communication within and between teams", url: "" },
    { name: "7.2. Work logging and recording", url: "" },
    { name: "7.3. Keeping up to date, currency", url: "" },
    { name: "7.4. Dissemination of information", url: "" },
    { name: "8. Human error", url: "" },
    { name: "8.1. Error models and theories", url: "" },
    { name: "8.2. Types of errors in maintenance tasks", url: "" },
    { name: "8.3. Implications of errors", url: "" },
    { name: "8.4. Avoiding and managing errors", url: "" },
    { name: "9. Hazards in the workplace", url: "" },
    { name: "9.1. Recognising and avoiding hazards", url: "" },
    { name: "9.2. Dealing with emergencies", url: "" },
   
       
    
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
    <div>
      <Typography style={{marginLeft: '15px', textAlign: 'center'}} sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
        Human factors (based on part 66 - module 9)
      </Typography>
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
    </div>
      
  );
}