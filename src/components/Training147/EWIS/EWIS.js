import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './EWIS.module.css'





export default function EWIS() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "1. INTRODUCTION", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1.1. Overview", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1.2. Accidents regarding EWIS", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "2. MODULE A - GENERAL ELECTRICAL WIRING INTERCONNECTION SYSTEM PRACTICES", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "2.1. Safety practices", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "2.2. ESDS device handling and protection", url: "" },
    { name: "2.3. Tools, special tools and equipment", url: "" },
    { name: "2.4. Verify calibration certification of instruments, tools, and equipment", url: "" },
    { name: "2.5. Required wiring checks using the Troubleshooting Procedures and charts", url: "" },
    { name: "2.6. Measurement and troubleshooting using meters", url: "" },
    { name: "2.7. LRU replacement general practices", url: "" },
    { name: "3. MODULE B - WIRING PRACTICES DOCUMENTATION", url: "" },
    { name: "3.1. Boeing Manuals (SWPM)", url: "" },
    { name: "3.2. Airbus Manuals (ESPM)", url: "" },
    { name: "3.3. Wiring Diagram Manuals", url: "" },
    { name: "3.4. Other documentation", url: "" },
    { name: "4. MODULE C - INSPECTION", url: "" },
    { name: "4.1. Special inspections", url: "" },
    { name: "4.2. Criteria and standards", url: "" },
    { name: "4.3. Human factors and inspection", url: "" },
    { name: "4.4. Zonal areas of inspection", url: "" },
    { name: "4.5. Wiring system damage", url: "" },
    { name: "5. MODULE D - HOUSEKEEPING", url: "" },
    { name: "5.1. Aeroplane external contamination sources", url: "" },
    { name: "5.2. Aeroplane internal contamination sources", url: "" },
    { name: "5.3. Other contamination sources", url: "" },
    { name: "5.4. Contamination protection planning", url: "" },
    { name: "5.5. Protection during aeroplane maintenance and repair", url: "" },
    { name: "5.6. Cleaning processes", url: "" },
    { name: "6. MODULE E - WIRE", url: "" },
    { name: "6.1. Identification, type and construction", url: "" },
    { name: "6.2. Insulation qualities", url: "" },
    { name: "6.3. Inspection criteria and standards of wire", url: "" },
    { name: "6.4. Wire bundle installation practices", url: "" },
    { name: "6.5. Typical damage and areas found", url: "" },
    { name: "6.6. Maintenance and repair procedures", url: "" },
    { name: "6.7. Sleeving", url: "" },
    { name: "6.8. Unused wires - termination storage", url: "" },
    { name: "6.9. Electrical bonding and grounds", url: "" },
    { name: "7. MODULE F - CONNECTIVE DEVICES", url: "" },
    { name: "7.1. General types and identification", url: "" },
    { name: "7.2. Cautions and protections", url: "" },
    { name: "7.3. Visual inspection procedures", url: "" },
    { name: "7.4. Typical damage found", url: "" },
    { name: "7.5. Repair procedures", url: "" },
    { name: "8. MODULE G - CONNECTIVE DEVICE REPAIR", url: "" },
    { name: "8.1. Circular connector", url: "" },
    { name: "8.2. Rectangular connectors", url: "" },
    { name: "8.3. Terminal blocks - modular", url: "" },
    { name: "8.4. Terminal blocks - non-modular", url: "" },
    { name: "8.5. Ground modules", url: "" },
    { name: "8.6. Pressure seals", url: "" },
    
    
    
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