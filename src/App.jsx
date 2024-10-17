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
        <Route path="/Vadodra" element={<Vadodra />} />
        <Route path="/Guwahati" element={<Guwahati />} />
        <Route path="/Noida" element={<Noida />} />
        <Route path="/Kanpur" element={<Kanpur />} />
        <Route path="/Varanasi" element={<Varanasi />} />
        <Route path="/Ranchi" element={<Ranchi />} />
        <Route path="/Gwailor" element={<Gwailor />} />
        <Route path="/Surat" element={<Surat />} />
        <Route path="/Ludhiana" element={<Ludhiana />} />
        <Route path="/Jaipur" element={<Jaipur />} />
        <Route path="/Mumbai" element={<Mumbai />} />
        <Route path="/Kolkata" element={<Kolkata />} />
        <Route path="/Delhi" element={<Delhi />} />
        <Route path="/Chennai" element={<Chennai />} />
        <Route path="/Nashik" element={<Nashik />} />
        <Route path="/Meerut" element={<Meerut />} />
        <Route path="/Visakhapatnam" element={<Visakhapatnam />} />
        <Route path="/Jalandhar" element={<Jalandhar />} />
        <Route path="/Dehradun" element={<Dehradun />} />
        <Route path="/Lucknow" element={<Lucknow />} />
        <Route path="/Ahmedabad" element={<Ahmedabad />} />
        <Route path="/Pune" element={<Pune />} />
        <Route path="/Goa" element={<Goa />} />
        <Route path="/Nagpur" element={<Nagpur />} />
        <Route path="/Rajkot" element={<Rajkot />} />
        <Route path="/Jodhpur" element={<Jodhpur />} />
        <Route path="/Udaipur" element={<Udaipur />} />
        <Route path="/Gurugram" element={<Gurugram />} />
        <Route path="/Ambala" element={<Ambala />} />
        <Route path="/Bhopal" element={<Bhopal />} />
        <Route path="/Indore" element={<Indore />} />
        <Route path="/Chandigarh" element={<Chandigarh />} />
        <Route path="/Hyderabad" element={<Hyderabad />} />
        <Route path="/Patna" element={<Patna />} />
        <Route path="/Raipur" element={<Raipur />} />
      </Routes>
    </Router>
  );
}

export default App;
