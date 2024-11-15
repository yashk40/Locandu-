import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, PlusCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'; // Import the UserCard component
import {Helmet} from 'react-helmet-async'

export const Ajmer = () => {
  const [users, setUsers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Ajmer"); // Default selected city
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userIds = querySnapshot.docs.map(doc => doc.id);

        const usersData = await Promise.all(
          userIds.map(async (userId) => {
            const userDataDoc = await getDocs(collection(db, `users/${userId}/formData`));
            const nestedData = userDataDoc.docs.map(nestedDoc => ({
              id: nestedDoc.id,
              ...nestedDoc.data(),
            }));

            return { id: userId, nestedData };
          })
        );

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value); // Update selected city
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
<Helmet>
    <title>Top Call Girls in Ajmer | Safe & Discreet Meetings at Locandu</title>
    <meta name="description" content="Discover the best call girls in Ajmer at Locandu. With thousands of options, we ensure safe and discreet meetings tailored to your preferences." />
    <meta name="keywords" content="Ajmer call girls,call girls Ajmer,Ajmer escorts,safe meetings Ajmer,call girl Ajmer,Ajmer redd liight area contact number,find girlfriend in Ajmer,Ajmer girl contact,Ajmer randi no,Ajmer girls mobile number,Ajmer girls no,Ajmer girl for friendship,Ajmer randi phone number,Ajmer girl number,Ajmer girls whatsapp number,call girl in Ajmer" />
    <meta property="og:title" content="Premium Call Girls in Ajmer | Locandu" />
    <meta property="og:description" content="Explore a wide selection of call girls in Ajmer with guaranteed safety and discretion. Find your perfect match today!" />
    <meta property="og:image" content="URL_to_your_image" /> 
    <link rel="canonical" href="https://locandu.com/" />
</Helmet>
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
                <span className="flex items-center justify-center text-[#421493] transition-colors w-full sm:w-auto py-2 sm:py-0">
                  {user.email}
                </span>
                <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
                <a href="" className="flex items-center justify-center text-[#421493]  transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </a>
                <Link to="/Admin" className="flex items-center justify-center text-[#421493] px-4 py-2 rounded-full  transition-colors w-full sm:w-auto">
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Post Your Ad
                </Link>
              </div>
            ) : (
              <a href="" onClick={handleLogin} className="flex items-center justify-center text-[#421493]  transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
                <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="container">
        
        <main className=" bg-[#421493] p-8 w-screen ">
        <ul class="breadcrumb-list flex text-white justify-center" id="text-callgirl">
                <li><a href="/">Home</a></li>
                <li className="px-2" >&gt;</li>
                <li><a href="/Call-girl-Adult">Call Girls</a>
                </li><li className="px-2" >&gt;</li>
                <li><Link to="/Call-girl-Ajmer">{selectedCity}</Link></li>
            </ul>
         
          <header className="bg-white rounded-2xl shadow-md p-3 m-4 mx-auto" id="search">

            <div className="relative flex items-center px-2">
              <img src='https://cdn.nsibal.com/in/imgs/filter-icon2.svg'  />
              <select 
                value={selectedCity} 
                onChange={handleCityChange} 
                className="w-full  p-3 text-gray-700 bg-white   rounded-lg appearance-none focus:outline-none  focus:border-transparent "
              >
                
                <option value="Ajmer">Ajmer</option>
                <option value="Ambala">Ambala</option>
                <option value="agra">Agra</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="jaipur">Jaipur</option>
                <option value="lucknow">Lucknow</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="kochi">Kochi</option>
                <option value="goa">Goa</option>
                <option value="udaipur">Udaipur</option>
                <option value="agra">Agra</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="udaipur">Udaipur</option>
                <option value="nashik">Nashik</option>
                <option value="solapur">Solapur</option>
                <option value="aurangabad">Aurangabad</option>
                <option value="mangaluru">Mangaluru</option>
                <option value="mysuru">Mysuru</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="bhopal">Bhopal</option>
                <option value="indore">Indore</option>
                <option value="gwalior">Gwalior</option>
                <option value="jabalpur">Jabalpur</option>
                <option value="ujjain">Ujjain</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="cuttack">Cuttack</option>
                <option value="puducherry">Puducherry</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="amritsar">Amritsar</option>
                <option value="jalandhar">Jalandhar</option>
                <option value="patiala">Patiala</option>
                <option value="gangtok">Gangtok</option>
                <option value="namchi">Namchi</option>
                <option value="sikkim">Sikkim</option>
                <option value="agartala">Agartala</option>
                <option value="varanasi">Varanasi</option>
                <option value="kanpur">Kanpur</option>
                <option value="noida">Noida</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="faridabad">Faridabad</option>
                <option value="ambala">Ambala</option>
                <option value="hisar">Hisar</option>
                <option value="karnal">Karnal</option>
                <option value="panipat">Panipat</option>
                <option value="sonipat">Sonipat</option>
                <option value="shimla">Shimla</option>
                <option value="dharamshala">Dharamshala</option>
                <option value="manali">Manali</option>
                <option value="kullu">Kullu</option>
                <option value="solan">Solan</option>
                <option value="mandi">Mandi</option>
                <option value="bilaspur">Bilaspur</option>
                <option value="hamirpur">Hamirpur</option>
                <option value="rajkot">Rajkot</option>
                <option value="surat">Surat</option>
                <option value="vadodara">Vadodara</option>
                <option value="gandhinagar">Gandhinagar</option>
                <option value="jamnagar">Jamnagar</option>
                <option value="junagadh">Junagadh</option>
                <option value="bikaner">Bikaner</option>
                <option value="bhilwara">Bhilwara</option>
                <option value="banswara">Banswara</option>
                <option value="barmer">Barmer</option>
                <option value="ajmer">Ajmer</option>
                <option value="alwar">Alwar</option>
                <option value="sikar">Sikar</option>
                <option value="jaisalmer">Jaisalmer</option>
                <option value="kota">Kota</option>
                <option value="bhiwadi">Bhiwadi</option>
                <option value="shri ganganagar">Shri Ganganagar</option>
                <option value="malegaon">Malegaon</option>
                <option value="amravati">Amravati</option>
                <option value="kolhapur">Kolhapur</option>
                <option value="thane">Thane</option>
                <option value="navi mumbai">Navi Mumbai</option>
                <option value="aurangabad">Aurangabad</option>
                <option value="nagpur">Nagpur</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="jaipur">Jaipur</option>
                <option value="udaipur">Udaipur</option>
                <option value="lucknow">Lucknow</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="kochi">Kochi</option>
                <option value="goa">Goa</option>
                <option value="agartala">Agartala</option>
                <option value="dharmanagar">Dharmanagar</option>
                <option value="ambassa">Ambassa</option>
                <option value="kailashahar">Kailashahar</option>
                <option value="teliamura">Teliamura</option>
                <option value="sabroom">Sabroom</option>
                <option value="belonia">Belonia</option>
                <option value="sikkim">Sikkim</option>
                <option value="tripura">Tripura</option>
                <option value="telangana">Telangana</option>
                <option value="tamil nadu">Tamil Nadu</option>
                <option value="andhra pradesh">Andhra Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal pradesh">Himachal Pradesh</option>
                <option value="karnataka">Karnataka</option>
                <option value="west bengal">West Bengal</option>
                <option value="madhya pradesh">Madhya Pradesh</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="uttar pradesh">Uttar Pradesh</option>
                <option value="telangana">Telangana</option>
                <option value="sikkim">Sikkim</option>
                <option value="tripura">Tripura</option>
                <option value="puducherry">Puducherry</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="amritsar">Amritsar</option>
                <option value="jalandhar">Jalandhar</option>
                <option value="patiala">Patiala</option>
                <option value="bathinda">Bathinda</option>
                <option value="mohali">Mohali</option>
                <option value="hoshiarpur">Hoshiarpur</option>
                <option value="gangtok">Gangtok</option>
                <option value="namchi">Namchi</option>
                <option value="gyalshing">Gyalshing</option>
                <option value="mangan">Mangan</option>
                <option value="pelling">Pelling</option>
                <option value="rangpo">Rangpo</option>
                <option value="sikkim">Sikkim</option>
                <option value="yuksom">Yuksom</option>
                <option value="agartala">Agartala</option>
                <option value="udaipur">Udaipur</option>
                <option value="dharmanagar">Dharmanagar</option>
                <option value="ambassa">Ambassa</option>
                <option value="kailashahar">Kailashahar</option>
                <option value="teliamura">Teliamura</option>
                <option value="sabroom">Sabroom</option>
                <option value="belonia">Belonia</option>
                <option value="lucknow">Lucknow</option>
                <option value="kanpur">Kanpur</option>
                <option value="agra">Agra</option>
                <option value="varanasi">Varanasi</option>
                <option value="allahabad">Allahabad</option>
                <option value="bareilly">Bareilly</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="noida">Noida</option>

              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i data-feather="chevron-down" className="h-5 w-5 text-gray-500"></i>
              </div>
            </div>
          </header>
          </main>
         
         <h1 className= "text-xl px-4 sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-left md:text-center py-8 w-screen items-center justify-center text-gray-700">
          Trusted Call Girls and Sex Meetings in {selectedCity}
        </h1>

          <div className="flex justify-center w-screen ">
            <div className="block m-2" >
              {users.flatMap(user =>
                user.nestedData
                  .filter(data => data.city.toLowerCase() === selectedCity.toLowerCase()) // Case-insensitive comparison
                  .map(data => <UserCard key={data.id} userData={data} />)
              )}
              {users.every(user =>
                user.nestedData.every(data => data.city.toLowerCase() !== selectedCity.toLowerCase())
              ) && (
                <div className="text-lg text-red-600">No users found in {selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}.</div>
              )}
            </div>
          </div>
       
      </div>
    </div>
  );
};
