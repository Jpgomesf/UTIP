import { React } from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LogIn from './pages/LogIn';
import Home from './pages/Home/Home.tsx';
import Oops from './pages/Oops';
import Signup from './pages/Signup';
import EditProfile from './pages/Editprofile';

import { AuthProvider, AuthContext } from './context/auth';

const AppRoutes = () => {
   const Private = ({children}) => {
       const { authenticated, loading } = useContext(AuthContext);
        if (loading){
            return <div className="loading">Carregando</div>
        }
        if ( !authenticated ) {
            return <Navigate to="/login" />
        }
        return children;
   }
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Private><Home /></Private>} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="*" element={<Navigate to={"/login"}><Oops /></Navigate>} />      
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default AppRoutes;