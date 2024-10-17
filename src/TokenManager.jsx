import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";


import { LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react'
import { CreditCard, User,  } from "lucide-react"
import { List } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    const [email, setEmail] = useState('');
    const [tokens, setTokens] = useState(0);

    const handleTokenUpdate = async () => {
        try {
            const userDocRef = doc(db, 'users', email.replace('.', '_')); // Reference to the user document
            await setDoc(userDocRef, { tokens }, { merge: true }); // Update tokens
            alert("Tokens updated successfully!");
            console.log(userDocRef);
        } catch (error) {
            console.error("Error updating tokens: ", error);
            alert("Failed to update tokens.");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTokenChange = (e) => {
        setTokens(Number(e.target.value)); // Ensure tokens is a number
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const { user, isAuthenticated, isLoading } = useAuth0()

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();


    const handleLogin = async () => {
      await loginWithRedirect();
    };

    return (
        <>
                <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white relative" id='logo'>Locandu</h1>
            <button className="sm:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
          { isAuthenticated ? (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
               <a href=""  className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-white flex items-center justify-center">Profile</Link>
              <a href=""  className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </a>
              <Link to="/Admin" className="flex items-center justify-center bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors w-full sm:w-auto">
                <PlusCircle className="w-5 h-5 mr-1" />
                Post Your Ad
              </Link>
            </div>
          )  :(
           
                        <a href=""  onClick={handleLogin} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
              <LogIn className="w-5 h-5 mr-1" />
              Login
            </a>
          
          )}
          </div>
        </div>
      </header>

        
     
        <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white">
            <h1 className="text-xl sm:text-2xl font-normal text-teal-500 mb-4 sm:mb-6">Admin Token Management</h1>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-gray-600 mb-1">User Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="tokens" className="text-gray-600 mb-1">Tokens:</label>
                <input
                    id="tokens"
                    type="number"
                    value={tokens}
                    onChange={handleTokenChange}
                    className="border border-gray-300 rounded px-2 py-1"/>
            </div>
            <button
                onClick={handleTokenUpdate}
                className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300" >
                Update Tokens
            </button>
        </div>
        </div>
        </>
    );
};

export default AdminPanel;
