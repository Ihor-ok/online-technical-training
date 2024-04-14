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
      <div className={css.App}>
         <b>Refreshing user...</b>
      </div>
     
  ) : (
        <div className={css.App}>

        
        <Routes>
          
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
                     <PrivateRoute redirectTo="/" component={<Training148 />} />
                }
                />
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
                
                </Route>
        </Routes>
        
      </div>
  )
};
