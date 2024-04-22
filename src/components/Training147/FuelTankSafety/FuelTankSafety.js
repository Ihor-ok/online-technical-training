import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './FuelTankSafety.module.css'
import { Typography } from '@mui/material';





export default function FuelTankSafety() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "0. General", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "1. Introduction", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "1.0. Content", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "1.1. Objectives of FTS training course", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "1.2. Personnel involved in FTS training", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "1.3. Documents forming the legal basis of this training", url: "" },
    { name: "2. PART I The theoretical background behind the risk of fuel tank safety, concepts to prevent explosions", url: "" },
    { name: "2.1. Flash point", url: "" },
    { name: "2.2. Auto-ignition Temperature", url: "" },
    { name: "2.3. Properties of different fuel types", url: "" },
    { name: "2.4. Fire triangle", url: "" },
    { name: "2.5. Two concepts to prevent explosion", url: "" },
    { name: "2.6. 3 primary phenomena that can result in ignition - electrical arcs and sparks, friction sparks, hot surface ignition or auto-ignition", url: "" },
    { name: "2.7. Fuel system electrostatics", url: "" },
    { name: "2.8. Flammability envelope", url: "" },
    { name: "2.9. Fuel Tank Flammability Exposure", url: "" },
    { name: "2.10. Stand Alone and Balanced Approaches for Fuel Tank Safety", url: "" },
    { name: "3. PART II The major accidents related to fuel tank systems", url: "" },
    { name: "3.1. Brief History of Accidents", url: "" },
    { name: "3.2. B747 TWA 800 Accident on July 17, 1996", url: "" },
    { name: "3.3. Bangalore Accident 2006", url: "" },
    { name: "4. PART III The requirements of SFAR 88 of the FAA and JAA Interim Policy INT POL 2512", url: "" },
    { name: "4.1. FAA SFAR 88", url: "" },
    { name: "4.2. JAA INT_POL 2512", url: "" },
    { name: "5. PART IV The results of SFAR 88 of the FAA and JAA INTPOL 25_12", url: "" },
    { name: "5.1. Results of SFAR-88 & INT_POL 25_12 design review", url: "" },
    { name: "5.2. Examples of modifications", url: "" },
    { name: "5.3. Fuel System Airworthiness limitations", url: "" },
    { name: "5.4. CDCCL", url: "" },
    { name: "5.5. Airworthiness Limitations Instructions (ALI for Boeing) or Maintenance_Inspection Tasks (for Airbus)", url: "" },
    { name: "6. PART V Flammability Reduction Means", url: "" },
    { name: "6.1. Options for US Designers", url: "" },
    { name: "6.2. Flow-Chart for European Designers", url: "" },
    { name: "6.3. Flammability Reduction", url: "" },
    { name: "6.4. Fuel tank pressurization", url: "" },
    { name: "6.5. Temperature control in fuel tank", url: "" },
    { name: "6.6. Limiting fuel properties", url: "" },
    { name: "6.7. On-Board Inert Gas Generation System (OBIGGS)", url: "" },
    { name: "6.8. Ignition Mitigation", url: "" },
    { name: "7. Part VI Airworthiness Limitations and CDCCL in the context of maintenance data", url: "" },
    { name: "7.1. Manufacturers Documents Showing AWL", url: "" },
    { name: "7.2. ALI_CDCCL examples from B737NG MPD", url: "" },
    { name: "7.3. Maintenance_inspection task examples from A318-321 ALS Part 5", url: "" },
    { name: "7.4. CDCCL examples from A318-321 ALS Part 5", url: "" },
    { name: "7.5. AWLs in Boeing AMM Procedures", url: "" },
    { name: "7.6. CDCCL in Boeing FIM Procedures", url: "" },
    { name: "7.7. Standard Wiring Practices Manual", url: "" },
    { name: "7.8. FAL (CDCCL) in Airbus AMM Procedures", url: "" },
    { name: "7.9. Service Bulletin", url: "" },
    { name: "7.10. Airworthiness Directive", url: "" },
    { name: "7.11. Supplemental Type Certificate", url: "" },
    { name: "7.12. STC Instructions for Continuimg Airworthiness", url: "" },
    { name: "8. PART VII CDCCL Controlling and Recording", url: "" },
    { name: "8.1. Requirements of Appendix B to “Guidance on EASA Fuel Tank Safety letter”", url: "" },
    { name: "8.2. CDCCL Parts Controlling", url: "" },
    { name: "9. PART VIII Fuel Tank Safety during maintenance", url: "" },
    { name: "9.1. Purging and Fuel Tank Entry Boeing-737NG AMM 28-11-00", url: "" },
    { name: "9.2. Hazardous Locations", url: "" },
    { name: "9.3. Explosion-Proof Equipment", url: "" },
    { name: "9.4. Safe Conditions and Safe Limits", url: "" },
    { name: "9.5. Purging or Purged", url: "" },
    { name: "9.6. Unwanted Sources of Ignition", url: "" },
    { name: "9.7. Purging and Fuel Tank Entry Precautions", url: "" },
    { name: "9.8. Purging and Fuel Tank Entry – Airplane Precautions", url: "" },
    { name: "9.9. Purging and Fuel Tank Entry – Electrical Equipment Precautions", url: "" },
    { name: "9.10. Purging and Fuel Tank Entry – Equipment Precautions", url: "" },
    { name: "9.11. Purging and Fuel Tank Entry – Personnel Precautions", url: "" },
    { name: "9.12. Fuel Tank Entry", url: "" },
    { name: "9.13. Fuel Tank Cleaning and Exit Procedures", url: "" },
    { name: "9.14. Fuel Tanl Closure", url: "" },
    { name: "9.15. Clean Working Environment", url: "" },
    { name: "9.16. Configuration Control", url: "" },
    { name: "10. PART IX Examples of defects and the associated repairs as required by the TC  STC holders maintenance data", url: "" },
    { name: "10.1. Examples of Boeing Service Bulletins related with defects and repairs", url: "" },
    { name: "10.2. Examples of Airbus Service Bulletins related with defects and repairs", url: "" },
    { name: "10.3. Boeing-737-800 fire in Naha Airport Okinawa, August 2007", url: "" },
    { name: "10.4. Wiring Installation Problems", url: "" },
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
    <div>
            <Typography style={{marginLeft: '15px', textAlign: 'center'}} sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
        Fuel tank safety (phase 1+2)
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