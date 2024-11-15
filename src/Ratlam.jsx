import React, { useEffect, useState } from 'react';
import { db } from './Firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { LogIn, PlusCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard'; // Import the UserCard component
import { Helmet } from 'react-helmet-async';

export const Ratlam = () => {
  const [users, setUsers] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Ratlam"); // Default selected city
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
        <title>Top Call Girls in Ratlam | Safe & Discreet Meetings at Locandu</title>
        <meta name="description" content="Discover the best call girls in Ratlam at Locandu. With thousands of options, we ensure safe and discreet meetings tailored to your preferences." />
        <meta name="keywords" content="Ratlam call girls, call girls Ratlam, Ratlam escorts, safe meetings Ratlam" />
      </Helmet>
      <header className="bg-gradient-to-r p-4 shadow-md relative z-20">
        <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#421493] relative" id='logo'>Locandu</h1>
            <button className="sm:hidden text-[#421493]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* ... other header content ... */}
        </div>
      </header>
      <div className="container">
        <main className="bg-[#421493] p-8 w-screen">
          <ul className="breadcrumb-list flex text-white justify-center" id="text-callgirl">
            <li><a href="/">Home</a></li>
            <li className="px-2">&gt;</li>
            <li><a href="/Call-girl-Adult">Call Girls</a></li>
            <li className="px-2">&gt;</li>
            <li><Link to="/Call-girl-Ratlam">{selectedCity}</Link></li>
          </ul>
          <header className="bg-white rounded-2xl shadow-md p-3 m-4 mx-auto" id="search">
            <div className="relative flex items-center px-2">
              <img src='https://cdn.nsibal.com/in/imgs/filter-icon2.svg' />
              <select 
                value={selectedCity} 
                onChange={handleCityChange} 
                className="w-full p-3 text-gray-700 bg-white rounded-lg appearance-none focus:outline-none focus:border-transparent"
              >
                <option value="Ratlam">Ratlam</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Indore">Indore</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Sagar">Sagar</option>
                <option value="Dewas">Dewas</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Auroville">Auroville</option>
                <option value="Karaikal">Karaikal</option>
                <option value="Yanam">Yanam</option>
                <option value="Mahe">Mahe</option>
                <option value="Puducherry City">Puducherry City</option>
                <option value="Villupuram">Villupuram</option>
                <option value="Cuddalore">Cuddalore</option>
                {/* ... other options ... */}
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