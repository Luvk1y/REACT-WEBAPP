import React from 'react';
import { Outlet, Route, Navigate } from "react-router-dom";
import { ChatView } from '../pages/ChatView';
import { Login } from '../pages/Login';
import { useAuthState, useAuth } from '../utilities/firebase_config';


export const GuardedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    return (
      <Route
        {...props}
        render={routeProps =>
          isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
        }
      />
    )
  }

export const UnguardedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    return (
      <Route
        {...props}
        render={routeProps =>
          !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/Login" />
        }
      />
    )
  }

export const ProtectedRoute = () => {
   const user = useAuth();
 
   return typeof user === 'undefined' ? (
     <h1>Loading.....</h1>
   ) : user ? (
     <Outlet/>
   ) : (
     <Login/>
   );
 };

 export const MyRouter = () => {

  const isAuthenticated = useAuth()
  
  const PrivateRoute = function ({ children }) {
  
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }}

    return( 
    <Router> 
      <Routes> 
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/" element={<Home/>}/> 
        <Route path="*" element={<ErrorPage/>}/>
        //Private Route
        <Route
          path="PrivatePage"
          element={<PrivateRoute>
                     <ChatView/>
                  </PrivateRoute>}/>    
      </Routes> 
    </Router> 
  )}