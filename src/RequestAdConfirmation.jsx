import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const RequestAdConfirmation = () => {
    const navigate = useNavigate();

    const handlePromoteAd = () => {
        // Logic to promote the ad can be added here
        alert("Ad promotion logic goes here!");
        // Optionally navigate to the Promote Ad page
        navigate('/promote-your-ad');
    };

    return (
        <>
            <Helmet>
                <title>Confirm Your Ad Request</title>
                <meta name="description" content="Please confirm your ad request." />
            </Helmet>
            <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-3xl shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Confirm Your Ad Request</h1>
                <p>Are you sure you want to request your ad? Please confirm to proceed.</p>
                <div className="mt-4">
                    <button 
                        onClick={handlePromoteAd} 
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        Promote Ad
                    </button>
                </div>
            </div>
        </>
    );
};

export default RequestAdConfirmation; 