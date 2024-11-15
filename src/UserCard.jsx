import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ userData }) => {
  console.log(userData);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/form-detail', { state: { formData: userData } }); // Pass the data to the new page
  };

  const { imageUrl, title, description, city, mobile, Gender,whatsapp,telegram } = userData;

  const truncateDescription = (description) => {
    if (!description) return ""; // Check if description is empty or undefined
    let limit; // Declare limit variable
    if (window.innerWidth <= 500) {
      limit = 5; // Set limit to 10 for max 600px
    } else {
      limit = 30; // Set limit to 30 otherwise
    }
    const words = description.split(' ');
    return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : description;
  };

  const truncateTitle = (title) => {
    if (!title) return ""; // Check if title is empty or undefined
    let limit; // Declare limit variable
    if (window.innerWidth <= 500) {
      limit = 5; // Set limit to 5 words for small screens
    } else {
      limit = 15; // Set limit to 15 words otherwise
    }
    const words = title.split(' ');
    return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : title;
  };

  return (
    <div 
    id='user-card-cont'
      className="bg-white border-2 border-[#421493] rounded-xl shadow-lg overflow-hidden h-60 cursor-pointer mt-9 w-full"
      onClick={handleCardClick} // Handle click to navigate
    >
      <div className="flex">
       
        <div >
          <img 
            src={imageUrl || "/placeholder.svg?height=100&width=100"} 
            alt={title} 
            className="w-42 h-60 rounded-lg object-cover" // Changed from object-cover to object-contain
            style={{borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}}
            id='image-recvie'
          />
        </div>
 
        <div className=" pl-4" id="width-inc"  >
          
          <h2 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 py-2">{truncateTitle(title)}</h2>
          <p className="text-sm mt-1 text-left" id='Descrept-info'>{truncateDescription(description)}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span className='flex' ><img src='https://cdn.nsibal.com/in/imgs/location.svg' /> {city || "Location not specified"}</span>       
          </div>


     
          <div className="item-price flex justify-end w-full px-3">
          



          
  <a 
    href={`https://wa.me/${whatsapp}?text=Hi`}
    className="item-btn px-2 bg-green-500 hover:bg-green-600 transition duration-200"
    style={{color: "#fff"}} 
    target="_blank" 
    rel="noopener noreferrer"
    id="whatsapp"
  >
    <div className="" id='texting'> 
      <img 
        width="50" 
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
        alt="WhatsApp Icon"
      />
      <span className="hidden sm:inline">Chat</span>
    </div>
  </a>

  <a 
    href={telegram}
    className="item-btn bg-sky-400 hover:bg-blue-600 transition duration-200 ml-3"
    style={{color: "#fff"}} 
    target="_blank" 
    rel="noopener noreferrer"
    id='telegram'
  >
    <div className="justify-center items-center block px-1 py-2">
      <img 
        width="45"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" 
        alt="Telegram Icon"
        className='px-1'
      />
      <span className="hidden sm:inline">Telegram</span>
    </div> 
  </a>

  
  <a 
    href={`tel:${mobile}`}
    className="item-btn bg-blue-500 hover:bg-blue-600 transition duration-200 ml-3"
    style={{color: "#fff"}} 
    id="telegram"
  >
    <div className="justify-center items-center block px-1 py-2">
      <img 
        width="45"
        src="/public/phone-call-svgrepo-com.svg" 
        alt="Phone Icon"
        className='px-1'
      />
      <span className="hidden sm:inline">Call</span>
    </div> 
  </a>
  </div>
  
        </div>
      </div>
{/*       
      <div className=" px-4 py-3 text-right">
        <span className="text-sm font-medium text-gray-700">Contact: {mobile || "N/A"}</span>
      </div>
       */}
    </div>
  );
};

export default UserCard;
