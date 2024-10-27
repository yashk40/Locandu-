import React, { useEffect, useState } from 'react'
import { Search, LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import './Landing.css'
import { useAuth0, User } from "@auth0/auth0-react";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString } from 'firebase/storage';
import {Helmet} from 'react-helmet'

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBkk0LEERGStm-QOdlDnO3IsMKvN6Ub3n8",
  authDomain: "client-6bc79.firebaseapp.com",
  databaseURL: "https://client-6bc79-default-rtdb.firebaseio.com",
  projectId: "client-6bc79",
  storageBucket: "client-6bc79.appspot.com",
  messagingSenderId: "814256773172",
  appId: "1:814256773172:web:8eef7107c9672b8cfa9261",
  measurementId: "G-N95YNZZ3P8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function Component() {
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

    useEffect(() => {
      const uploadEmailToStorage = async () => {
        if (isAuthenticated && user) {
          const userEmail = user.email;
          const sanitizedEmail = userEmail.replace(/[^a-zA-Z0-9]/g, '_'); // Sanitize email for folder name
          const userRef = ref(storage, `users/${sanitizedEmail}/data.txt`); // Create a reference to the user's folder

          // Prepare the data to upload
          const dataToUpload = JSON.stringify({ email: userEmail });

          try {
            // Upload the data as a string
            await uploadString(userRef, dataToUpload);
            console.log("User email uploaded to Firebase Storage");
          } catch (error) {
            console.error("Error uploading email to Firebase Storage: ", error);
          }
        }
      };

      if (!isLoading) {
        uploadEmailToStorage();
      }
    }, [isAuthenticated, user, isLoading]); // Dependencies to trigger the effect




  return (
     <>

    <div className="min-h-screen flex flex-col bg-gray-50">
    <Helmet>
        <title>Locandu Call girl Services - Call & More</title>
        <meta name="description" content="Discover the best services and girls in your area. Browse profiles, chat, and book your experience." />
        <meta name="keywords" content="call girls,call girlss,escorts,safe meetings,call girl,redd liight area contact number,find girlfriend in,girl contact,randi no,girls mobile number,girls no,girl for friendship,girl number,girls whatsapp number,call girl india" />
        <link rel="canonical" href="https://locandu.com/" />
        <meta name="robots" content="all"/>
      </Helmet>
      <header className="bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white relative" id='logo' >Locandu</h1>
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

      <main className="flex-grow p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 py-7" >Explore World's Call Girl Service Directory</h2>
          <p className="text-center mb-8 text-gray-600 text-sm sm:text-base  py-5">Search from over 20k+ Call girls Ads in 500+ Cities for Free</p>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Popular locations:</h3>
            <p className="text-sm text-gray-600 mb-4 sm:mb-6">Find a date tonight to fulfill your needs. You can browse through the best girl in india for free</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Pune', 'Jaipur'].map((city) => (
                <span key={city} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">{city}</span>
              ))}
            </div>

           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
           <Link to="/Final">
  <LocationLink name="Agra" />
</Link>

<Link to="/Call-girl-Guwahati">
  <LocationLink name="Guwahati" />
</Link>

<Link to="/Call-girl-Kanpur">
  <LocationLink name="Kanpur" />
</Link>

<Link to="/Call-girl-Varanasi">
  <LocationLink name="Varanasi" />
</Link>

<Link to="/Call-girl-Vadodra">
  <LocationLink name="Vadodara" />
</Link>

<Link to="/Call-girl-Ranchi">
  <LocationLink name="Ranchi" />
</Link>

<Link to="/Call-girl-Gwailor">
  <LocationLink name="Gwalior" />
</Link>

<Link to="/Call-girl-Surat">
  <LocationLink name="Surat" />
</Link>

<Link to="/Call-girl-Noida">
  <LocationLink name="Noida" />
</Link>

<Link to="/Call-girl-Ludhiana">
  <LocationLink name="Ludhiana" />
</Link>

<Link to="/Call-girl-Jaipur">
  <LocationLink name="Jaipur" />
</Link>

<Link to="/Call-girl-Mumbai">
  <LocationLink name="Mumbai" />
</Link>

<Link to="/Call-girl-Kolkata">
  <LocationLink name="Kolkata" />
</Link>

<Link to="/Call-girl-Delhi">
  <LocationLink name="Delhi" />
</Link>

<Link to="/Call-girl-Chennai">
  <LocationLink name="Chennai" />
</Link>

<Link to="/Call-girl-Nashik">
  <LocationLink name="Nashik" />
</Link>

<Link to="/Call-girl-Meerut">
  <LocationLink name="Meerut" />
</Link>

<Link to="/Call-girl-Visakham">
  <LocationLink name="Visakham" />
</Link>

<Link to="/Call-girl-Jalandhar">
  <LocationLink name="Jalandhar" />
</Link>

<Link to="/Call-girl-Dehradun">
  <LocationLink name="Dehradun" />
</Link>

<Link to="/Call-girl-Lucknow">
  <LocationLink name="Lucknow" />
</Link>

<Link to="/Call-girl-Ahmedabad">
  <LocationLink name="Ahmedabad" />
</Link>

<Link to="/Call-girl-Goa">
  <LocationLink name="Goa" />
</Link>

<Link to="/Call-girl-Pune">
  <LocationLink name="Pune" />
</Link>

<Link to="/Call-girl-Nagpur">
  <LocationLink name="Nagpur" />
</Link>

<Link to="/Call-girl-Rajkot">
  <LocationLink name="Rajkot" />
</Link>

<Link to="/Call-girl-Jodhpur">
  <LocationLink name="Jodhpur" />
</Link>

<Link to="/Call-girl-Udaipur">
  <LocationLink name="Udaipur" />
</Link>

<Link to="/Call-girl-Gurugram">
  <LocationLink name="Gurugram" />
</Link>

<Link to="/Call-girl-Ambala">
  <LocationLink name="Ambala" />
</Link>

<Link to="/Call-girl-Bhopal">
  <LocationLink name="Bhopal" />
</Link>

<Link to="/Call-girl-Indore">
  <LocationLink name="Indore" />
</Link>

<Link to="/Call-girl-Chandigarh">
  <LocationLink name="Chandigarh" />
</Link>

<Link to="/Call-girl-hyderabad">
  <LocationLink name="Hyderabad" />
</Link>

<Link to="/Call-girl-">
  <LocationLink name="" />
</Link>

<Link to="/Call-girl-Raipur">
  <LocationLink name="Raipur" />
</Link>

    </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">Genuine Platform For Discerning Gentlemen Worldwide</h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-center max-w-3xl mx-auto">
            Locandu is an advertising and information resource and has no connection or liability with sites or individuals mentioned here. We ONLY sell advertisement space; we are not an agency, nor are we involved in  any business. We take no responsibility for the content or actions of third-party websites or individuals that you may access following links, email, or phone contacts from this portal.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 text-center">
            Locandu - browse directory with more than 50,000 profiles to choose from.
          </p>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {["Australia", "Bangladesh", "Nepal", "Sri Lanka", "United Kingdom"].map((country) => (
              <CountryLink key={country} name={country} />
            ))}
          </div> */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-s sm:text-s text-gray-600 mb-4 sm:mb-6 relative  top-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-s sm:text-s text-gray-600 mb-4 sm:mb-6 relative top-4">
  <Link to="/About" className="hover:text-green-600 transition-colors">About Us</Link>
  <Link to="/Contact"  className="hover:text-green-600 transition-colors">Contact Us</Link>
  <Link to="/Admin" className="hover:text-green-600 transition-colors">Post Your Ad</Link>
   
  <Link  to="/Terms" className="hover:text-green-600 transition-colors">Terms Of Service</Link>
  <Link to="/Privacy"   className="hover:text-green-600 transition-colors">Privacy Policy</Link>
</div>

            <Link to="/Pass" onClick={(event) => handleSubmit34(event)}>
  Admin Panel
</Link>
          
          </div>
        
        </div>
    
      </footer>
      <p className="text-s  text-white text-center bg-black w-full py-8  font-semibold">
            © 2022 Locandu - Post Free Classifieds Ads. All Rights Reserved.
          </p>
    </div>
    
    </>
  )
}

function LocationLink({ name }) {
  return (
    <a 
      href={`#${name.toLowerCase()}`} 
      className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors group"
    >
      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
      <span className="text-xs sm:text-sm text-gray-700 group-hover:text-green-700 transition-colors">{name}</span>
      <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-green-500 transition-colors" />
    </a>
  )
}

function CountryLink({ name }) {
  return (
    <a 
      href={`#${name.toLowerCase()}`} 
      className="flex items-center justify-center p-2 rounded-lg hover:bg-green-50 transition-colors group"
    >
      <span className="text-xs sm:text-sm text-gray-700 group-hover:text-green-700 transition-colors">{name}</span>
    </a>
    
  )
}