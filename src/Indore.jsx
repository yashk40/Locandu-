import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, PlusCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'; // Import the UserCard component
import { Helmet } from 'react-helmet-async';

export const Indore = () => {
  const [users, setUsers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Indore"); // Change to Indore
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
    setSelectedCity(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Top Call Girls in Indore | Safe & Discreet Meetings at Locandu</title>
        <meta name="description" content="Discover the best call girls in Indore at Locandu." />
        <meta name="keywords" content="Indore call girls, call girls Indore" />
        <meta property="og:title" content="Premium Call Girls in Indore | Locandu" />
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
            <li><Link to="/Call-girl-Indore">{selectedCity}</Link></li>
          </ul>
          <header className="bg-white rounded-2xl shadow-md p-3 m-4 mx-auto" id="search">
            <div className="relative flex items-center px-2">
              <img src='https://cdn.nsibal.com/in/imgs/filter-icon2.svg' />
              <select 
                value={selectedCity} 
                onChange={handleCityChange} 
                className="w-full p-3 text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:border-transparent"
              >
                <option value="Indore">Indore</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="ambala">Ambala</option>
                <option value="agra">Agra</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mumbai">Mumbai</option>
                <option value="jaipur">Jaipur</option>
                <option value="lucknow">Lucknow</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="kochi">Kochi</option>
                <option value="goa">Goa</option>
                <option value="udaipur">Udaipur</option>
                <option value="jodhpur">Jodhpur</option>
                <option value="nashik">Nashik</option>
                <option value="solapur">Solapur</option>
                <option value="malegaon">Malegaon</option>
                <option value="amravati">Amravati</option>
                <option value="Indore">Indore</option>
                <option value="thane">Thane</option>
                <option value="navi mumbai">Navi Mumbai</option>
                <option value="aurangabad">Aurangabad</option>
                <option value="nagpur">Nagpur</option>
                <option value="bikaner">Bikaner</option>
                <option value="banswara">Banswara</option>
                <option value="barmer">Barmer</option>
                <option value="ajmer">Ajmer</option>
                <option value="alwar">Alwar</option>
                {/* Add other options as needed */}
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