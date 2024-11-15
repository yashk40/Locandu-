import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react';
import { CreditCard, User, List } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

export const Pass = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit34 = (event) => {
    event.preventDefault();
    if (password === '123pass') {
      setAuthenticated(true);
      window.location.href = '/AdminPanel';
    } else {
      alert('Incorrect password!');
    }
  };

  if (authenticated) {
    return null; // or some other component
  }

  return (
    <>
      <header className="bg-gradient-to-r  p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#421493] relative" id='logo'>Locandu</h1>
            <button className="sm:hidden text-[#421493]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
            {isAuthenticated ? (
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                 <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
                <a href=""  className="flex items-center justify-center text-[#421493]  w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </a>
                <Link to="/Admin" className="flex items-center justify-center bg-white text-[#421493] px-4 py-2 rounded-full  w-full sm:w-auto">
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Post Your Ad
                </Link>
              </div>
            ) : (
              <a href=""  onClick={loginWithRedirect} className="flex items-center justify-center text-[#421493]  w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
                <LogIn className="w-5 h-5 mr-1" />
                Login
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit34}>
            <label className="block mb-2">
              <span className="text-gray-700">Enter password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-700"
                placeholder="Enter password"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-[#421493] font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};