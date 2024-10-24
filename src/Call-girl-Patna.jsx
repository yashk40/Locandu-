import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, PlusCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'; // Import the UserCard component
import {Helmet} from 'react-helmet-async'
export const Patna = () => {
  const [users, setUsers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Patna"); // Default selected city
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
        <title>Locandu | Call Girls in Patna - Safe & Real Meetings</title>
        <meta name="description" content="Best call girls in patna, available here at Locandu, find call girls in patna with thousand of choices multiple girls are available" />
        <meta name="keywords" content="Patna call girls,call girls Patna,Patna escorts,safe meetings Patna,call girl patna,patna redd liight area contact number,find girlfriend in patna,patna girl contact,patna randi no,patna girls mobile number,patna girls no,patna girl for friendship,patna randi phone number,patna girl number,patna girls whatsapp number,call girl in patna" />
        <meta property="og:title" content="Locandu | Call Girls in Patna" />
        <meta property="og:image" content="URL_to_your_image" />
        <link rel="canonical" href={`https://locandu.com/`} /> 
      </Helmet>

      <a href="https://www.ontoplist.com/beauty-websites/" style={{display:"none"}} >Check</a>
      <header className="bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-2xl sm:text-3xl font-bold text-white relative" id='logo'>Locandu</p>
            <button className="sm:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
            {isAuthenticated ? (
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                <span className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                  {user.email}
                </span>
                <Link to="/Profile" className="text-white flex items-center justify-center">Profile</Link>
                <a href=""  className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </a>
                <Link to="/Admin" className="flex items-center justify-center bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors w-full sm:w-auto">
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Post Your Ad
                </Link>
              </div>
            ) : (
              <a href=""  onClick={handleLogin} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0 cursor-pointer">
                <LogIn className="w-5 h-5 mr-1 cursor-pointer" />
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <main className="bg-white rounded-lg shadow-lg p-8">
          <header className="bg-white rounded-lg shadow-md p-6 mb-16">
            <h1 className="text-2xl font-bold mb-4" >Explore Call girls in {selectedCity}</h1>
            <div className="relative">
              <select 
                value={selectedCity} 
                onChange={handleCityChange} 
                className="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="patna">Patna</option>
                <option value="agra">Ranchi</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="jaipur">Jaipur</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="lucknow">Lucknow</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="kochi">Kochi</option>
                <option value="goa">Goa</option>
                <option value="varanasi">Varanasi</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i data-feather="chevron-down" className="h-5 w-5 text-gray-500"></i>
              </div>
            </div>
          </header>
          <div className="flex flex-wrap gap-12 ml-5">
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
        </main>
      </div>
      <footer className="bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-800">Genuine Platform For Discerning Gentlemen Worldwide</h2>
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


          
          </div>
        
        </div>
    
      </footer>
    </div>
  );
};