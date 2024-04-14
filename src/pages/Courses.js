import Card147Training from "components/CoursesCards/Card147Training";
import CardAviationLegislation from "components/CoursesCards/CardAviationLegislation";
import CardMaintenancePrograms from "components/CoursesCards/CardMaintenancePrograms";
import CardMilitaryAviation from "components/CoursesCards/CardMilitaryAviation";
import CardElectricalWiring from "components/CoursesCards/CardElectricalWiring";
import CardBatteryMaintenance from "components/CoursesCards/CardBatteryMaintenance";
import CardQrosscheck from "components/CoursesCards/CardQrosscheck";
import { motion } from "framer-motion";


export default function Courses() {
  return (
  
    <motion.div
      style={{
      display: 'flex',
        flexWrap: 'wrap', justifyContent: 'center'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >

        <Card147Training />

        <CardMaintenancePrograms />

         <CardMilitaryAviation />

        <CardAviationLegislation />

        <CardElectricalWiring />

         <CardBatteryMaintenance />

        <CardQrosscheck />
     
    </motion.div>
 )
}