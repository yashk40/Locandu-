
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogIn, PlusCircle, Menu, X, User, List, Edit } from 'lucide-react';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDocs, deleteDoc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore";



const Listing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [submissionData, setSubmissionData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentSubmission, setCurrentSubmission] = useState(null);
    const [availableTokens, setAvailableTokens] = useState(0);

    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
    const [Date,NewDate]=useState(1)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const fetchData = async () => {
        const db = getFirestore();
        const userDocRef = doc(db, `users/${user.email.replace(/[.]/g, '_')}`);

        try {
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setAvailableTokens(userData.tokens || 0);
            }

            const submissionsSnap = await getDocs(collection(userDocRef, 'formData'));
            const submissions = submissionsSnap.docs.map(doc => ({
                ...doc.data(),
                submissionNumber: doc.id.split('_')[1]
            }));

            console.log("Fetched submissions: ", submissions);
            setSubmissionData(submissions);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const deleteSubmission = async (submissionNumber) => {
        const db = getFirestore();
        const docRef = doc(db, `users/${user.email.replace(/[.]/g, '_')}/formData/submission_${submissionNumber}`);
        
        try {
            await deleteDoc(docRef);
            setSubmissionData(prev => prev.filter(submission => submission.submissionNumber !== submissionNumber));
            console.log("Submission deleted successfully");
        } catch (error) {
            console.error("Error deleting submission: ", error);
        }
    };

    const editSubmission = (submission) => {
        setCurrentSubmission(submission);
        setIsEditing(true);
    };

    const saveSubmission = async (updatedData) => {
        const db = getFirestore();
        const docRef = doc(db, `users/${user.email.replace(/[.]/g, '_')}/formData/submission_${updatedData.submissionNumber}`);
        
        try {
         
            await setDoc(docRef, updatedData);
            setSubmissionData(prev => prev.map(submission => submission.submissionNumber === updatedData.submissionNumber ? updatedData : submission));
            console.log("Submission updated successfully");
            setIsEditing(false);
            setCurrentSubmission(null);
        } catch (error) {
            console.error("Error updating submission: ", error);
        }
    };

    const promoteListing = async (submissionNumber, cost) => {
        const db = getFirestore();
        const userDocRef = doc(db, `users/${user.email.replace(/[.]/g, '_')}`);

        if (availableTokens >= cost) {
            try {
                const newTokenCount = availableTokens - cost;
                setAvailableTokens(newTokenCount);

                await setDoc(userDocRef, { tokens: newTokenCount }, { merge: true });

                const submissionDocRef = doc(userDocRef, 'formData', `submission_${submissionNumber}`);
                await setDoc(submissionDocRef, { promoted: true, visible: true }, { merge: true });

                fetchData();

                console.log(`Listing ${submissionNumber} promoted successfully!`);
            } catch (error) {
                console.error("Error promoting listing: ", error);
            }
        } else {
            console.log("Not enough tokens to promote this listing.");
        }
    };

    useEffect(() => {
        if (user && user.email) {
            fetchData();
        }
    }, [user]);


    // fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   // Extract the datetime string
    //   const datetime = data.datetime; // Make sure to use "datetime" exactly as it is in the API response
  
    //   // Extract only the day number and print the last two digits
    //   const day = datetime.split('-')[2].split('T')[0]; // Get the day part from the date
    //   const lastTwoDigits = day.slice(-2); // Get the last two digits of the day
    //   console.log('Last Two Digits of Day:', lastTwoDigits);
    //   NewDate(lastTwoDigits);
    // })
    // .catch(error => {
    //   console.error('Error fetching the API:', error);
    // });

    return (
        <>
            <header className="bg-gradient-to-r text-[#421493] p-4 shadow-md relative z-20">
                <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#421493]" id='logo'>Locandu</h1>
                        <button className="sm:hidden text-[#421493]" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
                        {isAuthenticated ? (
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                                <span className="flex items-center justify-center text-[#421493]">{user.email}</span>
                                <Link to="/Profile" className="text-[#421493] flex items-center justify-center">Profile</Link>
                                <a href="" className="flex items-center justify-center text-[#421493] w-full sm:w-auto py-2 sm:py-0 cursor-pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                     Log Out
                                </a>
                                <Link to="/Admin" className="flex items-center justify-center bg-white text-[#421493] px-4 py-2 rounded-full w-full sm:w-auto">
                                    <PlusCircle className="w-5 h-5 mr-1" />
                                    Post Your Ad
                                </Link>
                            </div>
                        ) : (
                            <a href="" onClick={() => loginWithRedirect()} className="flex items-center justify-center text-[#421493] hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                                <LogIn className="w-5 h-5 mr-1" />
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
                <aside className={`lg:block w-full lg:w-64 bg-white p-6 shadow-md`}>
                    <h2 className="text-xl font-bold mb-6">Menu</h2>
                    <nav className="space-y-2">
                        <Link to="/Listing" className="flex items-center space-x-2 text-white bg-[#421493] p-2 rounded">
                            <List size={20} />
                            <span>My Listings</span>
                        </Link>
                        <Link to="/Profile" className="flex items-center space-x-2 bg-white text-gray-500 p-2 rounded hover:text-gray-900">
                            <User size={20} />
                            <span>Wallet</span>
                        </Link>
                    </nav>
                </aside>

                <div className="flex-1 max-w-xl mx-auto py-3 w-8/12">
                {submissionData.length === 0 ? (
    <p className="text-gray-500 text-center">No submissions available.</p>
) : (
    submissionData.filter(submission => submission).map((data) => {
//         const presentDate = Date; // Use the state variable for the current date
//         console.log(presentDate)
//         const givenDate = data.createdAt; // Example input
// const day = givenDate.split('-')[2]; // Extracting the day part
// const lastTwoDigits = day.slice(-2); // Getting the last two digits (though the day is already 2 digits)
// console.log(lastTwoDigits); // Output: "22"

        
//   const gap = (lastTwoDigits - presentDate) ; 
//         console.log("gap is",gap)
        
//         const remainingDays = data.day - gap
//         console.log(remainingDays)
//         if (remainingDays <= 0) {
//             deleteSubmission(data.submissionNumber); // Call delete function
//             return null; // Skip rendering this submission
//         }

        return (
            <div key={data.submissionNumber} className="max-w-2xl mx-auto p-4 mb-4">
                <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="flex items-start space-x-4 p-4">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg font-semibold text-gray-900 truncate">Title: {data.title || "Title"}</h2>
                            <p className="text-sm text-gray-500">
                                <span className="mr-2">State: {data.state}</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                City: {data.city || "City"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Gender: {data.gender || "Gender"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Telegram: {data.telegram || "Telegram"}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Whatsapp: {data.whatsapp || "Whatsapp"}
                            </p>
                            <div className="max-h-24 overflow-y-auto">
                                <p className="text-sm text-gray-500 mt-1">
                                    Description: {data.description || "Description not available"}
                                </p>
                            </div>
                            <p>
                               Day {data.day}
                            </p>
                            <p>Remaining Day: {data.day}</p>
                            <div className="mt-2">
                                {data.imageUrl && (
                                    <img src={data.imageUrl} alt="Submission" className="w-24 h-24 rounded-md" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center">
                        <span className="text-gray-700">Available Tokens: {availableTokens}</span>
                        <div className="flex space-x-2">
                            <button 
                                className="px-4 py-2 bg-[#421493] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#421493] focus:ring-offset-2"
                                onClick={() => deleteSubmission(data.submissionNumber)}
                            >
                                Delete
                            </button>
                            <button 
                                className="px-4 py-2 bg-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                                onClick={() => editSubmission(data)}
                            >
                                <Edit className="w-4 h-4 mr-1" /> Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
)}
                      
                    {isEditing && currentSubmission && (
                        <EditForm 
                            submission={currentSubmission} 
                            onSave={saveSubmission} 
                            onCancel={() => setIsEditing(false)} 
                        />
                    )}
                </div>
            </div>
        </>
    );
};

const EditForm = ({ submission, onSave, onCancel }) => {
    const [formData, setFormData] = useState(submission);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Edit Submission</h2>
            Title:
            <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="Title" 
                className="border p-2 mb-2 w-full"
            />
            Description:
            <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Description" 
                className="border p-2 mb-2 w-full"
            />
            State:
            <input 
                type="text" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                placeholder="State" 
                className="border p-2 mb-2 w-full"
            />
            City:
            <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                placeholder="City" 
                className="border p-2 mb-2 w-full"
            />
            Day:
            <input 
                type="text" 
                name="day" 
                value={formData.day} 
                onChange={handleChange} 
                placeholder="Day" 
                className="border p-2 mb-2 w-full"
            />
            Gender:
            <input 
                type="text" 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                placeholder="Gender" 
                className="border p-2 mb-2 w-full"
            />
            Telegram:
            <input 
                type="text" 
                name="telegram" 
                value={formData.telegram} 
                onChange={handleChange} 
                placeholder="Telegram" 
                className="border p-2 mb-2 w-full"
            />
            Whatsapp:
            <input 
                type="text" 
                name="whatsapp" 
                value={formData.whatsapp} 
                onChange={handleChange} 
                placeholder="Whatsapp" 
                className="border p-2 mb-2 w-full"
            />
            <div className="mt-2">
                <button type="submit" className="px-4 py-2 bg-[#421493] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#421493] focus:ring-offset-2">
                    Save
                </button>
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Listing;