import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ userData }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/form-detail', { state: { formData: userData } }); // Pass the data to the new page
  };

  const { imageUrl, title, description, city, mobile, Gender } = userData;

  const truncateDescription = (description, limit) => {
    const words = description.split(' ');
    return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : description;
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full cursor-pointer"
      onClick={handleCardClick} // Handle click to navigate
    >
      <div className="flex p-4">
        <div className="w-1/3">
          <img 
            src={imageUrl || "/placeholder.svg?height=100&width=100"} 
            alt={title} 
            className="w-full h-auto rounded-lg object-cover" 
            height="auto"
            width="full"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{truncateDescription(description, 20)}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span>{city || "Location not specified"}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 text-right">
        <span className="text-sm font-medium text-gray-700">Contact: {mobile || "N/A"}</span>
      </div>
      
    </div>
  );
};

export default UserCard;
