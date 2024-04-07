import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";

import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";

import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "RestrictedRoute";
import { PrivateRoute } from "PrivateRoute";




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
    <b>Refreshing user...</b>
  ) : (
              <div>
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
                </Route>
        </Routes>
        </div>
  )
};
