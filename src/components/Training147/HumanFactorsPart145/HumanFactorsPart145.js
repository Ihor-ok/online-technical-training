import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './HumanFactorsPart145.module.css'
import { Typography } from '@mui/material';





export default function HumanFactorsPart145() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "0. General", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1. Introduction", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1.1. General", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "1.2. The need to take Human factors into account", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "1.3. Incidents attributable to Human Factors", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "1.4. What are Human Factors", url: "" },
    { name: "1.5. Human Factors model - Shell", url: "" },
    { name: "1.6. Murphys Law", url: "" },
    { name: "2. Safety Culture  Organisational factors", url: "" },
    { name: "3. Human Error", url: "" },
    { name: "3.1. Error models and theories", url: "" },
    { name: "3.2. Types of errors in maintenance tasks", url: "" },
    { name: "3.3. Violations", url: "" },
    { name: "3.4. Implications of errors", url: "" },
    { name: "3.5. Avoiding and managing errors", url: "" },
    { name: "3.6. Human reliability", url: "" },
    { name: "4. Human performance & limitations", url: "" },
    { name: "4.1. Vision", url: "" },
    { name: "4.2. Hearing", url: "" },
    { name: "4.3. Information-processing", url: "" },
    { name: "4.4. Attention and perception", url: "" },
    { name: "4.5. Situational awareness", url: "" },
    { name: "4.6. Memory", url: "" },
    { name: "4.7. Claustrophobia and physical access", url: "" },
    { name: "4.8. Motivation", url: "" },
    { name: "4.9. Fitness_Health", url: "" },
    { name: "4.10. Stress", url: "" },
    { name: "4.11. Workload management", url: "" },
    { name: "4.12. Fatigue", url: "" },
    { name: "4.13. Alcohol, medication, drugs", url: "" },
    { name: "4.14. Physical work", url: "" },
    { name: "4.15. Repetitive tasks  complacency", url: "" },
    { name: "5. Environment", url: "" },
    { name: "5.1. Peer pressure", url: "" },
    { name: "5.2. Stressors", url: "" },
    { name: "5.3. Time pressure and deadlines", url: "" },
    { name: "5.4. Workload", url: "" },
    { name: "5.5. Shift Work", url: "" },
    { name: "5.6. Noise and fumes", url: "" },
    { name: "5.7. Illumination", url: "" },
    { name: "5.8. Climate and temperature", url: "" },
    { name: "5.9. Motion and vibration", url: "" },
    { name: "5.10. Complex systems", url: "" },
    { name: "5.11. Hazards in the workplace", url: "" },
    { name: "5.12. Lack of manpower", url: "" },
    { name: "5.13. Distractions and interruptions", url: "" },
    { name: "6. Procedures, information, tools and practices", url: "" },
    { name: "6.1. Visual Inspection", url: "" },
    { name: "6.2. Work logging and recording", url: "" },
    { name: "6.3. Procedure - practice  mismatch  norms", url: "" },
    { name: "6.4. Technical documentation - access and quality", url: "" },
    { name: "6.5. Critical maintenance tasks and error-capturing methods", url: "" },
    { name: "7. Communication", url: "" },
    { name: "7.1. Introdution", url: "" },
    { name: "7.2. Shift_Task Handover", url: "" },
    { name: "7.3. Dissemination of information", url: "" },
    { name: "7.4. Cultural differences", url: "" },
    { name: "8. Teamwork", url: "" },
    { name: "8.1. Responsibility", url: "" },
    { name: "8.2. Management, supervision and leadership", url: "" },
    { name: "8.3. Decision making", url: "" },
    { name: "9. Professionalism and integrity", url: "" },
    { name: "9.1. Keeping up to date; currency", url: "" },
    { name: "9.2. Error provoking behaviour", url: "" },
    { name: "9.3. Assertiveness", url: "" },
    { name: "10. Organisation's HF program", url: "" },
    { name: "10.1. Reporting errors", url: "" },
    { name: "10.2. Disciplinary policy", url: "" },
    { name: "10.3. Error investigation", url: "" },
    { name: "10.4. Action to address problems", url: "" },
    { name: "10.5. Feedback", url: "" },


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
        Human Factors (in accordance with Part-145)
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