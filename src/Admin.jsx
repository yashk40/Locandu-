import React, { useEffect, useState } from "react";
import { LogIn, PlusCircle, ChevronRight, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Landing.css';
import { useAuth0 } from "@auth0/auth0-react";
import { db, storage } from './Firebase'; 
import { doc, setDoc, getDoc, collection, getDocs, Timestamp } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { Helmet } from 'react-helmet'

const Admin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [cityError, setCityError] = useState(true);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [downloadURL, setDownloadURL] = useState(null);
    const [tokens, setTokens] = useState(0);
    const [imageCount, setImageCount] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState("");

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

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
        const files = event.target.files ? Array.from(event.target.files) : [];
        console.log("Selected files:", files);
        if (files.length > 3) {
            alert("You can only upload a maximum of 3 files.");
            return;
        }
        if (tokens < 100) {
            alert("You need at least 100 tokens to upload files.");
            return;
        }
        if (files.length > 0) {
            const userEmail = user.email.replace('.', '_');
            const userDocRef = doc(db, 'users', userEmail);

            const newFileNumber = await getNextImageNumber();
            const imageUrls = []; // Array to hold image URLs

            for (let i = 0; i < files.length; i++) {
                const newFileName = `${newFileNumber}(${i + 1})`; // Naming convention
                const storageRef = ref(storage, `images/${user.email}/${newFileName}`);

                try {
                    await uploadBytes(storageRef, files[i]);
                    const url = await getDownloadURL(storageRef);
                    imageUrls.push(url); // Store the URL
                    console.log("File uploaded successfully, URL:", url);
                } catch (error) {
                    console.error("Error uploading file: ", error);
                }
            }

            setSelectedFiles(files);
            setDownloadURL(imageUrls); // Save all URLs
            await setDoc(userDocRef, { imageCount: newFileNumber }, { merge: true }); // Update image count
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

        const createdAtDate = new Date();
        
        const formattedDate = createdAtDate.toISOString().split('T')[0]; // This gives you YYYY-MM-DD
        
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
            day : selectedDuration,
            telegram: event.target.telegram.value,
            imageUrl: downloadURL || null, // Include image URL if available
            promoted: false, // Add promoted field
            visible: false,   // Add visible field
            createdAt: formattedDate
            
        };

        // Adjust token deduction based on selected duration
        let tokenCost = 0;
        if (selectedDuration === "3") tokenCost = 169;
        else if (selectedDuration === "7") tokenCost = 300;
        else if (selectedDuration === "30") tokenCost = 999;

        // Check if tokens are sufficient for the selected duration
        if (tokens < tokenCost) {
            alert("You do not have enough tokens for this promotion.");
            return;
        }

        // Deduct tokens after successful submission
        await updateTokens(tokens - tokenCost); // Deduct the token cost here

        try {
            const userEmail = user.email.replace('.', '_');
            const userDocRef = doc(db, 'users', userEmail);
            const newSubmissionNumber = await getNextSubmissionNumber();
            const newSubmissionId = `submission_${newSubmissionNumber}`;
            
            await setDoc(doc(userDocRef, 'formData', newSubmissionId), { ...formData, submissionId: newSubmissionId });
            await setDoc(userDocRef, { submissionCount: newSubmissionNumber }, { merge: true });

            alert("Form data saved successfully!");
            navigate('/promote-your-ad');
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
            <header className="bg-gradient-to-r  p-4 shadow-md relative z-20">
                <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#421493]  relative" id='logo'>Locandu</h1>
                        <button className="sm:hidden text-[#421493] " onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
                        {isAuthenticated ? (
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                                <a href="" className="flex items-center justify-center text-[#421493]   w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-[#421493]  flex items-center justify-center">Profile</Link>
                                <a href="" className="flex items-center justify-center text-[#421493]   w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </a>
                                <Link to="/Admin" className="flex items-center justify-center bg-white text-[#421493] px-4 py-2 rounded-full  w-full sm:w-auto">
                                    <PlusCircle className="w-5 h-5 mr-1" />
                                    Post Your Ad
                                </Link>
                            </div>
                        ) : (
                            <a href="" onClick={() => loginWithRedirect()} className="flex items-center justify-center text-[#421493]  w-full sm:w-auto py-2 sm:py-0">
                                <LogIn className="w-5 h-5 mr-1" />
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </header>
<div className="h-44 w-screen bg-[#421493]" >

<h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center py-16">Post Your ad</h1>

</div>
            <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-3xl shadow-lg relative bottom-16 ">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-2">State*</label>
                        <select id="state" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700">
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
                    <div className="mb-6">
                        <label htmlFor="city" className="block text-gray-700 text-sm font-medium mb-2">City*</label>
                        <select 
                            id="city" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
                            onChange={handleCityChange}
                        >
                            <option value="">Please select a city</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Jodhpur">Jodhpur</option>
                            <option value="Udaipur">Udaipur</option>
                            <option value="Alwar">Alwar</option>
                            <option value="Ajmer">Ajmer</option>
                            <option value="Banaswara">Banaswara</option>
                            <option value="Barmer">Barmer</option>
                            <option value="Bharatpur">Bharatpur</option>
                            <option value="Bhilwara">Bhilwara</option>
                            <option value="Bhiwadi">Bhiwadi</option>
                            <option value="Bikaner">Bikaner</option>
                            <option value="Kota">Kota</option>
                            <option value="Shri ganganagar">Shri Ganganagar</option>
                            <option value="Jaisalmer">Jaisalmer</option>
                            <option value="Sikar">Sikar</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Thane">Thane</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Solapur">Solapur</option>
                            <option value="Navi Mumbai">Navi Mumbai</option>
                            <option value="Aurangabad">Aurangabad</option>
                            <option value="Kolhapur">Kolhapur</option>
                            <option value="Amravati">Amravati</option>
                            <option value="Bhiwandi">Bhiwandi</option>
                            <option value="Visakhapatnam">Visakhapatnam</option>
                            <option value="Vijayawada">Vijayawada</option>
                            <option value="Guntur">Guntur</option>
                            <option value="Nellore">Nellore</option>
                            <option value="Kakinada">Kakinada</option>
                            <option value="Tirupati">Tirupati</option>
                            <option value="Rajahmundry">Rajahmundry</option>
                            <option value="Anantapur">Anantapur</option>
                            <option value="Chittoor">Chittoor</option>
                            <option value="Kadapa">Kadapa</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Panaji">Panaji</option>
                            <option value="Margao">Margao</option>
                            <option value="Mapusa">Mapusa</option>
                            <option value="Ponda">Ponda</option>
                            <option value="Vasco da Gama">Vasco da Gama</option>
                            <option value="Bicholim">Bicholim</option>
                            <option value="Quepem">Quepem</option>
                            <option value="Sanguem">Sanguem</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Bhavnagar">Bhavnagar</option>
                            <option value="Gandhinagar">Gandhinagar</option>
                            <option value="Jamnagar">Jamnagar</option>
                            <option value="Junagadh">Junagadh</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Faridabad">Faridabad</option>
                            <option value="Ambala">Ambala</option>
                            <option value="Hisar">Hisar</option>
                            <option value="Karnal">Karnal</option>
                            <option value="Panipat">Panipat</option>
                            <option value="Sonipat">Sonipat</option>
                            <option value="Shimla">Shimla</option>
                            <option value="Dharamshala">Dharamshala</option>
                            <option value="Manali">Manali</option>
                            <option value="Kullu">Kullu</option>
                            <option value="Solan">Solan</option>
                            <option value="Mandi">Mandi</option>
                            <option value="Bilaspur">Bilaspur</option>
                            <option value="Hamirpur">Hamirpur</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Mysuru">Mysuru</option>
                            <option value="Mangaluru">Mangaluru</option>
                            <option value="Hubli">Hubli</option>
                            <option value="Dharwad">Dharwad</option>
                            <option value="Belagavi">Belagavi</option>
                            <option value="Tumakuru">Tumakuru</option>
                            <option value="Shimoga">Shimoga</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Howrah">Howrah</option>
                            <option value="Durgapur">Durgapur</option>
                            <option value="Asansol">Asansol</option>
                            <option value="Siliguri">Siliguri</option>
                            <option value="Bardhaman">Bardhaman</option>
                            <option value="Malda">Malda</option>
                            <option value="Kalyani">Kalyani</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Indore">Indore</option>
                            <option value="Gwalior">Gwalior</option>
                            <option value="Jabalpur">Jabalpur</option>
                            <option value="Ujjain">Ujjain</option>
                            <option value="Sagar">Sagar</option>
                            <option value="Dewas">Dewas</option>
                            <option value="Ratlam">Ratlam</option>
                            <option value="Bhubaneswar">Bhubaneswar</option>
                            <option value="Cuttack">Cuttack</option>
                            <option value="Berhampur">Berhampur</option>
                            <option value="Rourkela">Rourkela</option>
                            <option value="Sambalpur">Sambalpur</option>
                            <option value="Balasore">Balasore</option>
                            <option value="Bolangir">Bolangir</option>
                            <option value="Kendrapara">Kendrapara</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Auroville">Auroville</option>
                            <option value="Karaikal">Karaikal</option>
                            <option value="Yanam">Yanam</option>
                            <option value="Mahe">Mahe</option>
                            <option value="Puducherry City">Puducherry City</option>
                            <option value="Villupuram">Villupuram</option>
                            <option value="Cuddalore">Cuddalore</option>
                            <option value="Ludhiana">Ludhiana</option>
                            <option value="Amritsar">Amritsar</option>
                            <option value="Jalandhar">Jalandhar</option>
                            <option value="Patiala">Patiala</option>
                            <option value="Bathinda">Bathinda</option>
                            <option value="Mohali">Mohali</option>
                            <option value="Hoshiarpur">Hoshiarpur</option>
                            <option value="Gangtok">Gangtok</option>
                            <option value="Namchi">Namchi</option>
                            <option value="Gyalshing">Gyalshing</option>
                            <option value="Mangan">Mangan</option>
                            <option value="Pelling">Pelling</option>
                            <option value="Rangpo">Rangpo</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Yuksom">Yuksom</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Madurai">Madurai</option>
                            <option value="Tiruchirappalli">Tiruchirappalli</option>
                            <option value="Salem">Salem</option>
                            <option value="Tirunelveli">Tirunelveli</option>
                            <option value="Erode">Erode</option>
                            <option value="Vellore">Vellore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Warangal">Warangal</option>
                            <option value="Nizamabad">Nizamabad</option>
                            <option value="Khammam">Khammam</option>
                            <option value="Karimnagar">Karimnagar</option>
                            <option value="Mahbubnagar">Mahbubnagar</option>
                            <option value="Rangareddy">Rangareddy</option>
                            <option value="Medak">Medak</option>
                            <option value="Agartala">Agartala</option>
                            <option value="Dharmanagar">Dharmanagar</option>
                            <option value="Ambassa">Ambassa</option>
                            <option value="Kailashahar">Kailashahar</option>
                            <option value="Teliamura">Teliamura</option>
                            <option value="Sabroom">Sabroom</option>
                            <option value="Belonia">Belonia</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Kanpur">Kanpur</option>
                            <option value="Agra">Agra</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Allahabad">Allahabad</option>
                            <option value="Bareilly">Bareilly</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                            <option value="Noida">Noida</option>
                        </select>
                        {cityError && <p className="text-red-500 text-sm mt-1">Please select location</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">Category*</label>
                        <select id="category" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700">
                            <option value="">Please select Ad category</option>
                            <option value="">Call girls</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">Title*</label>
                        <input id="title" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Description*</label>
                        <textarea id="description" className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={4} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-medium mb-2">Mobile Number*</label>
                        <input id="mobileNumber" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-medium mb-2">Whatsapp No*</label>
                        <input id="whatsapp" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-2">Gender*</label>
                        <select id="gender" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700">
                            <option value="">Please select Gender</option>
                            <option value="Girl">Girl</option>
                            <option value="Boy">Boy</option>
                            <option value="TransGender">TransGender</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="age" className="block text-gray-700 text-sm font-medium mb-2">Age*</label>
                        <input id="age" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    </div>
                    {/* <div className="mb-6">
                        <label htmlFor="days" className="block text-gray-700 text-sm font-medium mb-2">Days*</label>
                        <input
                            id="Days"
                            type="range"
                            min="3"
                            max="60"
                            value={days}
                            onChange={handleDaysChange}
                            className="w-full"
                        />
                        <span className="ml-2 text-gray-700">{days} days</span>
                    </div> */}
                    <div className="mb-6">
                        <label htmlFor="photos" className="block text-gray-700 text-sm font-medium mb-2">Photos</label>
                        <input
                            id="photos"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            multiple
                        />
                        <label
                            htmlFor="photos"
                            className="cursor-pointer inline-flex items-center px-3 py-1 bg-gray-200 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-300"
                        >
                            {selectedFiles.length > 0 ? `Selected: ${selectedFiles.map(file => file.name).join(', ')}` : 'Choose Files'}
                        </label>
                        {selectedFiles.map((file, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`Selected ${index + 1}`}
                                className="mt-2 w-52"
                            />
                        ))}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="telegram" className="block text-gray-700 text-sm font-medium mb-2">Telegram URL*</label>
                        <input 
                            id="telegram" 
                            type="url" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                            placeholder="Enter your Telegram URL"
                        />
                    </div>
                    <div className="flex items-center mb-6">
                        <input id="termsAgreement" type="checkbox" className="mr-2" required />
                        <label htmlFor="termsAgreement" className="text-gray-600">
                            *I confirm that I am an independent escort or I am posting this advert on behalf of an independent escort. Also, I agree to the Terms and Conditions and Advert Guidelines.
                        </label>
                    </div>
                    <p className="text-red-500 text-sm py-3 mb-4">Note: You need at least 100 tokens to request your ad.</p>
                    <a style={{margin:"20px"}}
                        className="w-full bg-[#E91E63] text-white py-3 my-5 px-4 rounded-full hover:bg-[#D81B60] focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:ring-opacity-50 text-lg font-semibold"
                        disabled={tokens < 100}
                        onClick={togglePopup}
                    >
                        promote your ad
                    </a>

                    {isPopupOpen && (
                        <div className="fixed inset-0 flex w-full h-full items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="h-96 w-96 bg-white border rounded shadow-lg flex items-center justify-center flex-col">
                                <p>Your ad has been promoted!</p>
                                <select 
                                    id="promotionDuration" 
                                    className="mb-4 px-3 py-2 border border-gray-300 rounded-md text-gray-700"
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                >
                                    <option value="">Select Promotion Duration</option>
                                    <option value="3">3 Days - 169 Tokens</option>
                                    <option value="7">7 Days - 300 Tokens</option>
                                    <option value="30">1 Month - 999 Tokens</option>
                                </select>
                                <button
                                    type="submit"
                                    className="w-full bg-[#E91E63] text-white py-3 px-4 rounded-full hover:bg-[#D81B60] focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:ring-opacity-50 text-lg font-semibold"
                                    disabled={tokens < 169}
                                >
                                    Request your ad
                                </button>
                                <button onClick={togglePopup} className="mt-2 bg-red-500 text-white px-2 py-1 rounded">Close</button>
                            </div>
                        </div>
                    )}
                    <p>You have {tokens} tokens.</p>
                </form>
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

export default Admin;