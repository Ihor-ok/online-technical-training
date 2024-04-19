import Card147Training from "components/CoursesCards/Card147Training";
import CardAviationLegislation from "components/CoursesCards/CardAviationLegislation";
import CardMaintenancePrograms from "components/CoursesCards/CardMaintenancePrograms";
import CardMilitaryAviation from "components/CoursesCards/CardMilitaryAviation";
import CardElectricalWiring from "components/CoursesCards/CardElectricalWiring";
import CardBatteryMaintenance from "components/CoursesCards/CardBatteryMaintenance";
import CardQrosscheck from "components/CoursesCards/CardQrosscheck";
import { motion } from "framer-motion";
import backgroundImage2 from '../img/backgroundImageCourses.jpg';


export default function Courses() {
  return (
        <div style={{
      display: 'flex',
      flexWrap: 'wrap', justifyContent: 'center', backgroundImage: `url(${backgroundImage2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
      }}>
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
          <Card147Training />
        </motion.div>
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
          <CardMaintenancePrograms />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
          <CardMilitaryAviation />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
        <CardAviationLegislation />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
          <CardElectricalWiring />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
          <CardBatteryMaintenance />
      </motion.div>   
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Початкові стилі анімації
      animate={{ opacity: 1, scale: 1 }} // Стилі під час анімації
      transition={{ duration: 0.5 }} // Тривалість анімації
      >
        <CardQrosscheck />
      </motion.div>
        
        </div>
    // <motion.div
      // style={{
      // display: 'flex',
      //   flexWrap: 'wrap', justifyContent: 'center'
      // }}
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{
    //     duration: 0.8,
    //     delay: 0.5,
    //     ease: [0, 0.71, 0.2, 1.01]
    //   }}
    // >

        
     
    // </motion.div>
 )
}