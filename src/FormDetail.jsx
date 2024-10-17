import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import { Search, LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react'
const FormDetail = () => {
  const location = useLocation();
  const { formData } = location.state; // Get the passed data

  const [isMenuOpen, setIsMenuOpen] = useState(false)
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const handleLogin = async () => {
      await loginWithRedirect();
    };


  return (
    <>
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
               <a href='' className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-white flex items-center justify-center">Profile</Link>
              <a href='' className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </a>
              <Link to="/Admin" className="flex items-center justify-center bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors w-full sm:w-auto">
                <PlusCircle className="w-5 h-5 mr-1" />
                Post Your Ad
              </Link>
            </div>
          )  :(
           
                        <a href='' onClick={handleLogin} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
              <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
              Login
            </a>
          
          )}
          </div>
        </div>
      </header>

 
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Partners</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{formData.title}</h2>
          <img 
            src={formData.imageUrl || "/placeholder.svg?height=150&width=150"} 
            alt={formData.title} 
            className="rounded-lg object-cover my-4 w-3/5 h-full" 
          />
          <p className="text-xl text-gray-600 mb-4">{formData.description}</p>
          <div className="mt-2  text-gray-500 space-y-2 text-l">
            <div><strong>City:</strong> {formData.city || "Location not specified"}</div>
            <div><strong>Gender:</strong> {formData.gender}</div>
            {/* <div><strong>Services:</strong> {formData.services}</div> */}
            <div><strong>Age:</strong> {formData.age}</div>
            {/* <div><strong>Eye Color:</strong> {formData.eyeColor}</div>
            <div><strong>Hair Color:</strong> {formData.hairColor}</div>
            <div><strong>Nationality:</strong> {formData.nationality}</div> */}
<div className="item-price">
  <a 
    href={`https://wa.me/${formData.whatsapp}?text=Hi`}
    className="item-btn" 
    style={{color: "#fff"}} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className=" ">
      <img 
        width="100" 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
        alt="WhatsApp Icon"
      />
    </div>
    {formData.whatsapp}
  </a>
</div>

          </div>
          <div className="mt-4 text-l font-medium text-gray-700">
            <strong>Contact:</strong> {formData.mobile || "N/A"}
          </div>
        </div>
      </div>
    </>

  );
};

export default FormDetail;
