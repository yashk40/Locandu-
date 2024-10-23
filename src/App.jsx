import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Admin from './Admin';
import Profile from './Profile';
import Listing from './Listing';
import AdminPanel from './TokenManager';
import { Pass } from './Pass';
import { Final } from './Final';
import FormDetail from './FormDetail';
import { Navbar } from './Navbar';
import { About } from './About';
import { Contact } from './Contact';
import { Terms } from './Terms';
import { Privacy } from './Privacy';
import { Vadodra } from './Vadodra';
import { Guwahati } from './Guwahati';
import { Noida } from './Noida';
import { Kanpur } from './Kanpur';
import { Varanasi } from './Varanasi';
import { Ranchi } from './Ranchi';
import { Gwailor } from './Gwailor';
import { Surat } from './Surat';
import { Ludhiana } from './Ludhiana';
import { Jaipur } from './Jaipur';
import { Mumbai } from './Mumbai';
import { Kolkata } from './Kolkata';
import { Delhi } from './Delhi';
import { Chennai } from './Chennai';
import { Nashik } from './Nashik';
import { Meerut } from './Meerut';
import { Visakhapatnam } from './Visakahapatnam';
import { Jalandhar } from './Jalandhar';
import { Dehradun } from './Dehradun';
import { Lucknow } from './Lucknow';
import { Ahmedabad } from './Ahmedabad';
import { Pune } from './Pune';
import { Goa } from './Goa';
import { Nagpur } from './Nagpur';
import { Rajkot } from './Rajkot';
import { Jodhpur } from './Jodhpur';
import { Udaipur } from './Udaipur';
import { Gurugram } from './Gurugram';
import { Ambala } from './Ambala';
import { Bhopal } from './Bhopal';
import { Indore } from './Indore';
import { Chandigarh } from './Chandigarh';
import { Hyderabad } from './Hyderabad';
import { Patna } from './Patna';
import { Raipur } from './Raipur';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/Pass" element={<Pass />} />
        <Route path="/Final" element={<Final />} />
        <Route path="/form-detail" element={<FormDetail />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Call-girl-Vadodra" element={<Vadodra />} />
        <Route path="/Call-girl-Guwahati" element={<Guwahati />} />
        <Route path="/Call-girl-Noida" element={<Noida />} />
        <Route path="/Call-girl-Kanpur" element={<Kanpur />} />
        <Route path="/Call-girl-Varanasi" element={<Varanasi />} />
        <Route path="/Call-girl-Ranchi" element={<Ranchi />} />
        <Route path="/Call-girl-Gwailor" element={<Gwailor />} />
        <Route path="/Call-girl-Surat" element={<Surat />} />
        <Route path="/Call-girl-Ludhiana" element={<Ludhiana />} />
        <Route path="/Call-girl-Jaipur" element={<Jaipur />} />
        <Route path="/Call-girl-Mumbai" element={<Mumbai />} />
        <Route path="/Call-girl-Kolkata" element={<Kolkata />} />
        <Route path="/Call-girl-Delhi" element={<Delhi />} />
        <Route path="/Call-girl-Chennai" element={<Chennai />} />
        <Route path="/Call-girl-Nashik" element={<Nashik />} />
        <Route path="/Call-girl-Meerut" element={<Meerut />} />
        <Route path="/Call-girl-Visakhapatnam" element={<Visakhapatnam />} />
        <Route path="/Call-girl-Jalandhar" element={<Jalandhar />} />
        <Route path="/Call-girl-Dehradun" element={<Dehradun />} />
        <Route path="/Call-girl-Lucknow" element={<Lucknow />} />
        <Route path="/Call-girl-Ahmedabad" element={<Ahmedabad />} />
        <Route path="/Call-girl-Pune" element={<Pune />} />
        <Route path="/Call-girl-Goa" element={<Goa />} />
        <Route path="/Call-girl-Nagpur" element={<Nagpur />} />
        <Route path="/Call-girl-Rajkot" element={<Rajkot />} />
        <Route path="/Call-girl-Jodhpur" element={<Jodhpur />} />
        <Route path="/Call-girl-Udaipur" element={<Udaipur />} />
        <Route path="/Call-girl-Gurugram" element={<Gurugram />} />
        <Route path="/Call-girl-Ambala" element={<Ambala />} />
        <Route path="/Call-girl-Bhopal" element={<Bhopal />} />
        <Route path="/Call-girl-Indore" element={<Indore />} />
        <Route path="/Call-girl-Chandigarh" element={<Chandigarh />} />
        <Route path="/Call-girl-hyderabad" element={<Hyderabad />} />
        <Route path="/Call-girl-Patna" element={<Patna />} />
        <Route path="/Call-girl-Raipur" element={<Raipur />} />
      </Routes>
    </Router>
  );
}

export default App;
