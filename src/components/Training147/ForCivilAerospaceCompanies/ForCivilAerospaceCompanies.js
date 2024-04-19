import VideoModal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './ForCivilAerospaceCompanies.module.css'





export default function ForCivilAerospaceCompanies() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

    const courses = [
    { name: "Start", url: "https://youtu.be/vQ_AVQAlUco" },
    { name: "PART 1. REGULATION IN MULTINATIONAL ENVIRONMENT. GENERAL OVERVIEW", url: "https://www.youtube.com/watch?v=mtyEWfiOUoQ" },
    { name: "PART 2. U.S. EXPORT CONTROL SYSTEM CONTROL LISTS AND ORDER OF REVIEW", url: "https://youtu.be/S_k36uoBR80?si=S4l41jCJzFxZ7t32" },
    { name: "PART 3. CLASSIFICATION OF ITEMS, COMMODITIES AND MATERIALS (WHAT)", url: "https://youtu.be/ntWTQ503vOA?si=GBZtZOnc6ChxqCMK" },
    { name: "PART 4. FINAL DESTINATION (WHERE)", url: "https://youtu.be/Mdpg0g0GkPU?si=Y4o0KFCtVMOZTDoZ" },
    { name: "PART 5. RECEIVER (WHO)", url: "" },
    { name: "PART 6. PURPOSE OF RE-EXPORT (WHAT FOR)", url: "" },
    { name: "PART 7. APPLICATION FOR EAR LICENCE AND SUPPORTING DOCUMENTS", url: "" },
    { name: "PART 8. EXPORT CONTROL LAW ENFORCEMENT AND EXPORT MANAGEMENT AND COMPLIANCE PROGRAM", url: "" },
    { name: "SUMMARY", url: "" },
    
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

        <ul >
            {courses.map(course => {
                return (
                    <li key={nanoid()}
                        onClick={() => handleVideoClick(course.url)}>
                        
                        <p>{course.name }</p> 
                     </li>
               
            ) }) }

        </ul>
        {open && <VideoModal  open={open} url={videoUrl} onClose={handleCloseModal}></VideoModal>}
    </div>
  );
}

    //   <Grid item xs={12} md={6}>
    //       <Typography style={{marginLeft: '15px'}} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
    //         148training
    //       </Typography>
    //         <List>
    //       <ListItem>
    //         <Link to="compliance-for-non-u-s-civil-aerospace-companies">
    //                 <ListItemIcon>
    //                 <FolderIcon />
    //               </ListItemIcon>
    //               Introduction to the U.S. Export Compliance for Non-U.S. Civil Aerospace Companies
    //         </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link to="easa-part-66">
    //                 <ListItemIcon>
    //                 <FolderIcon />
    //               </ListItemIcon>
    //               EASA Part-66 Regulatory Training
    //         </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link to="ewis">
    //                 <ListItemIcon>
    //                 <FolderIcon />
    //               </ListItemIcon>
    //               EWIS (for target group 1-2)
    //         </Link>  
    //       </ListItem>
    //       <ListItem>
    //         <Link to="fuel-tank">
    //                   <ListItemIcon>
    //                   <FolderIcon />
    //                 </ListItemIcon>
    //                 Fuel tank safety (phase 1+2)
    //         </Link>  
    //       </ListItem>
    //       <ListItem>
    //         <Link to="human-factors-part-66">
    //                   <ListItemIcon>
    //                   <FolderIcon />
    //                 </ListItemIcon>
    //                 Human factors (based on part 66 - module 9)
    //         </Link>  
    //       </ListItem>
    //       <ListItem>
    //         <Link to="human-factors-part-145">
    //                   <ListItemIcon>
    //                   <FolderIcon />
    //                 </ListItemIcon>
    //                 Human Factors (in accordance with Part-145)
    //         </Link>  
    //       </ListItem>
    //       <ListItem>
    //         <Link to="safety-management-system">
    //                   <ListItemIcon>
    //                   <FolderIcon />
    //                 </ListItemIcon>
    //                 Safety Management System (SMS) Foundation Training
    //           </Link>
    //       </ListItem>
    //       <ListItem>
    //         <Link to="part-m">
    //                   <ListItemIcon>
    //                   <FolderIcon />
    //                 </ListItemIcon>
    //                 Transition from Part-M Subpart G to Part-CA(M)O
    //           </Link>
    //           </ListItem>
    //               </List>
    //     </Grid>
    //   <ul className={css.list}>
    //     <li onClick={() => handleVideoClick('https://www.youtube.com/watch?v=mtyEWfiOUoQ')}>Introduction to the U.S. Export Compliance for Non-U.S. Civil Aerospace Companies</li>
    //     <li>EASA Part-66 Regulatory Training</li>
    //     <li>EWIS (for target group 1-2)</li>
    //     <li>Fuel tank safety (phase 1+2)</li>
    //     <li>Human factors (based on part 66 - module 9)</li>
    //     <li>Human Factors (in accordance with Part-145)</li>
    //     <li>Safety Management System (SMS) Foundation Training	</li>
    //     <li>Transition from Part-M Subpart G to Part-CA(M)O</li>
    //   </ul>
    //   {open && <VideoModal  open={open} url={videoUrl} onClose={handleCloseModal}></VideoModal>}