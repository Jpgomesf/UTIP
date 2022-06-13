import React, { useState, useEffect,createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [loading, setLoadin] = useState(true);
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoadin(false);
    }, []);

    const login = (email, password) => {
        
        //console.log("login auth", {email, password});

        //api criar uma session 

        const loggedUser = {
            id: 123,
            email: "admin@admin.com",
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));
        
        if (password === "admin123" ) {
            
            setUser(loggedUser);
            navigate("/home"); 
        }
        
    };

    const logout = () => {
        //console.log("logout");
        localStorage.removeItem('user')
        setUser(null);
        navigate("/login"); 
    };

    return (
        <AuthContext.Provider 
        value={{authenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}