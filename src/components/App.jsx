import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";

import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";

import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "RestrictedRoute";
import { PrivateRoute } from "PrivateRoute";

import css from './App.module.css'
import Training148 from "./Training147/Training147";
import MaintenancePrograms from "./MaintenancePrograms/MaintenancePrograms";
import MilitaryAviation from "./MilitaryAviation/MilitaryAviation";
import AviationLegislation from "./AviationLegislation/AviationLegislation";
import ElectricalWiring from "./ElectricalWiring/ElectricalWiring";
import BatteryMaintenance from "./BatteryMaintenance/BatteryMaintenance";
import Qrosscheck from "./Qrosscheck/Qrosscheck";
import ForCivilAerospaceCompanies from "./Training147/ForCivilAerospaceCompanies/ForCivilAerospaceCompanies";
import EASAPart66 from "./Training147/EASAPart66/EASAPart66";
import EWIS from "./Training147/EWIS/EWIS";
import FuelTankSafety from "./Training147/FuelTankSafety/FuelTankSafety";
import HumanFactorsPart66 from "./Training147/HumanFactorsPart66/HumanFactorsPart66";
import HumanFactorsPart145 from "./Training147/HumanFactorsPart145/HumanFactorsPart145";
import SafetyManagementSystem from "./Training147/SafetyManagementSystem/SafetyManagementSystem";
import PartM from "./Training147/PartM/PartM";





const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CoursesPage = lazy(() => import('../pages/Courses'));
export const App = () => {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
     

    return isRefreshing ? (
      <div  className={css.App}>
         <b>Refreshing...</b>
      </div>
     
  ) : (
              <div className={css.App}>
                   

        {/* <ForCivilAerospaceCompanies /> */}
        <Routes>
                    {/* <Route
          path="/courses/training148/compliance-for-non-u-s-civil-aerospace-companies"
          element={<ForCivilAerospaceCompanies />}
          /> */}
               
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    
                    <Route
                    path="/register"
                    element={
                         <RestrictedRoute redirectTo="/courses" component={<RegisterPage />} />
                    }
                    />
                <Route
                path="/login"
                element={
                     <RestrictedRoute redirectTo="/courses" component={<LoginPage />} />
                }
                />
                <Route
                path="/courses"
                element={
                     <PrivateRoute redirectTo="/" component={<CoursesPage />} />
                }
                />
                <Route
                    path="/courses/training148"
                    element={
                    <PrivateRoute redirectTo="/" component={<Training148 />} />}>
                           <Route
                              path="compliance-for-non-u-s-civil-aerospace-companies"
                              element={<ForCivilAerospaceCompanies />}/> 
                           <Route
                              path="ewis"
                              element={<EWIS />}/>
                           <Route
                              path="easa-part-66"
                              element={<EASAPart66 />} />
                         <Route
                              path="fuel-tank"
                              element={<FuelTankSafety />} />
                         <Route
                              path="human-factors-part-66"
                              element={<HumanFactorsPart66 />}/>
                         <Route
                              path="human-factors-part-145"
                              element={<HumanFactorsPart145 />}/>
                         <Route
                              path="safety-management-system"
                              element={<SafetyManagementSystem />}/>
                         <Route
                              path="part-m"
                              element={<PartM />}/>  
                </Route>
                <Route
                path="/courses/maintenance_programs"
                element={
                     <PrivateRoute redirectTo="/" component={<MaintenancePrograms />} />
                }
                />
                <Route
                path="/courses/military_aviation_legislation"
                element={
                     <PrivateRoute redirectTo="/" component={<MilitaryAviation />} />
                }
                />
                <Route
                path="/courses/aviation_legislation"
                element={
                     <PrivateRoute redirectTo="/" component={<AviationLegislation />} />
                }
                />
                <Route
                path="/courses/electrical_wiring"
                element={
                     <PrivateRoute redirectTo="/" component={<ElectricalWiring />} />
                }
                />
                <Route
                path="/courses/battery_maintenance"
                element={
                     <PrivateRoute redirectTo="/" component={<BatteryMaintenance />} />
                }
                />
                <Route
                path="/courses/qrosscheck"
                element={
                     <PrivateRoute redirectTo="/" component={<Qrosscheck />} />
                }
                />
                    {/* <Route path="/courses/training148" element={<PrivateRoute redirectTo="/" component={<Training148 />} />}>
                    <Route path="compliance-for-non-u-s-civil-aerospace-companies" element={<ForCivilAerospaceCompanies />} />
                    </Route> */}
                             {/* <Route path="/courses/training148" element={<Training148 />}>
                              <Route path="/courses/training148/compliance-for-non-u-s-civil-aerospace-companies" element={<ForCivilAerospaceCompanies />} />
                             </Route> */}
                             
                
                </Route>
        </Routes>
        {/* <ForCivilAerospaceCompanies /> */}
      </div>
  )
};
