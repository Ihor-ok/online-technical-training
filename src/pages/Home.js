// import * as React from 'react';
import Typography from '@mui/joy/Typography';
// import Card from '@mui/joy/Card';
// import Stack from '@mui/joy/Stack';
// import Grid from '@mui/joy/Grid';
import backgroundImage1 from '../img/backgroundImageApp.jpg';
import imgMaintenance from '../img/maintenance.jpg'
// import { CardActionArea } from '@mui/material';
// import { motion } from 'framer-motion';



// export default function Home() {


//     return (
        // <div style={{
        //     backgroundImage: `url(${backgroundImage1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: "1px"
        // }}>
            // {/* <Typography level="h1">Training for aircraft maintenance personnel</Typography> */}
            // <Typography
            //     level="h1"
            //     sx={{
            //         textAlign: 'center', // вирівнюємо текст по центру
            //         fontSize: '2.5rem', // збільшуємо розмір шрифту
            //         fontWeight: 'bold', // робимо шрифт жирним
            //         marginTop: '50px', // додаємо верхній відступ для центрування по вертикалі
            //         marginBottom: '30px', // додаємо нижній відступ
            //         color: '#fff', // кольор тексту
            //         // Якщо ви використовуєте Material-UI, ви також можете використовувати theme для задання стилів
            //     }}
            // >
            //     Training for aircraft maintenance personnel basic principles
            // </Typography>

            
//             <Stack
//                 spacing={2}
//                 sx={{
//                     maxWidth: '1100px', margin: '0 auto', padding: '0 20px',
//                 }}
//             >
//                 <Grid
//                     container
//                     rowSpacing={2} // Відступ між рядками
//                     columnSpacing={{ xs: 2, sm: 2, md: 2 }} // Відступ між колонками на різних розмірах екрану 
//                     sx={{ width: '100%' }} // Загальні властивості стилізації
//                     xs={12}
//                     md={12}
//                 >
//                     <Grid xs={12} sm={6} md={6}  >
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1}} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
                            
//                         >
//                             <CardActionArea>
//                                 <Card sx={{ width: "500px", height: '200px' }}>
//                                     <Typography level="title-lg">
//                                         Effective maintenance{' '}
//                                     </Typography>
//                                     <Typography level="body-md">
//                                         Effective maintenance of aviation equipment is crucial for ensuring the safety and
//                                         reliability of air travel. The significance of adequately trained personnel cannot
//                                         be overstated in this regard. Here, we delve into the importance of preparing personnel
//                                         for performing maintenance tasks on aircraft and helicopters.{' '}
//                                     </Typography>
//                                 </Card>

//                             </CardActionArea>                    
//                         </motion.div>
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                 <Card sx={{ width: "500px", height: '200px' }}>
//                                     <Typography level="title-lg">
//                                     Safety{' '}
//                                     </Typography>
//                                     <Typography level="body-md">
//                                         Safety: Safety is paramount in aviation. Properly trained personnel are equipped with the
//                                         knowledge and skills to identify and rectify potential safety hazards during maintenance
//                                         procedures. By adhering to rigorous training standards, technicians can minimize the risk
//                                         of accidents and ensure the airworthiness of aircraft and helicopters.{' '}
//                                     </Typography>
//                                 </Card>
//                             </CardActionArea>
//                         </motion.div>
                        
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                 <Card sx={{ width: "500px", height: '200px' }}>
//                                     <Typography level="title-lg">
//                                         Reliability{' '}
//                                     </Typography>
//                                     <Typography level="body-md">
                                        // Reliability: Regular maintenance is essential for maintaining the reliability of aviation
                                        // equipment. Trained personnel are proficient in conducting routine inspections, troubleshooting
                                        // issues, and performing necessary repairs promptly. Their expertise contributes to minimizing
                                        // downtime and maximizing the operational efficiency of aircraft and helicopters.{' '}
//                                     </Typography>
//                                 </Card>
//                             </CardActionArea>
//                         </motion.div>
                        
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                  <Card sx={{ width: "500px", height: '200px' }}>
//                                     <Typography level="title-lg">
//                                         Compliance{' '}
//                                     </Typography>
//                                     <Typography level="body-md">
                                        // Compliance: Aviation maintenance is governed by strict regulatory standards to ensure compliance
                                        // with industry requirements. Personnel training programs incorporate comprehensive instruction on
                                        // relevant regulations, guidelines, and procedures. Compliance with these standards not only upholds
                                        // safety and reliability but also mitigates the risk of regulatory penalties and sanctions.{' '}
//                                     </Typography>
//                                 </Card>
//                             </CardActionArea>
//                         </motion.div>
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                          <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                         <Card sx={{ width: "500px", height: '200px' }}>
//                                     <Typography level="title-lg">
//                                         Skill Enhancement{' '}
//                                     </Typography>
//                                     <Typography level="body-md">
                                        // Skill Enhancement: Continuous training programs enable personnel to enhance their skills and stay
                                        // abreast of advancements in aviation technology. As aircraft and helicopter systems evolve, technicians
                                        // must adapt to new methodologies, tools, and technologies. Ongoing education ensures that personnel
                                        // remain competent and proficient in their roles, capable of addressing emerging challenges effectively.{' '}
//                                     </Typography>
//                                 </Card>
//                             </CardActionArea>
//                         </motion.div>
                        
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                     <Card sx={{ width: "500px", height: '200px' }}>
//                                         <Typography level="title-lg">
//                                             Emergency Preparedness{' '}
//                                         </Typography>
//                                         <Typography level="body-md">
                                            // Emergency Preparedness: In critical situations, such as in-flight emergencies or unexpected malfunctions,
                                            // well-trained personnel are better equipped to respond promptly and effectively. Training programs include
                                            // simulated scenarios and emergency drills to prepare technicians for handling high-pressure situations with
                                            // composure and competence. This preparedness is instrumental in safeguarding passengers, crew, and assets in
                                            // the event of unforeseen circumstances.{' '}
//                                         </Typography>
//                                      </Card>
//                             </CardActionArea>
//                         </motion.div>
                        
//                     </Grid>
//                     <Grid xs={12} sm={6} md={6}>
//                         <motion.div
//                             initial={{ opacity: 0, scale: 0.1 }} // Початкові стилі анімації
//                             animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
//                             transition={{ duration: 0.5 }} // Тривалість анімації
//                         >
//                             <CardActionArea>
//                                     <Card sx={{ width: "500px", height: '200px' }}>
//                                         <Typography level="title-lg">
//                                             Career Development{' '}
//                                         </Typography>
//                                         <Typography level="body-md">
                                            // Career Development: Investing in personnel training demonstrates a commitment to employee development and career
                                            // advancement. Qualified technicians are more likely to feel valued and motivated, leading to higher job
                                            // satisfaction and retention rates. Additionally, comprehensive training programs provide opportunities for
                                            // professional growth and specialization within the aviation maintenance field.{' '}
//                                         </Typography>
//                                  </Card>
//                             </CardActionArea>
//                         </motion.div>
                        
//                     </Grid>
            
                    
//                 </Grid>

//             </Stack>

//         </div>
      
//     );
      
// }

import { motion } from 'framer-motion';

const Card = ({ title, description }) => {
  return (
    
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 2 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 400,
        height: 200,
        padding: 20,
        margin: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

const Home = () => {
  const cards = [
    { title: 'Effective maintenance', description: 'Effective maintenance of aviation equipment is crucial for ensuring the safety and reliability of air travel. The significance of adequately trained personnel cannot be overstated in this regard. Here, we delve into the importance of preparing personnel for performing maintenance tasks on aircraft and helicopters.' },
    { title: 'Safety', description: 'Safety: Safety is paramount in aviation. Properly trained personnel are equipped with the knowledge and skills to identify and rectify potential safety hazards during maintenance procedures. By adhering to rigorous training standards, technicians can minimize the risk of accidents and ensure the airworthiness of aircraft and helicopters.' },
    { title: 'Reliability', description: 'Reliability: Regular maintenance is essential for maintaining the reliability of aviation equipment. Trained personnel are proficient in conducting routine inspections, troubleshooting issues, and performing necessary repairs promptly. Their expertise contributes to minimizing downtime and maximizing the operational efficiency of aircraft and helicopters.' },
    { title: 'Compliance', description: 'Compliance: Aviation maintenance is governed by strict regulatory standards to ensure compliance with industry requirements. Personnel training programs incorporate comprehensive instruction on relevant regulations, guidelines, and procedures. Compliance with these standards not only upholds safety and reliability but also mitigates the risk of regulatory penalties and sanctions.' },
    { title: 'Skill Enhancement', description: ' Skill Enhancement: Continuous training programs enable personnel to enhance their skills and stay abreast of advancements in aviation technology. As aircraft and helicopter systems evolve, technicians must adapt to new methodologies, tools, and technologies. Ongoing education ensures that personnel remain competent and proficient in their roles, capable of addressing emerging challenges effectively.' },
    { title: 'Emergency Preparedness', description: 'Emergency Preparedness: In critical situations, such as in-flight emergencies or unexpected malfunctions, well-trained personnel are better equipped to respond promptly and effectively. Training programs include simulated scenarios and emergency drills to prepare technicians for handling high-pressure situations with composure and competence. This preparedness is instrumental in safeguarding passengers, crew, and assets in the event of unforeseen circumstances.' },
    { title: 'Career Development', description: 'Career Development: Investing in personnel training demonstrates a commitment to employee development and career advancement. Qualified technicians are more likely to feel valued and motivated, leading to higher job satisfaction and retention rates. Additionally, comprehensive training programs provide opportunities for professional growth and specialization within the aviation maintenance field.' },
    
  ];

  return (
      <div style={{
          display: 'flex',
          justifyContent: 'center',
        //   alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: "1px",
      }}>
          <div style={{padding: "20px"}}>
              <Typography
                level="h1"
                sx={{
                    textAlign: 'center',
                    fontSize: '2.5rem', // збільшуємо розмір шрифту
                    fontWeight: 'bold', // робимо шрифт жирним
                    marginTop: '50px', // додаємо верхній відступ для центрування по вертикалі
                    marginBottom: '30px',
                    marginLeft: '30px',// додаємо нижній відступ
                    color: '#fff', // кольор тексту
                    // Якщо ви використовуєте Material-UI, ви також можете використовувати theme для задання стилів
                }}
            >
                Training for aircraft maintenance personnel basic principles
          </Typography>
          <img src={imgMaintenance} width={"500px"}  alt='maintenance'></img>
          </div>
          
          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;