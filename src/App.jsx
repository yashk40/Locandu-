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
import { Surat } from './Surat';
import { Ludhiana } from './Ludhiana';
import { Jaipur } from './Jaipur';
import { Mumbai } from './Mumbai';
import { Kolkata } from './Kolkata';
import { Delhi } from './Delhi';
import { Chennai } from './Chennai';
import { Nashik } from './Nashik';
import { Meerut } from './Meerut';
import { Vpatnam } from './Visakahapatnam';
import { Jalandhar } from './Jalandhar';
import { Dehradun } from './Dehradun';
import { Lucknow } from './Lucknow';
import { Ahmedabad } from './Ahmedabad';
import { Sabroom } from './Sabroom';
import { Belonia } from './Belonia';
import { Pune } from './Pune';
import { Goa } from './Goa';
import { Teliamura } from './Teliamura';
import { Nagpur } from './Nagpur';
import { Rajkot } from './Rajkot';
import { Ambassa } from './Ambassa';
import { Bengaluru } from './Bengaluru';
import { Dharmanagar } from './Dharmanagar';
import { Jodhpur } from './Jodhpur';
import { Kailashahar } from './Kailashahar';
import { Udaipur } from './Udaipur';
import { Gurugram } from './Gurugram';
import { Ambala } from './Ambala';
import { Bhopal } from './Bhopal';
import { Indore } from './Indore';
import { Chandigarh } from './Chandigarh';
import { Hyderabad } from './Hyderabad';
import { Patna } from './Call-girl-Patna';
import { Raipur } from './Raipur';
import Escorts from './Escorts';
import Adult from './Adult'
import { Ajmer } from './Ajmer';
import { Vijayawada } from './Vijayawada';
import { Guntur } from './Guntur';
import { Nellore } from './Nellore';
import { Kakinada } from './Kakinada';
import { Tirupati } from './Tirupati';
import { Rajahmundry } from './Rajahmundry';
import { Anantapur } from './Anantapur';
import { Chittoor } from './Chittoor';
import { Kadapa } from './Kadapa';
import { Thane } from './Thane';
import { Solapur } from './Solapur';
import { NaviMumbai } from './NaviMumbai';
import { Aurangabad } from './Aurangabad';
import { Kolhapur } from './Kolhapur';
import { Amravati } from './Amravati';
import { Bhiwandi } from './Bhiwandi';
import { Bhiwadi } from './Bhiwadi';
import { Alwar } from './Alwar';
import { Banaswara } from './Banaswara';
import { Barmer } from './Barmer';
import { Bharatpur } from './Bharatpur';
import { Bhilwara } from './Bhilwara';
import { Bikaner } from './Bikaner';
import { Kota } from './Kota';
import { Shriganganagar } from './Shriganganagar';
import { Jaisalmer } from './Jaisalmer';
import { Sikar } from './Sikar';
import { Panaji } from './Panaji';
import { Margao } from './Margao';
import { Mapusa } from './Mapusa';
import { Ponda } from './Ponda';
import { VascoDaGama } from './VascoDaGama';
import { Bicholim } from './Bicholim';
import { Quepem } from './Quepem';
import { Sanguem } from './Sanguem';
import { Bhavnagar } from './Bhavnagar';
import { Gandhinagar } from './Gandhinagar';
import { Jamnagar } from './Jamnagar';
import { Junagadh } from './Junagadh';
import { Gurgaon } from './Gurgaon';
import { Faridabad } from './Faridabad';
import { Hisar } from './Hisar';
import { Karnal } from './Karnal';
import { Panipat } from './Panipat';
import { Sonipat } from './Sonipat';
import { Dharamshala } from './Dharamshala';
import { Manali } from './Manali';
import { Kullu } from './Kullu';
import { Solan } from './Solan';
import { Mandi } from './Mandi';
import { Bilaspur } from './Bilaspur';
import { Hamirpur } from './Hamirpur';
import { Mysuru } from './Mysuru';
import { Mangaluru } from './Mangaluru';
import { Hubli } from './Hubli';
import { Dharwad } from './Dharwad';
import { Belagavi } from './Belagavi';
import { Tumakuru } from './Tumakuru';
import { Shimoga } from './Shimoga';
import { Howrah } from './Howrah';
import { Durgapur } from './Durgapur';
import { Asansol } from './Asansol';
import { Siliguri } from './Siliguri';
import { Bardhaman } from './Bardhaman';
import { Malda } from './Malda';
import { Gwalior } from './Gwailor';
import { Jabalpur } from './Jabalpur';
import { Ujjain } from './Ujjain';
import { Sagar } from './Sagar';
import { Dewas } from './Dewas';
import { Auroville } from './Auroville';
import { Karaikal } from './Karaikal';
import { Yanam } from './Yanam';
import { Mahe } from './Mahe';
import { PuducherryCity } from './PuducherryCity';
import { Villupuram } from './Villupuram';
import { Amritsar } from './Amritsar';
import { Patiala } from './Patiala';
import { Bathinda } from './Bathinda';
import { Mohali } from './Mohali';
import { Hoshiarpur } from './Hoshiarpur';
import { Namchi } from './Namchi';
import { Gyalshing } from './Gyalshing';
import { Mangan } from './Mangan';
import { Pelling } from './Pelling';
import { Rangpo } from './Rangpo';
import { Sikkim } from './Sikkim';
import { Yuksom } from './Yuksom';
import { Coimbatore } from './Coimbatore';
import { Madurai } from './Madurai';
import { Tiruchirappalli } from './Tiruchirappalli';
import { Salem } from './Salem';
import { Tirunelveli } from './Tirunelveli';
import { Erode } from './Erode';
import { Vellore } from './Vellore';
import { Warangal } from './Warangal';
import { Nizamabad } from './Nizamabad';
import { Khammam } from './Khammam';
import { Karimnagar } from './Karimnagar';
import { Mahbubnagar } from './Mahbubnagar';
import { Rangareddy } from './Rangareddy';
import { Medak } from './Medak';
import { Shimla } from './Shimla';
import { Allahabad } from './Allahabad';
import { Bareilly } from './Bareilly';
import {Kalyani} from './Kalyani'
import { Gaziabad } from './Gaziabad';
import { Ratlam } from './Ratlam';
import {Puducherry} from './Puducherry'
import {Cuddalore} from './Cuddalore'
import {Gangtok} from './Gangtok'
import { Agartala } from './Agartala';
import { Agra } from './Agra';
import RequestAdConfirmation from './RequestAdConfirmation';
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
        <Route path="/CalFl-girl-Ranchi" element={<Ranchi />} />
        <Route path="/Call-girl-Gwailor" element={<Gwalior/>} />
        <Route path="/Call-girl-Surat" element={<Surat />} />
        <Route path="/Call-girl-Ludhiana" element={<Ludhiana />} />
        <Route path="/Call-girl-Jaipur" element={<Jaipur />} />
        <Route path="/Call-girl-Mumbai" element={<Mumbai />} />
        <Route path="/Call-girl-Kolkata" element={<Kolkata />} />
        <Route path="/Call-girl-Delhi" element={<Delhi />} />
        <Route path="/Call-girl-Chennai" element={<Chennai />} />
        <Route path="/Call-girl-Nashik" element={<Nashik />} />
        <Route path="/Call-girl-Meerut" element={<Meerut />} />
        <Route path="/Call-girl-Visakhapatnam" element={<Vpatnam/>} />
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
        <Route path="/Call-girl-Escorts" element={<Escorts/>} />
        <Route path="/Call-girl-Adult" element={<Adult/>}/>
        <Route path="/Call-girl-Ajmer" element={<Ajmer/>}/>
        <Route path="/Call-girl-Vijayawada" element={<Vijayawada />} />
        <Route path="/Call-girl-Guntur" element={<Guntur />} />
        <Route path="/Call-girl-Nellore" element={<Nellore />} />
        <Route path="/Call-girl-Kakinada" element={<Kakinada />} />
        <Route path="/Call-girl-Tirupati" element={<Tirupati />} />
        <Route path="/Call-girl-Rajahmundry" element={<Rajahmundry />} />
        <Route path="/Call-girl-Anantapur" element={<Anantapur />} />
        <Route path="/Call-girl-Chittoor" element={<Chittoor />} />
        <Route path="/Call-girl-Kadapa" element={<Kadapa />} />
        <Route path="/Call-girl-Thane" element={<Thane />} />
        <Route path="/Call-girl-Solapur" element={<Solapur />} />
        <Route path="/Call-girl-Navi-Mumbai" element={<NaviMumbai />} />
        <Route path="/Call-girl-Aurangabad" element={<Aurangabad />} />
        <Route path="/Call-girl-Kolhapur" element={<Kolhapur />} />
        <Route path="/Call-girl-Amravati" element={<Amravati />} />
        <Route path="/Call-girl-Bhiwandi" element={<Bhiwandi />} />
        <Route path="/Call-girl-Alwar" element={<Alwar />} />
        <Route path="/Call-girl-Banaswara" element={<Banaswara />} />
        <Route path="/Call-girl-Barmer" element={<Barmer />} />
        <Route path="/Call-girl-Bharatpur" element={<Bharatpur />} />
        <Route path="/Call-girl-Bhilwara" element={<Bhilwara />} />
        <Route path="/Call-girl-Bikaner" element={<Bikaner />} />
        <Route path="/Call-girl-Kota" element={<Kota />} />
        <Route path="/Call-girl-Shri-ganganagar" element={<Shriganganagar />} />
        <Route path="/Call-girl-Jaisalmer" element={<Jaisalmer />} />
        <Route path="/Call-girl-Sikar" element={<Sikar />} />
        <Route path="/Call-girl-Panaji" element={<Panaji />} />
        <Route path="/Call-girl-Margao" element={<Margao />} />
        <Route path="/Call-girl-Mapusa" element={<Mapusa />} />
        <Route path="/Call-girl-Ponda" element={<Ponda />} />
        <Route path="/Call-girl-Vasco" element={<VascoDaGama />} />
        <Route path="/Call-girl-Bicholim" element={<Bicholim />} />
        <Route path="/Call-girl-Quepem" element={<Quepem />} />
        <Route path="/Call-girl-Sanguem" element={<Sanguem />} />
        <Route path="/Call-girl-Bhavnagar" element={<Bhavnagar />} />
        <Route path="/Call-girl-Gandhinagar" element={<Gandhinagar />} />
        <Route path="/Call-girl-Jamnagar" element={<Jamnagar />} />
        <Route path="/Call-girl-Junagadh" element={<Junagadh />} />
        <Route path="/Call-girl-Gurgaon" element={<Gurgaon />} />
        <Route path="/Call-girl-Faridabad" element={<Faridabad />} />
        <Route path="/Call-girl-Hisar" element={<Hisar />} />
        <Route path="/Call-girl-Karnal" element={<Karnal />} />
        <Route path="/Call-girl-Panipat" element={<Panipat />} />
        <Route path="/Call-girl-Sonipat" element={<Sonipat />} />
        <Route path="/Call-girl-Dharamshala" element={<Dharamshala />} />
        <Route path="/Call-girl-Manali" element={<Manali />} />
        <Route path='/Call-girl-Agra' element={<Agra/>}/>
        <Route path="/Call-girl-Kullu" element={<Kullu />} />
        <Route path="/Call-girl-Solan" element={<Solan />} />
        <Route path="/Call-girl-Mandi" element={<Mandi />} />
        <Route path="/Call-girl-Bilaspur" element={<Bilaspur />} />
        <Route path='/Call-girl-Agartala'element={<Agartala/>}/>
        <Route path="/Call-girl-Hamirpur" element={<Hamirpur />} />
        <Route path="/Call-girl-Mysuru" element={<Mysuru />} />
        <Route path="/Call-girl-Mangaluru" element={<Mangaluru />} />
        <Route path="/Call-girl-Hubli" element={<Hubli />} />
        <Route path="/Call-girl-Dharwad" element={<Dharwad />} />
        <Route path="/Call-girl-Belagavi" element={<Belagavi />} />
        <Route path="/Call-girl-Tumakuru" element={<Tumakuru />} />
        <Route path="/Call-girl-Shimoga" element={<Shimoga />} />
        <Route path="/Call-girl-Howrah" element={<Howrah />} />
        <Route path="/Call-girl-Durgapur" element={<Durgapur />} />
        <Route path="/Call-girl-Asansol" element={<Asansol />} />
        <Route path="/Call-girl-Siliguri" element={<Siliguri />} />
        <Route path="/Call-girl-Bardhaman" element={<Bardhaman />} />
        <Route path="/Call-girl-Malda" element={<Malda />} />
        <Route path="/Call-girl-Gwalior" element={<Gwalior/>} />
        <Route path="/Call-girl-Jabalpur" element={<Jabalpur />} />
        <Route path="/Call-girl-Ujjain" element={<Ujjain />} />
        <Route path="/Call-girl-Sagar" element={<Sagar />} />
        <Route path="/Call-girl-Dewas" element={<Dewas />} />
        <Route path="/Call-girl-Auroville" element={<Auroville />} />
        <Route path="/Call-girl-Karaikal" element={<Karaikal />} />
        <Route path="/Call-girl-Yanam" element={<Yanam />} />
        <Route path="/Call-girl-Mahe" element={<Mahe />} />
        <Route path="/Call-girl-Puducherry-City" element={<PuducherryCity />} />
        <Route path="/Call-girl-Villupuram" element={<Villupuram />} />
        <Route path="/Call-girl-Ludhiana" element={<Ludhiana />} />
        <Route path="/Call-girl-Amritsar" element={<Amritsar />} />
        <Route path="/Call-girl-Patiala" element={<Patiala />} />
        <Route path="/Call-girl-Bathinda" element={<Bathinda />} />
        <Route path="/Call-girl-Mohali" element={<Mohali />} />
        <Route path="/Call-girl-Hoshiarpur" element={<Hoshiarpur />} />
        <Route path="/Call-girl-Namchi" element={<Namchi/>} />
        <Route path="/Call-girl-Gyalshing" element={<Gyalshing />} />
        <Route path="/Call-girl-Mangan" element={<Mangan />} />
        <Route path="/Call-girl-Pelling" element={<Pelling />} />
        <Route path="/Call-girl-Rangpo" element={<Rangpo />} />
        <Route path="/Call-girl-Sikkim" element={<Sikkim />} />
        <Route path="/Call-girl-Yuksom" element={<Yuksom />} />
        <Route path="/Call-girl-Coimbatore" element={<Coimbatore />} />
        <Route path="/Call-girl-Madurai" element={<Madurai />} />
        <Route path="/Call-girl-Tiruchirappalli" element={<Tiruchirappalli />} />
        <Route path="/Call-girl-Salem" element={<Salem />} />
        <Route path="/Call-girl-Tirunelveli" element={<Tirunelveli />} />
        <Route path="/Call-girl-Erode" element={<Erode />} />
        <Route path="/Call-girl-Vellore" element={<Vellore />} />
        <Route path="/Call-girl-Warangal" element={<Warangal />} />
        <Route path="/Call-girl-Nizamabad" element={<Nizamabad />} />
        <Route path="/Call-girl-Khammam" element={<Khammam />} />
        <Route path="/Call-girl-Karimnagar" element={<Karimnagar />} />
        <Route path="/Call-girl-Mahbubnagar" element={<Mahbubnagar />} />
        <Route path="/Call-girl-Rangareddy" element={<Rangareddy />} />
        <Route path="/Call-girl-Medak" element={<Medak />} />
        <Route path="/Call-girl-Udaipur" element={<Udaipur />} />
        <Route path="/Call-girl-Dharmanagar" element={<Dharmanagar />} />
        <Route path="/Call-girl-Ambassa" element={<Ambassa />} />
        <Route path="/Call-girl-Kailashahar" element={<Kailashahar />} />
        <Route path="/Call-girl-Teliamura" element={<Teliamura />} />
        <Route path="/Call-girl-Sabroom" element={<Sabroom />} />
        <Route path="/Call-girl-Belonia" element={<Belonia />} />
        <Route path="/Call-girl-Kanpur" element={<Kanpur />} />
        <Route path="/Call-girl-Varanasi" element={<Varanasi />} />
        <Route path="/Call-girl-Allahabad" element={<Allahabad />} />
        <Route path="/Call-girl-Bareilly" element={<Bareilly />} />
        <Route path="/Call-girl-Gaziabad" element={<Gaziabad />} />
        <Route path="/Call-girl-Noida" element={<Noida />} />
        <Route path='/Call-girl-Shimla' element={<Shimla/>}/>
        <Route path="/Call-girl-Bhiwadi" element={<Bhiwadi/>}/>
        <Route path='/Call-girl-Bengaluru' element={<Bengaluru/>}/>
        <Route path='/Call-girl-Kolkata' element={<Kolkata/>}/>
        <Route path='/Call-girl-Kalyani' element={<Kalyani/>}/>
        <Route path='/Call-girl-Ratlam' element={<Ratlam/>}/>
        <Route path="/Call-girl-Puducherry" element={<Puducherry/>}/>
        <Route path='/Call-girl-Cuddalore' element={<Cuddalore/>}/>
        <Route path='/Call-girl-Ludhiana' element={<Ludhiana/>}/>
        <Route path='/Call-girl-Gangtok' element={<Gangtok/>}/>
        <Route path="/request-ad-confirmation" element={<RequestAdConfirmation />} />
      </Routes> 
    </Router>
  );
}

export default App;
