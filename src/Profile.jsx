import React from "react";
import { useState } from "react";

import { LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react'
import { CreditCard, User,  } from "lucide-react"
import { List } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { doc  } from "firebase/firestore";
import { db } from "./Firebase";
import { getDoc } from "firebase/firestore";
import {seo} from "@americanexpress/react-seo"


const Profile = () => {

  seo({
    title: 'Locandu Profile',
    description: 'View your available points and buy more with Paytm, PhonePe, or UPI.',
    keywords: [
      'Locandu',
      'Profile',
      'Points System',
      'User profiles',
      'Loyalty program',
      'Reward points',
      'Community engagement',
      'User-generated content',
      'Social platform',
      'Profile customization',
      'Gamification',
      'Incentives for participation',
      'User rewards',
      'Engagement metrics',
      'Digital profiles',
      'Social interaction',
      'User experience',
      'Member benefits',
      'Referral program',
      'Feedback system',
      'Personalization',
      'Activity tracking',
      'Social networking',
      'Content sharing',
      'User insights',
      'In-app notifications',
      'Participation rewards',
      'Mobile app features',
      'Community building',
      'User satisfaction'
    ],
    image: 'https://i.postimg.cc/9X9HqzTh/image-1.png',
  });

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const { user, isAuthenticated, isLoading } = useAuth0()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [tokens, setTokens] = useState(0);


    const fetchTokens = async () => {
      if (user) {
          const userEmail = user.email.replace('.', '_');
          const userDocRef = doc(db, 'users', userEmail);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
              const userData = userDoc.data();
              setTokens(userData.tokens || 0);
              setImageCount(userData.imageCount || 0); // Set initial image count
          }
      }
  };

  useEffect(() => {
      if (isAuthenticated) {
          fetchTokens();
      }
  }, [isAuthenticated, user]);




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
               <Link to="/Profile" className="text-white flex items-center justify-center">Profile</Link>
              <a href="" className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </a>
              <Link to="/Admin" className="flex items-center justify-center bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors w-full sm:w-auto">
                <PlusCircle className="w-5 h-5 mr-1" />
                Post Your Ad
              </Link>
            </div>
          ) :(
           
                        <a href="" onClick={() => loginWithRedirect()} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" >
              <LogIn className="w-5 h-5 mr-1" />
              Login
            </a>
          
          )}
          </div>
        </div>
      </header>

      <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Points System</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-white p-6 shadow-md`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="space-y-2">
          <Link to="/Listing" href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <List size={20} />
            <span>My Listings</span>
          </Link>
          <Link to="/Profile" className="flex items-center space-x-2 bg-green-500 text-white p-2 rounded">
            <User size={20} />
            <span>Wallet</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-6">
        <h1 className="text-2xl font-semibold mb-6">Your Available Points: {tokens}</h1>
        <section className="bg-white p-4 lg:p-6 rounded-lg shadow-md mb-6">
          
          <h2 className="text-xl font-semibold mb-4">1. Buy Points with Paytm / PhonePe, UPI</h2>
          <ul className="space-y-2 mb-4">
            <li>₹ 999 = 1500 points</li>
            <li>₹ 1995 = 3000 points</li>
            <li>₹ 4999 = 7500 points</li>
            <li>₹ 9995 = 18000 points</li>
          </ul>
          <p className="font-semibold mb-2">Buy points in 3 easy steps</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Scan the QR code below and make payment</li>
            <li>Send the screenshot of the payment to whatsapp no +91 9257675219.</li>
            <li>Contact us on <a href="https://t.me/Shlok110" style={{textDecoration:"underline", color:"blue"}} >Telegram</a> and <a href="">On Gmail aapl08544@gmail.com</a> </li>
          </ol>
          <div className="mt-4 flex justify-center lg:justify-start">
            <img
              src="https://i.postimg.cc/DZc1pSCr/Screenshot-2024-10-08-144143.png"
              alt="QR Code"
              width={150}
              height={150}
              className="border border-gray-300"
            />
          </div>

        </section>
      </main>
    </div>
      </>
  );
};

export default Profile; 
