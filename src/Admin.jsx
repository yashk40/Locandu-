import React, { useEffect, useState } from "react";
import { LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';
import { useAuth0 } from "@auth0/auth0-react";
import { db, storage } from './Firebase'; 
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { Helmet } from 'react-helmet'

const Admin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [cityError, setCityError] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [downloadURL, setDownloadURL] = useState(null);
    const [tokens, setTokens] = useState(0);
    const [imageCount, setImageCount] = useState(0);

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


    
    
const [days, setDays] = useState(3); // State for days

    const handleDaysChange = (event) => {
      setDays(Number(event.target.value));
  };

  let tokenvalue = days * 50 ; 

  console.log(tokenvalue)

    useEffect(() => {
        if (isAuthenticated) {
            fetchTokens();
        }
    }, [isAuthenticated, user]);

    const updateTokens = async (newTokenCount) => {
        try {
            const userEmail = user.email.replace('.', '_');
            const userDocRef = doc(db, 'users', userEmail);
            await setDoc(userDocRef, { tokens: newTokenCount }, { merge: true });
            setTokens(newTokenCount);
            console.log("Tokens updated successfully!");
        } catch (error) {
            console.error("Error updating tokens: ", error);
        }
    };

    const getNextImageNumber = async () => {
        const userEmail = user.email.replace('.', '_');
        const userDocRef = doc(db, 'users', userEmail);
        const userDoc = await getDoc(userDocRef);
        const currentImageCount = userDoc.exists() ? userDoc.data().imageCount || 0 : 0;

        const imageRefs = await getDocs(collection(userDocRef, 'images'));
        let highestImageNumber = 0;
        imageRefs.forEach((doc) => {
            const id = parseInt(doc.id.split('_')[1], 10);
            if (id > highestImageNumber) {
                highestImageNumber = id;
            }
        });

        return Math.max(currentImageCount, highestImageNumber) + 1;
    };

    const handleFileChange = async (event) => {
        const file = event.target.files ? event.target.files[0] : null;
        console.log("Selected file:", file);
        if (tokens < 100) {
            alert("You need at least 100 tokens to upload files.");
            return;
        }
        if (file) {
            const userEmail = user.email.replace('.', '_');
            const userDocRef = doc(db, 'users', userEmail);

            const newFileNumber = await getNextImageNumber();
            const newFileName = `image_${newFileNumber}`;
            const storageRef = ref(storage, `images/${user.email}/${newFileName}`);

            try {
                await uploadBytes(storageRef, file);
                const url = await getDownloadURL(storageRef);
                setSelectedFile(file);
                setDownloadURL(url);
                await setDoc(userDocRef, { imageCount: newFileNumber }, { merge: true }); // Update image count
                console.log("File uploaded successfully, URL:", url);
            } catch (error) {
                console.error("Error uploading file: ", error);
            }
        } else {
            console.error("No file selected");
        }
    };

    const handleCityChange = (event) => {
        setCityError(event.target.value === '');
    };

    const getNextSubmissionNumber = async () => {
        const userEmail = user.email.replace('.', '_');
        const userDocRef = doc(db, 'users', userEmail);
        const userDoc = await getDoc(userDocRef);
        let currentSubmissionCount = userDoc.exists() ? userDoc.data().submissionCount || 0 : 0;

        const submissionRefs = await getDocs(collection(userDocRef, 'formData'));
        let highestSubmissionNumber = 0;
        submissionRefs.forEach((doc) => {
            const id = parseInt(doc.id.split('_')[1], 10);
            if (id > highestSubmissionNumber) {
                highestSubmissionNumber = id;
            }
        });

        return Math.max(currentSubmissionCount, highestSubmissionNumber) + 1;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (tokens < 150) {
            console.error("Not enough tokens to promote the ad.");
            alert("Insufficient tokens. You need at least 100 tokens to promote your ad.");
            return;
        }



        
        const updatedTokens = tokens - tokenvalue;
 
        const formData = {
            state: event.target.state.value,
            city: event.target.city.value,
            category: event.target.category.value,
            title: event.target.title.value,
            description: event.target.description.value,
            mobile: event.target.mobileNumber.value,
            whatsapp: event.target.whatsapp.value,
            gender: event.target.gender.value,
            age: event.target.age.value,
            day : event.target.Days.value,
            // nationality: event.target.nationality.value,
            // eyeColor: event.target.eyeColor.value,
            // hairColor: event.target.hairColor.value,
            // height: event.target.height.value,
            // weight: event.target.weight.value,
            // services: [
            //     event.target.service1.checked ? '69 Position' : null,
            //     event.target.service2.checked ? 'Handjob' : null,
            // ].filter(Boolean),
            imageUrl: downloadURL || null, // Include image URL if available
        };

        try {
            const userEmail = user.email.replace('.', '_');
            const userDocRef = doc(db, 'users', userEmail);
            const newSubmissionNumber = await getNextSubmissionNumber();
            const newSubmissionId = `submission_${newSubmissionNumber}`;
            
            await setDoc(doc(userDocRef, 'formData', newSubmissionId), { ...formData, submissionId: newSubmissionId });
            await setDoc(userDocRef, { submissionCount: newSubmissionNumber }, { merge: true });
            await updateTokens(updatedTokens); 

            alert("Form data saved successfully!");
        } catch (error) {
            console.error("Error saving form data: ", error);
        }
    };



    return (

        <>
        <Helmet>
        <title>Services - More</title>
        <meta name="description" content="Discover the best services  in your area. Browse profiles, chat, and book your experience." />
        <link rel="canonical" href="https://locandu.com/" />
      </Helmet>
      <seo
        title="Services - & More"
        description="Discover the best services in your area. Browse profiles, chat, and book your experience."
        image="https://i.postimg.cc/9X9HqzTh/image-1.png"
      />
            <header className="bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md relative z-20">
                <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white relative" id='logo'>Locandu</h1>
                        <button className="sm:hidden text-white" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
                        {isAuthenticated ? (
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                                <a href="" className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-white flex items-center justify-center">Profile</Link>
                                <a href="" className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </a>
                                <Link to="/Admin" className="flex items-center justify-center bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors w-full sm:w-auto">
                                    <PlusCircle className="w-5 h-5 mr-1" />
                                    Post Your Ad
                                </Link>
                            </div>
                        ) : (
                            <a href="" onClick={() => loginWithRedirect()} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                                <LogIn className="w-5 h-5 mr-1" />
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white">
                <h1 className="text-xl sm:text-2xl font-normal text-teal-500 mb-4 sm:mb-6">Post Your Ad Here</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="state" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           State*
         </label>
         <select id="state" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1 text-gray-700">
           <option value="">Please select state</option>
           <option value="Andhra Pradesh">Andhra Pradesh</option>
           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
           <option value="Assam">Assam</option>
           <option value="Bihar">Bihar</option>
           <option value="Chhattisgarh">Chhattisgarh</option>
           <option value="Goa">Goa</option>
           <option value="Gujarat">Gujarat</option>
           <option value="Haryana">Haryana</option>
           <option value="Himachal Pradesh">Himachal Pradesh</option>
           <option value="Jammu and Kashmir">Jammu and Kashmir</option>
           <option value="Jharkhand">Jharkhand</option>
           <option value="Karnataka">Karnataka</option>
           <option value="Kerala">Kerala</option>
           <option value="Madhya Pradesh">Madhya Pradesh</option>
           <option value="Maharashtra">Maharashtra</option>
           <option value="Manipur">Manipur</option>
           <option value="Meghalaya">Meghalaya</option>
           <option value="Mizoram">Mizoram</option>
           <option value="Nagaland">Nagaland</option>
           <option value="Odisha">Odisha</option>
           <option value="Punjab">Punjab</option>
           <option value="Rajasthan">Rajasthan</option>
           <option value="Sikkim">Sikkim</option>
           <option value="Tamil Nadu">Tamil Nadu</option>
           <option value="Telangana">Telangana</option>
           <option value="Tripura">Tripura</option>
           <option value="Uttar Pradesh">Uttar Pradesh</option>
           <option value="Uttarakhand">Uttarakhand</option>
           <option value="West Bengal">West Bengal</option>
         </select>
       </div>
       <div className="flex flex-col sm:flex-row sm:items-start">
         <label htmlFor="city" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0 sm:pt-1">
           City*
         </label>
         <div className="w-full sm:w-3/4">
 
           <input 
id="city" 
            type="text" 
              className="w-full border border-gray-300 rounded px-2 py-1 text-gray-700"
              onChange={handleCityChange}
            />
            {cityError && <p className="text-red-500 text-sm mt-1">Please select location</p>}
          </div>
       </div>
        <div className="flex flex-col sm:flex-row sm:items-center"> 
         <label htmlFor="category" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           Category*
         </label>
         <select id="category" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1 text-gray-700">
           <option value="">Please select Ad category</option>
           <option value="">Call girls</option>
      
         </select>
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="title" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           Title*
         </label>
         <input id="title" type="text" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1" />
       </div>
       <div className="flex flex-col sm:flex-row sm:items-start">
         <label htmlFor="description" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0 sm:pt-1">
           Description*
         </label>
         <textarea id="description" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1" rows={4} />
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="mobileNumber" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           Mobile Number*
         </label>
         <input id="mobileNumber" type="tel" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1" />
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="mobileNumber" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
         whatsappno*
         </label>
         <input id="whatsapp" type="tel" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1" />
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="gender" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
          Gender*
         </label>
         <select id="gender" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1 text-gray-700">
           <option value="">Please select Gender</option>
           <option value="Girl">Girl</option>
           <option value="Boy">Boy</option>
           <option value="TransGender">TransGender</option>
         </select>
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
         <label htmlFor="age" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           Age*
         </label>
         <input id="age" type="tel" className="w-full sm:w-3/4 border border-gray-300 rounded px-2 py-1" />
       </div>
       <div className="flex flex-col sm:flex-row sm:items-center">
                        <label htmlFor="days" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
                            Days*
                        </label>
                        <input
                            id="Days"
                            type="range"
                            min="3"
                            max="60"
                            value={days}
                            onChange={handleDaysChange}
                            className="w-full sm:w-3/4"
                        />
                        <span className="ml-2 text-gray-700">{days} days</span>
                    </div>

       <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:mt-8">
         <label htmlFor="photos" className="w-full sm:w-1/4 text-gray-600 mb-1 sm:mb-0">
           Photos
         </label>
         <div className="w-full sm:w-3/4">
           <input
              id="photos"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="photos"
              className="cursor-pointer inline-flex items-center px-3 py-1 bg-gray-200 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-300"
            >
              {selectedFile ? `Selected: ${selectedFile.name}` : 'Choose Files'}
            </label>
            {downloadURL && ( // Render the image if a file is selected
                <img
                    src={downloadURL} // Use the download URL for the image source
                    alt="Selected"
                    className="mt-2 w-52" // Add styling as needed
                />
            )}
          </div>
        </div>
    
                    <div className="flex items-center mt-4 py-8">
                        <input id="termsAgreement" type="checkbox" className="mr-2" required />
                        <label htmlFor="termsAgreement" className="text-gray-600">
                            *I confirm that I am an independent escort or I am posting this advert on behalf of an independent escort. Also, I agree to the Terms and Conditions and Advert Guidelines.
                        </label>
                    </div>
                    <p className="text-red-500 text-sm mb-4">Note: You need at least 100 tokens to request your ad.</p>
                    <button
                        type="submit"
                        className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                        disabled={tokens < 100}
                    >
                        Request your ad
                    </button>
                    <p>You have {tokens} tokens.</p>
                </form>


            </div>
            <p className="text-s  text-white text-center bg-black w-full py-8  font-semibold">
            © 2022 Locandu - Post Free Classifieds Ads. All Rights Reserved.
          </p>
        </>
    );
};

export default Admin;