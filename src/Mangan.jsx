import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, PlusCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'; // Import the UserCard component
import { Helmet } from 'react-helmet-async';

export const Mangan = () => {
  const [users, setUsers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mangan"); // Default selected city
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
        <title>Top Call Girls in Mangan | Safe & Discreet Meetings at Locandu</title>
        <meta name="description" content="Discover the best call girls in Mangan at Locandu. With thousands of options, we ensure safe and discreet meetings tailored to your preferences." />
        <meta name="keywords" content="Mangan call girls, call girls Mangan, Mangan escorts, safe meetings Mangan" />
        <meta property="og:title" content="Premium Call Girls in Mangan | Locandu" />
        <meta property="og:description" content="Explore a wide selection of call girls in Mangan with guaranteed safety and discretion. Find your perfect match today!" />
        <meta property="og:image" content="URL_to_your_image" />
        <link rel="canonical" href="https://locandu.com/" />
      </Helmet>
      <header className="bg-gradient-to-r p-4 shadow-md relative z-20">
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
                <a href="" className="flex items-center justify-center text-[#421493] transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </a>
                <Link to="/Admin" className="flex items-center justify-center text-[#421493] px-4 py-2 rounded-full transition-colors w-full sm:w-auto">
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Post Your Ad
                </Link>
              </div>
            ) : (
              <a href="" onClick={handleLogin} className="flex items-center justify-center text-[#421493] transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
                <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="container">
        <main className="bg-[#421493] p-8 w-screen">
          <ul className="breadcrumb-list flex text-white justify-center" id="text-callgirl">
            <li><a href="/">Home</a></li>
            <li className="px-2">&gt;</li>
            <li><a href="/Call-girl-Adult">Call Girls</a></li>
            <li className="px-2">&gt;</li>
            <li><Link to="/Call-girl-Mangan">{selectedCity}</Link></li>
          </ul>
          <header className="bg-white rounded-2xl shadow-md p-3 m-4 mx-auto" id="search">
            <div className="relative flex items-center px-2">
              <img src='https://cdn.nsibal.com/in/imgs/filter-icon2.svg' />
              <select 
                value={selectedCity} 
                onChange={handleCityChange} 
                className="w-full p-3 text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:border-transparent"
              >
                <option value="Mangan">Mangan</option>
                <option value="Barmer">Barmer</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Agra">Agra</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kochi">Kochi</option>
                <option value="Goa">Goa</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Nashik">Nashik</option>
                <option value="Solapur">Solapur</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Mangaluru">Mangaluru</option>
                <option value="Mysuru">Mysuru</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Indore">Indore</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Jalandhar">Jalandhar</option>
                <option value="Patiala">Patiala</option>
                <option value="Gangtok">Gangtok</option>
                <option value="Yuksom">Yuksom</option>
                <option value="Gyalshing">Gyalshing</option>
                <option value="Pelling">Pelling</option>
                <option value="Rangpo">Rangpo</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Agartala">Agartala</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Noida">Noida</option>
                <option value="Ghaziabad">Ghaziabad</option>
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
                <option value="Rajkot">Rajkot</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Bikaner">Bikaner</option>
                <option value="Bhilwara">Bhilwara</option>
                <option value="Banswara">Banswara</option>
                <option value="Ajmer">Ajmer</option>
                <option value="Alwar">Alwar</option>
                <option value="Sikar">Sikar</option>
                <option value="Jaisalmer">Jaisalmer</option>
                <option value="Kota">Kota</option>
                <option value="Bhiwadi">Bhiwadi</option>
                <option value="Shri Ganganagar">Shri Ganganagar</option>
                <option value="Malegaon">Malegaon</option>
                <option value="Amravati">Amravati</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Thane">Thane</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Bareilly">Bareilly</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i data-feather="chevron-down" className="h-5 w-5 text-gray-500"></i>
              </div>
            </div>
          </header>
        </main>
        <h1 className="text-xl px-4 sm:text-3xl md:text-2xl lg:text-4xl font-semibold text-left md:text-center py-8 w-screen items-center justify-center text-gray-700">
          Trusted Call Girls and Sex Meetings in {selectedCity}
        </h1>
        <div className="flex justify-center w-screen">
          <div className="block m-2">
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