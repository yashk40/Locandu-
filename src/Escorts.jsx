import React from 'react'
import { Navbar } from './Navbar'
import {Link} from "react-dom"
export default function Escorts() {
  const citiesWithUrls = [
    [
      { name: 'Jaipur', url: '/Call-girl-Jaipur' },
      { name: 'Jodhpur', url: '/Call-girl-Jodhpur' },
      { name: 'Udaipur', url: '/Call-girl-Udaipur' },
      { name: 'Alwar', url: '/Call-girl-Alwar' },
      { name: 'Ajmer', url: '/Call-girl-Ajmer' },
      { name: 'Banaswara', url: '/Call-girl-Banaswara' },
      { name: 'Barmer', url: '/Call-girl-Barmer' },
      { name: 'Bharatpur', url: '/Call-girl-Bharatpur' },
      { name: 'Bhilwara', url: '/Call-girl-Bhilwara' },
      { name: 'Bhiwadi', url: '/Call-girl-Bhiwadi' },
      { name: 'Bikaner', url: '/Call-girl-Bikaner' },
      { name: 'Kota', url: '/Call-girl-Kota' },
      { name: 'Shri ganganagar', url: '/Call-girl-Shri-ganganagar' },
      { name: 'Jaisalmer', url: '/Call-girl-Jaisalmer' },
      { name: 'Sikar', url: '/Call-girl-Sikar' },
    ]


  ]



  const citiesWithUrls2 = [
    [
      { name: 'Mumbai', url: '/Call-girl-Mumbai' },
      { name: 'Pune', url: '/Call-girl-Pune' },
      { name: 'Nagpur', url: '/Call-girl-Nagpur' },
      { name: 'Thane', url: '/Call-girl-Thane' },
      { name: 'Nashik', url: '/Call-girl-Nashik' },
      { name: 'Solapur', url: '/Call-girl-Solapur' },
      { name: 'Navi Mumbai', url: '/Call-girl-Navi-Mumbai' },
      { name: 'Aurangabad', url: '/Call-girl-Aurangabad' },
      { name: 'Kolhapur', url: '/Call-girl-Kolhapur' },
      { name: 'Amravati', url: '/Call-girl-Amravati' },
      { name: 'Bhiwandi', url: '/Call-girl-Bhiwandi' },
    ]


  ]



  const citiesWithUrls3 = [
    [

  { name: 'Visakhapatnam', url: '/Call-girl-Visakhapatnam' },
  { name: 'Vijayawada', url: '/Call-girl-Vijayawada' },
  { name: 'Guntur', url: '/Call-girl-Guntur' },
  { name: 'Nellore', url: '/Call-girl-Nellore' },
  { name: 'Kakinada', url: '/Call-girl-Kakinada' },
  { name: 'Tirupati', url: '/Call-girl-Tirupati' },
  { name: 'Rajahmundry', url: '/Call-girl-Rajahmundry' },
  { name: 'Anantapur', url: '/Call-girl-Anantapur' },
  { name: 'Chittoor', url: '/Call-girl-Chittoor' },
  { name: 'Kadapa', url: '/Call-girl-Kadapa' }

    ]
  ]


  const citiesWithUrls4 = [
    [

  { name: 'Delhi', url: '/Call-girl-Delhi' },

    ]
  ]

const citiesWithUrls5=[
  [

  { name: 'Panaji', url: '/Call-girl-Panaji' },
  { name: 'Margao', url: '/Call-girl-Margao' },
  { name: 'Mapusa', url: '/Call-girl-Mapusa' },
  { name: 'Ponda', url: '/Call-girl-Ponda' },
  { name: 'Vasco da Gama', url: '/Call-girl-Vasco' },
  { name: 'Bicholim', url: '/Call-girl-Bicholim' },
  { name: 'Quepem', url: '/Call-girl-Quepem' },
  { name: 'Sanguem', url: '/Call-girl-Sanguem' }

  ]
]

const citiesWithUrls6 = [
  [
    { name: 'Ahmedabad', url: '/Call-girl-Ahmedabad' },
    { name: 'Surat', url: '/Call-girl-Surat' },
    { name: 'Vadodara', url: '/Call-girl-Vadodra' },
    { name: 'Rajkot', url: '/Call-girl-Rajkot' },
    { name: 'Bhavnagar', url: '/Call-girl-Bhavnagar' },
    { name: 'Gandhinagar', url: '/Call-girl-Gandhinagar' },
    { name: 'Jamnagar', url: '/Call-girl-Jamnagar' },
    { name: 'Junagadh', url: '/Call-girl-Junagadh' },
  ]
]

const citiesWithUrls7 = [
  [
    { name: 'Chandigarh', url: '/Call-girl-Chandigarh' },
    { name: 'Gurgaon', url: '/Call-girl-Gurgaon' },
    { name: 'Faridabad', url: '/Call-girl-Faridabad' },
    { name: 'Ambala', url: '/Call-girl-Ambala' },
    { name: 'Hisar', url: '/Call-girl-Hisar' },
    { name: 'Karnal', url: '/Call-girl-Karnal' },
    { name: 'Panipat', url: '/Call-girl-Panipat' },
    { name: 'Sonipat', url: '/Call-girl-Sonipat' },
  ]
]

const citiesWithUrls8 = [
  [
    { name: 'Shimla', url: '/Call-girl-Shimla' },
    { name: 'Dharamshala', url: '/Call-girl-Dharamshala' },
    { name: 'Manali', url: '/Call-girl-Manali' },
    { name: 'Kullu', url: '/Call-girl-Kullu' },
    { name: 'Solan', url: '/Call-girl-Solan' },
    { name: 'Mandi', url: '/Call-girl-Mandi' },
    { name: 'Bilaspur', url: '/Call-girl-Bilaspur' },
    { name: 'Hamirpur', url: '/Call-girl-Hamirpur' },
  ]
]

const citiesWithUrls9 = [
  [
    { name: 'Bengaluru', url: '/Call-girl-Bengaluru' },
    { name: 'Mysuru', url: '/Call-girl-Mysuru' },
    { name: 'Mangaluru', url: '/Call-girl-Mangaluru' },
    { name: 'Hubli', url: '/Call-girl-Hubli' },
    { name: 'Dharwad', url: '/Call-girl-Dharwad' },
    { name: 'Belagavi', url: '/Call-girl-Belagavi' },
    { name: 'Tumakuru', url: '/Call-girl-Tumakuru' },
    { name: 'Shimoga', url: '/Call-girl-Shimoga' },
  ]
]

const citiesWithUrls10 = [
  [
    { name: 'Kolkata', url: '/Call-girl-Kolkata' },
    { name: 'Howrah', url: '/Call-girl-Howrah' },
    { name: 'Durgapur', url: '/Call-girl-Durgapur' },
    { name: 'Asansol', url: '/Call-girl-Asansol' },
    { name: 'Siliguri', url: '/Call-girl-Siliguri' },
    { name: 'Bardhaman', url: '/Call-girl-Bardhaman' },
    { name: 'Malda', url: '/Call-girl-Malda' },
    { name: 'Kalyani', url: '/Call-girl-Kalyani' },
  ]
]

const citiesWithUrls11 = [
  [
    { name: 'Bhopal', url: '/Call-girl-Bhopal' },
    { name: 'Indore', url: '/Call-girl-Indore' },
    { name: 'Gwalior', url: '/Call-girl-Gwalior' },
    { name: 'Jabalpur', url: '/Call-girl-Jabalpur' },
    { name: 'Ujjain', url: '/Call-girl-Ujjain' },
    { name: 'Sagar', url: '/Call-girl-Sagar' },
    { name: 'Dewas', url: '/Call-girl-Dewas' },
    { name: 'Ratlam', url: '/Call-girl-Ratlam' },
  ]
]

const citiesWithUrls12 = [
  [
    { name: 'Bhubaneswar', url: '/Call-girl-Bhubaneswar' },
    { name: 'Cuttack', url: '/Call-girl-Cuttack' },
    { name: 'Berhampur', url: '/Call-girl-Berhampur' },
    { name: 'Rourkela', url: '/Call-girl-Rourkela' },
    { name: 'Sambalpur', url: '/Call-girl-Sambalpur' },
    { name: 'Balasore', url: '/Call-girl-Balasore' },
    { name: 'Bolangir', url: '/Call-girl-Bolangir' },
    { name: 'Kendrapara', url: '/Call-girl-Kendrapara' },
  ]
]

const citiesWithUrls13 = [
  [
    { name: 'Puducherry', url: '/Call-girl-Puducherry' },
    { name: 'Auroville', url: '/Call-girl-Auroville' },
    { name: 'Karaikal', url: '/Call-girl-Karaikal' },
    { name: 'Yanam', url: '/Call-girl-Yanam' },
    { name: 'Mahe', url: '/Call-girl-Mahe' },
    { name: 'Puducherry City', url: '/Call-girl-Puducherry-City' },
    { name: 'Villupuram', url: '/Call-girl-Villupuram' },
    { name: 'Cuddalore', url: '/Call-girl-Cuddalore' },
  ]
]

const citiesWithUrls14 = [
  [
    { name: 'Chandigarh', url: '/Call-girl-Chandigarh' },
    { name: 'Ludhiana', url: '/Call-girl-Ludhiana' },
    { name: 'Amritsar', url: '/Call-girl-Amritsar' },
    { name: 'Jalandhar', url: '/Call-girl-Jalandhar' },
    { name: 'Patiala', url: '/Call-girl-Patiala' },
    { name: 'Bathinda', url: '/Call-girl-Bathinda' },
    { name: 'Mohali', url: '/Call-girl-Mohali' },
    { name: 'Hoshiarpur', url: '/Call-girl-Hoshiarpur' },
  ]
]

const citiesWithUrls15 = [
  [
    { name: 'Gangtok', url: '/Call-girl-Gangtok' },
    { name: 'Namchi', url: '/Call-girl-Namchi' },
    { name: 'Gyalshing', url: '/Call-girl-Gyalshing' },
    { name: 'Mangan', url: '/Call-girl-Mangan' },
    { name: 'Pelling', url: '/Call-girl-Pelling' },
    { name: 'Rangpo', url: '/Call-girl-Rangpo' },
    { name: 'Sikkim', url: '/Call-girl-Sikkim' },
    { name: 'Yuksom', url: '/Call-girl-Yuksom' },
  ]
]

const citiesWithUrls16 = [
  [
    { name: 'Chennai', url: '/Call-girl-Chennai' },
    { name: 'Coimbatore', url: '/Call-girl-Coimbatore' },
    { name: 'Madurai', url: '/Call-girl-Madurai' },
    { name: 'Tiruchirappalli', url: '/Call-girl-Tiruchirappalli' },
    { name: 'Salem', url: '/Call-girl-Salem' },
    { name: 'Tirunelveli', url: '/Call-girl-Tirunelveli' },
    { name: 'Erode', url: '/Call-girl-Erode' },
    { name: 'Vellore', url: '/Call-girl-Vellore' },
  ]
]

const citiesWithUrls17 = [
  [
    { name: 'Hyderabad', url: '/Call-girl-Hyderabad' },
    { name: 'Warangal', url: '/Call-girl-Warangal' },
    { name: 'Nizamabad', url: '/Call-girl-Nizamabad' },
    { name: 'Khammam', url: '/Call-girl-Khammam' },
    { name: 'Karimnagar', url: '/Call-girl-Karimnagar' },
    { name: 'Mahbubnagar', url: '/Call-girl-Mahbubnagar' },
    { name: 'Rangareddy', url: '/Call-girl-Rangareddy' },
    { name: 'Medak', url: '/Call-girl-Medak' },
  ]
]

const citiesWithUrls18 = [
  [
    { name: 'Agartala', url: '/Call-girl-Agartala' },
    { name: 'Udaipur', url: '/Call-girl-Udaipur' },
    { name: 'Dharmanagar', url: '/Call-girl-Dharmanagar' },
    { name: 'Ambassa', url: '/Call-girl-Ambassa' },
    { name: 'Kailashahar', url: '/Call-girl-Kailashahar' },
    { name: 'Teliamura', url: '/Call-girl-Teliamura' },
    { name: 'Sabroom', url: '/Call-girl-Sabroom' },
    { name: 'Belonia', url: '/Call-girl-Belonia' },
  ]
]

const citiesWithUrls19 = [
  [
    { name: 'Lucknow', url: '/Call-girl-Lucknow' },
    { name: 'Kanpur', url: '/Call-girl-Kanpur' },
    { name: 'Agra', url: '/Call-girl-Agra' },
    { name: 'Varanasi', url: '/Call-girl-Varanasi' },
    { name: 'Allahabad', url: '/Call-girl-Allahabad' },
    { name: 'Bareilly', url: '/Call-girl-Bareilly' },
    { name: 'Ghaziabad', url: '/Call-girl-Gaziabad' },
    { name: 'Noida', url: '/Call-girl-Noida' },
  ]
]



  return (
    <>
    
    <Navbar/>   
    <div className="py-6 bg-[#421493]">
       
       <nav class="mb-4 flex items-center justify-center w-screen mt-6  space-x-1 text-sm text-white" id='text-callgirl'>
        <a href="/" class="hover:text-white">Home</a>
        <span class="text-white">›</span>
        <a href='/Call-girl-Escorts' class="text-white">Independent Escorts</a>
    </nav>

    <h1 class="mb-8 text-2xl flex items-center justify-center  font-semibold tracking-tight text-white md:text-3xl" id='texthead' >
        Escort services in most popular cities in India
    </h1>

 
  
</div>
<div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Rajasthan</h1>
      <div className="space-y-4">
        {citiesWithUrls.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Maharashtra</h1>
      <div className="space-y-4">
        {citiesWithUrls2.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Andhrapradesh</h1>
      <div className="space-y-4">
        {citiesWithUrls3.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Delhi</h1>
      <div className="space-y-4">
        {citiesWithUrls4.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>

    
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Goa</h1>
      <div className="space-y-4">
        {citiesWithUrls5.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Gujarat</h1>
      <div className="space-y-4">
        {citiesWithUrls6.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>

    
    
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Haryana</h1>
      <div className="space-y-4">
        {citiesWithUrls7.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Himachal Pradesh</h1>
      <div className="space-y-4">
        {citiesWithUrls8.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Karnataka</h1>
      <div className="space-y-4">
        {citiesWithUrls9.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>




    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">West Bengal</h1>
      <div className="space-y-4">
        {citiesWithUrls10.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Madhya Pradesh</h1>
      <div className="space-y-4">
        {citiesWithUrls11.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Puduchery</h1>
      <div className="space-y-4">
        {citiesWithUrls12.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Puduchery</h1>
      <div className="space-y-4">
        {citiesWithUrls13.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>



    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Punjab</h1>
      <div className="space-y-4">
        {citiesWithUrls14.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>



    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Sikkim</h1>
      <div className="space-y-4">
        {citiesWithUrls15.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>



    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Tamil Nadu</h1>
      <div className="space-y-4">
        {citiesWithUrls16.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>



    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Telangana</h1>
      <div className="space-y-4">
        {citiesWithUrls17.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 " id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Tripura</h1>
      <div className="space-y-4">
        {citiesWithUrls18.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-sm  mt-9 mb-9" id='table' >
      <h1 className="text-2xl font-semibold text-[#421493] mb-6">Uttarpradesh</h1>
      <div className="space-y-4">
        {citiesWithUrls19.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-x-6 gap-y-2">
            {row.map((city, cityIndex) => (
              <a
                key={`${rowIndex}-${cityIndex}`}
                href={city.url}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {city.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
        <footer className="w-full bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a
            href="#"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Terms and conditions
          </a>
          <a
            href="#"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-zinc-300 transition-colors"
          >
            Contact us
          </a>
        </nav>
        <div className="text-center text-sm text-zinc-300">
          Copyright © 2024 Locandu
        </div>
      </div>
    </footer>

</>
  )
}
