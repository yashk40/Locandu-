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

    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');

    const cityRoutes = {
        Ahmedabad: '/Call-girl-Ahmedabad',
        Ambala: '/ambala',
        Bhopal: '/bhopal',
        // Add more cities here
        Jaipur: '/Call-girl-Jaipur',
        Jodhpur: '/Call-girl-Jodhpur',
        Udaipur: '/Call-girl-Udaipur',
        Alwar: '/Call-girl-Alwar',
        Ajmer: '/Call-girl-Ajmer',
        Banaswara: '/Call-girl-Banaswara',
        Barmer: '/Call-girl-Barmer',
        Bharatpur: '/Call-girl-Bharatpur',
        Bhilwara: '/Call-girl-Bhilwara',
        Bhiwadi: '/Call-girl-Bhiwadi',
        Bikaner: '/Call-girl-Bikaner',
        Kota: '/Call-girl-Kota',
        ShriGanganagar: '/Call-girl-Shri-ganganagar',
        Jaisalmer: '/Call-girl-Jaisalmer',
        Sikar: '/Call-girl-Sikar',
        Mumbai: '/Call-girl-Mumbai',
        Pune: '/Call-girl-Pune',
        Nagpur: '/Call-girl-Nagpur',
        Thane: '/Call-girl-Thane',
        Nashik: '/Call-girl-Nashik',
        Solapur: '/Call-girl-Solapur',
        NaviMumbai: '/Call-girl-Navi-Mumbai',
        Aurangabad: '/Call-girl-Aurangabad',
        Kolhapur: '/Call-girl-Kolhapur',
        Amravati: '/Call-girl-Amravati',
        Visakhapatnam: '/Call-girl-Visakhapatnam',
        Vijayawada: '/Call-girl-Vijayawada',
        Guntur: '/Call-girl-Guntur',
        Nellore: '/Call-girl-Nellore',
        Kakinada: '/Call-girl-Kakinada',
        Tirupati: '/Call-girl-Tirupati',
        Rajahmundry: '/Call-girl-Rajahmundry',
        Anantapur: '/Call-girl-Anantapur',
        Chittoor: '/Call-girl-Chittoor',
        Kadapa: '/Call-girl-Kadapa',
        Delhi: '/Call-girl-Delhi',
        Panaji: '/Call-girl-Panaji',
        Margao: '/Call-girl-Margao',
        Mapusa: '/Call-girl-Mapusa',
        Ponda: '/Call-girl-Ponda',
        Vasco: '/Call-girl-Vasco',
        Bicholim: '/Call-girl-Bicholim',
        Quepem: '/Call-girl-Quepem',
        Sanguem: '/Call-girl-Sanguem',
        Surat: '/Call-girl-Surat',
        Vadodra: '/Call-girl-Vadodra',
        Rajkot: '/Call-girl-Rajkot',
        Bhavnagar: '/Call-girl-Bhavnagar',
        Gandhinagar: '/Call-girl-Gandhinagar',
        Jamnagar: '/Call-girl-Jamnagar',
        Junagadh: '/Call-girl-Junagadh',
        Chandigarh: '/Call-girl-Chandigarh',
        Gurgaon: '/Call-girl-Gurgaon',
        Faridabad: '/Call-girl-Faridabad',
        Hisar: '/Call-girl-Hisar',
        Karnal: '/Call-girl-Karnal',
        Panipat: '/Call-girl-Panipat',
        Sonipat: '/Call-girl-Sonipat',
        Shimla: '/Call-girl-Shimla',
        Dharamshala: '/Call-girl-Dharamshala',
        Manali: '/Call-girl-Manali',
        Kullu: '/Call-girl-Kullu',
        Solan: '/Call-girl-Solan',
        Mandi: '/Call-girl-Mandi',
        Bilaspur: '/Call-girl-Bilaspur',
        Hamirpur: '/Call-girl-Hamirpur',
        Bengaluru: '/Call-girl-Bengaluru',
        Mysuru: '/Call-girl-Mysuru',
        Mangaluru: '/Call-girl-Mangaluru',
        Hubli: '/Call-girl-Hubli',
        Dharwad: '/Call-girl-Dharwad',
        Belagavi: '/Call-girl-Belagavi',
        Tumakuru: '/Call-girl-Tumakuru',
        Shimoga: '/Call-girl-Shimoga',
        Kolkata: '/Call-girl-Kolkata',
        Howrah: '/Call-girl-Howrah',
        Durgapur: '/Call-girl-Durgapur',
        Asansol: '/Call-girl-Asansol',
        Siliguri: '/Call-girl-Siliguri',
        Bardhaman: '/Call-girl-Bardhaman',
        Malda: '/Call-girl-Malda',
        Kalyani: '/Call-girl-Kalyani',
        Bhopal: '/Call-girl-Bhopal',
        Indore: '/Call-girl-Indore',
        Gwalior: '/Call-girl-Gwalior',
        Jabalpur: '/Call-girl-Jabalpur',
        Ujjain: '/Call-girl-Ujjain',
        Sagar: '/Call-girl-Sagar',
        Dewas: '/Call-girl-Dewas',
        Ratlam: '/Call-girl-Ratlam',
        Bhubaneswar: '/Call-girl-Bhubaneswar',
        Cuttack: '/Call-girl-Cuttack',
        Berhampur: '/Call-girl-Berhampur',
        Rourkela: '/Call-girl-Rourkela',
        Sambalpur: '/Call-girl-Sambalpur',
        Balasore: '/Call-girl-Balasore',
        Bolangir: '/Call-girl-Bolangir',
        Kendrapara: '/Call-girl-Kendrapara',
        Puducherry: '/Call-girl-Puducherry',
        Auroville: '/Call-girl-Auroville',
        Karaikal: '/Call-girl-Karaikal',
        Yanam: '/Call-girl-Yanam',
        Mahe: '/Call-girl-Mahe',
        PuducherryCity: '/Call-girl-Puducherry-City',
        Villupuram: '/Call-girl-Villupuram',
        Cuddalore: '/Call-girl-Cuddalore',
        Ludhiana: '/Call-girl-Ludhiana',
        Amritsar: '/Call-girl-Amritsar',
        Jalandhar: '/Call-girl-Jalandhar',
        Patiala: '/Call-girl-Patiala',
        Bathinda: '/Call-girl-Bathinda',
        Mohali: '/Call-girl-Mohali',
        Hoshiarpur: '/Call-girl-Hoshiarpur',
        Gangtok: '/Call-girl-Gangtok',
        Namchi: '/Call-girl-Namchi',
        Gyalshing: '/Call-girl-Gyalshing',
        Mangan: '/Call-girl-Mangan',
        Pelling: '/Call-girl-Pelling',
        Rangpo: '/Call-girl-Rangpo',
        Sikkim: '/Call-girl-Sikkim',
        Yuksom: '/Call-girl-Yuksom',
        Chennai: '/Call-girl-Chennai',
        Coimbatore: '/Call-girl-Coimbatore',
        Madurai: '/Call-girl-Madurai',
        Tiruchirappalli: '/Call-girl-Tiruchirappalli',
        Salem: '/Call-girl-Salem',
        Tirunelveli: '/Call-girl-Tirunelveli',
        Erode: '/Call-girl-Erode',
        Vellore: '/Call-girl-Vellore',
        Hyderabad: '/Call-girl-Hyderabad',
        Warangal: '/Call-girl-Warangal',
        Nizamabad: '/Call-girl-Nizamabad',
        Khammam: '/Call-girl-Khammam',
        Karimnagar: '/Call-girl-Karimnagar',
        Mahbubnagar: '/Call-girl-Mahbubnagar',
        Rangareddy: '/Call-girl-Rangareddy',
        Medak: '/Call-girl-Medak',
        Agartala: '/Call-girl-Agartala',
        Dharmanagar: '/Call-girl-Dharmanagar',
        Ambassa: '/Call-girl-Ambassa',
        Kailashahar: '/Call-girl-Kailashahar',
        Teliamura: '/Call-girl-Teliamura',
        Sabroom: '/Call-girl-Sabroom',
        Belonia: '/Call-girl-Belonia',
        Lucknow: '/Call-girl-Lucknow',
        Kanpur: '/Call-girl-Kanpur',
        Agra: '/Call-girl-Agra',
        Varanasi: '/Call-girl-Varanasi',
        Allahabad: '/Call-girl-Allahabad',
        Bareilly: '/Call-girl-Bareilly',
        Ghaziabad: '/Call-girl-Gaziabad',
        Noida: '/Call-girl-Noida',
    };





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
      <header className="  p-4  relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#421493] relative" id='logo' >Locandu</h1>
            <button className="sm:hidden text-[#421493]" id='button2455'  onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
          { isAuthenticated ? (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
               <a href='' className="flex items-center justify-center text-[#421493] transition-colors w-full sm:w-auto py-2 sm:py-0">
                {user.email}
              </a>
              <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
              <a href='' className="flex items-center justify-center text-[#421493]  transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </a>
              <Link to="/Admin" className="flex items-center justify-center bg-white  text-[#421493] px-4 py-2 rounded-full  transition-colors w-full sm:w-auto">
                <PlusCircle className="w-5 h-5 mr-1" />
                Post Your Ad
              </Link>
            </div>
          )  :(
           
                        <a href='' onClick={handleLogin} className="flex items-center justify-center text-[#421493]  transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
              <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
              Login
            </a>
          
          )}
          </div>
        </div>
      </header>
      <div className="bg-[#421493] text-white py-14 px-4 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Locandu Service</h1>
        <p className="text-xl opacity-90">Find trusted and verified profiles near you.</p>
      </div>
      <div className="max-w-6xl px-4 -mt-6" id="Container34">
            <div className="flex flex-col sm:flex-row w-full max-w-5xl items-center gap-4 p-4 bg-white rounded-2xl shadow-md">
                <div className="relative w-full sm:w-auto py-1">
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="h-12 w-full sm:min-w-[280px] bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring focus:ring-purple-300"
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="category1">Call girl</option>
                        <option value="category2">Escort</option>
                    </select>
                </div>

                <div className="relative w-full sm:w-auto">
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="h-12 w-full sm:min-w-[280px] bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring focus:ring-purple-300"
                    >
                        <option value="" disabled>Select City</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Ambala">Ambala</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bengaluru">Bengaluru</option>
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
                        <option value="ShriGanganagar">Shri Ganganagar</option>
                        <option value="Jaisalmer">Jaisalmer</option>
                        <option value="Sikar">Sikar</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Thane">Thane</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Solapur">Solapur</option>
                        <option value="NaviMumbai">Navi Mumbai</option>
                        <option value="Aurangabad">Aurangabad</option>
                        <option value="Kolhapur">Kolhapur</option>
                        <option value="Amravati">Amravati</option>
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
                        <option value="Panaji">Panaji</option>
                        <option value="Margao">Margao</option>
                        <option value="Mapusa">Mapusa</option>
                        <option value="Ponda">Ponda</option>
                        <option value="Vasco">Vasco</option>
                        <option value="Bicholim">Bicholim</option>
                        <option value="Quepem">Quepem</option>
                        <option value="Sanguem">Sanguem</option>
                        <option value="Surat">Surat</option>
                        <option value="Vadodra">Vadodra</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Gandhinagar">Gandhinagar</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Junagadh">Junagadh</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Faridabad">Faridabad</option>
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
                        <option value="Mysuru">Mysuru</option>
                        <option value="Mangaluru">Mangaluru</option>
                        <option value="Hubli">Hubli</option>
                        <option value="Dharwad">Dharwad</option>
                        <option value="Belagavi">Belagavi</option>
                        <option value="Tumakuru">Tumakuru</option>
                        <option value="Shimoga">Shimoga</option>
                        <option value="Howrah">Howrah</option>
                        <option value="Durgapur">Durgapur</option>
                        <option value="Asansol">Asansol</option>
                        <option value="Siliguri">Siliguri</option>
                        <option value="Bardhaman">Bardhaman</option>
                        <option value="Malda">Malda</option>
                        <option value="Kalyani">Kalyani</option>
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
                        <option value="PuducherryCity">Puducherry City</option>
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
                        <option value="Tiruchirappalli">Tiruchirappalli</option>
                        <option value="Salem">Salem</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Erode">Erode</option>
                        <option value="Vellore">Vellore</option>
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
                        {/* Add more cities here */}
                    </select>
                </div>

                {cityRoutes[city] ? (
                    <Link
                        to={cityRoutes[city]}
                        className="h-12 w-full sm:w-auto px-4 bg-[#421493] text-white rounded-3xl hover:bg-purple-500 transition duration-200 flex items-center justify-center"
                    >
                        Search
                    </Link>
                ) : (
                    <button
                        onClick={() => alert('Please select a valid city for redirection')}
                        className="h-12 w-full sm:w-auto px-4 bg-[#421493] text-white rounded-3xl hover:bg-purple-500 transition duration-200"
                    >
                        Search
                    </button>
                )}
            </div>
        </div>
<div className="icons-container py-8" >
        <Link to="/Call-girl-Escorts" class="icon-card border-s-sky-500">
            <div className="hearts-container  flex justify-center items-center">
                <h1 className="flex justify-center items-center font-semibold " style={{fontSize:"20px"}}><img src='https://in.nsibal.com/imgs/escorts.svg' className="px-2 h-10"/> Escorts</h1>
            </div>
        </Link >
        <Link to="/Call-girl-Adult"  class="icon-card">
        <div className="hearts-container  flex justify-center items-center">
                <h1 className="flex justify-center items-center font-semibold" style={{fontSize:"20px"}}><img src='https://in.nsibal.com/imgs/adults-meetings.svg' className="px-2 h-10"/>Call<span style={{color:'white'}}>.</span><span>Girls</span> </h1>
            </div>
        </Link>
        <div class="icon-card">
        <div className="hearts-container  flex justify-center items-center">
                <h1 className="flex justify-center items-center font-semibold" style={{fontSize:"20px"}}><img src='https://in.nsibal.com/imgs/Massage.svg' className="px-2 h-10"/>Massages</h1>
                
            </div>
        </div>
    </div>
   <div id="Banner2">
   <div className="banner bg-[#421493]">
        <div class="banner-text">Post your ad now !</div>
        <a href='/Admin' class="post-button">Post your Ad</a>
    </div>
   </div>


    <h1 className="heading py-6 mx-auto">Post your ad in all the states</h1>
    <div className="w-full max-w-6xl mx-auto px-4 py-2 space-y-8">
    <div className="flex flex-wrap gap-3 ">
      <Link
        to="/Call-girl-Jaipur"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Rajasthan
      </Link>
      <Link
        to="/Call-girl-Ratlam"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Assam
      </Link>
      <Link
        to="/Call-girl-Vadodra"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Gujarat
      </Link>
      <Link
        to="/Call-girl-Noida"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Haryana
      </Link>
      <Link
        to="/Call-girl-Hyderabad"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Karnataka
      </Link>
      <Link
        to="/Call-girl-Panipat"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Himachal Pradesh
      </Link>
      <Link
        to="/Call-girl-Mumbai"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Maharashtra
      </Link>
      <Link
        to="/Call-girl-delhi"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Delhi
      </Link>
      <Link
        to="/Call-girl-Panaji"
        className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Goa
      </Link>
    </div>

      
      <h2 className="text-2xl font-semibold text-center">Popular Searches</h2>
      <div className="flex flex-wrap gap-3">
      <Link
        to="/Call-girl-Kolkata"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Independent Escort Service
      </Link>
      <Link
        to="/Call-girl-kota"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Full Night Call Girls
      </Link>
      <Link
        to="/Call-girl-Kanpur"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
       High Profile Escorts
      </Link>
      <Link
        to="/Call-girl-indore"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Call Girls Hotel Booking
      </Link>
      <Link
        to="/Call-girl-Gwalior"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
       VIP Escorts
      </Link>
      <Link
        to="/Call-girl-Jalandhar"
         className="px-4 py-4 rounded-md bg-gray-100 border border-white hover:text-[#421493] hover:border-[#421493] transition-colors text-sm md:text-base font-semibold"
      >
        Premium Escort Service
      </Link>
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
      {/* <main className="flex-grow p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
         
        
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

<Link to="/Call-girl-Visakhapatnam">
  <LocationLink name="Visakhapatnam" />
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

<Link to="/Call-girl-Raipur">
  <LocationLink name="Raipur" />
</Link>

    </div>
          </div>
        </div>
      </main> */}

      {/* <footer className="bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">Genuine Platform For Discerning Gentlemen Worldwide</h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-center max-w-3xl mx-auto">
            Locandu is an advertising and information resource and has no connection or liability with sites or individuals mentioned here. We ONLY sell advertisement space; we are not an agency, nor are we involved in  any business. We take no responsibility for the content or actions of third-party websites or individuals that you may access following links, email, or phone contacts from this portal.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 text-center">
            Locandu - browse directory with more than 50,000 profiles to choose from.
          </p>
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
    
      </footer> */}
      {/* <p className="text-s  text-white text-center bg-black w-full py-8  font-semibold">
            © 2022 Locandu - Post Free Classifieds Ads. All Rights Reserved.
          </p> */}
    </div>
    
    </>
  )
}

// function LocationLink({ name }) {
//   return (
//     <a 
//       href={`#${name.toLowerCase()}`} 
//       className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors group"
//     >
//       <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//       <span className="text-xs sm:text-sm text-gray-700 group-hover:text-green-700 transition-colors">{name}</span>
//       <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-green-500 transition-colors" />
//     </a>
//   )
// }

// function CountryLink({ name }) {
//   return (
//     <a 
//       href={`#${name.toLowerCase()}`} 
//       className="flex items-center justify-center p-2 rounded-lg hover:bg-green-50 transition-colors group"
//     >
//       <span className="text-xs sm:text-sm text-gray-700 group-hover:text-green-700 transition-colors">{name}</span>
//     </a>
    
//   )
// }