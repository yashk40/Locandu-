import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './Firebase'; 
import { Search, LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react';

const FormDetail = () => {
  const location = useLocation();
  const { formData } = location.state; // Get the passed data
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const userDocRef = doc(db, 'users', formData.userEmail.replace('.', '_')); // Ensure userEmail is correct
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const imageCount = userData.imageCount || 0;
      const imageUrls = [];
      // Construct the image URLs based on the naming convention
      for (let i = 1; i <= imageCount; i++) {
        const imageUrl = `https://your-firebase-storage-url/images/${formData.userEmail}/${imageCount}(${i})`; // Update with your Firebase Storage URL
        imageUrls.push(imageUrl); // Push the constructed URL
      }
      setImages(imageUrls);
    } else {
      console.error("User document does not exist.");
    }
  };

  useEffect(() => {
    fetchImages();
    console.log(formData);
  }, [formData.userEmail]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <>
      <header className="bg-gradient-to-r text-[#421493] p-4 shadow-md relative z-20">
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
                <a href='' className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0">
                  {user.email}
                </a>
                <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
                <a href='' className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </a>
                <Link to="/Admin" className="flex items-center justify-center bg-white text-[#421493] px-4 py-2 rounded-full w-full sm:w-auto">
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Post Your Ad
                </Link>
              </div>
            ) : (
              <a href='' onClick={handleLogin} className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
                <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
                Login
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="w-screen h-48 bg-[#421493] block items-center justify-center ">
        <main className="bg-[#421493] p-8 w-screen">
          <ul className="breadcrumb-list flex text-white justify-center" id="text-callgirl">
            <li><a href="/">Home</a></li>
            <li className="px-2">&gt;</li>
            <li><a href="/Call-girl-Adult">Call Girls</a></li>
            <li className="px-2">&gt;</li>
            <li><Link to="/Call-girl-Durgapur">{formData.title}</Link></li>
          </ul>
        </main>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center">{formData.title}</h1>
      </div>


      <div className="py-9 px-10 w-auto rounded mx-auto ">
        {/* New Description and Characteristics UI */}

        <div className="container mx-auto px-4 py-8" >
        <div className="bg-white rounded-lg p-6 mb-6"  >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Grid layout for collage */}
              {Array.isArray(formData.imageUrl) && formData.imageUrl.length > 0 ? (
                formData.imageUrl.slice(0, 6).map((url, index) => ( // Display up to 6 images
                  url ? (
                    <div key={index} className="flex justify-center">
                      <img 
                        src={url} 
                        alt={`Uploaded ${index + 1}`} 
                        className="rounded-lg object-cover w-full h-auto  mx-auto" // Ensures images fit well
                        style={{objectFit:'cover'}}
                      />
                    </div>
                  ) : (
                    <p key={index}>Image URL is invalid.</p>
                  )
                ))
              ) : (
                <p>No images available.</p>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Call Girls</h2>
          
          {/* Move the image gallery here */}


          <h3 className="text-lg font-semibold mb-2">{formData.state}/{formData.city} </h3>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h4 className="text-xl font-bold mb-2">About me</h4>
            <p className="text-gray-700">
              {formData.description}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-4xl">
            <h4 className="text-xl font-bold mb-2">Characteristics</h4>
            <table className="min-w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Age</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.age}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nationality</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.nationality || "N/A"}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Breast</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.breast || "N/A"}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Body Type</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.bodyType || "N/A"}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gender</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.gender}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ethnicity</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.ethnicity || "N/A"}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Hair</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.hair || "N/A"}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Shared</td>
                  <td className="border border-gray-300 px-4 py-2">{formData.shared ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex space-x-4 mt-4">
              <a 
                href={`tel:${formData.mobile}`} 
                className="item-btn flex items-center justify-center bg-[#421493] text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-green-600"
              >
                Call
              </a>
              <a 
                href={`https://wa.me/${formData.whatsapp}?text=Hi`} 
                className="item-btn flex items-center justify-center  bg-[#421493] text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-green-600"
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a 
                href={`https://t.me/${formData.telegram}`} 
                className="item-btn flex items-center justify-center  bg-[#421493] text-white rounded-lg px-4 py-2 transition duration-300 hover:bg-green-600"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
        </div>
      </div>
      <footer className="w-full bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a
            href="/Terms"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Terms and conditions
          </a>
          <a
            href="/Privacy"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Privacy policy
          </a>
          <a
            href="/Contact"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Contact us
          </a>
          <a
            href="/Pass"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Admin Panel
          </a>
        </nav>
        <div className="text-center text-sm text-zinc-300">
          Copyright © 2024 Locandu
        </div>
      </div>
    </footer>
    </>
  );
};

export default FormDetail;