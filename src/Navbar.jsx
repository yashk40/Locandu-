import React from 'react'
import { Search, LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth0, User } from "@auth0/auth0-react"
import { useState } from 'react'
export const Navbar = () => {

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
     <header className="bg-gradient-to-r p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#421493] relative" id='logo'>Locandu</h1>
            <button className="sm:hidden text-[#421493]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
          { isAuthenticated ? (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
               <a href=""  className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
              <a href=""  className="flex items-center justify-center text-[#421493]  w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </a>
              <Link to="/Admin" className="flex items-center justify-center text-[#421493] px-4 py-`2 rounded-full w-full sm:w-auto">
                <PlusCircle className="w-5 h-5 mr-1" />
                Post Your Ad
              </Link>
            </div>
          )  :(
           
                        <a href=""  onClick={handleLogin} className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
              <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
              Login
            </a>
          
          )}
          </div>
        </div>
      </header>

      <div>


      </div>
    </>
  )
}
