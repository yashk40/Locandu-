import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogIn, PlusCircle, Menu, X, User, List } from 'lucide-react';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDocs, deleteDoc, collection } from "firebase/firestore";

const Listing = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [submissionData, setSubmissionData] = useState([]);

    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const fetchData = async () => {
        const db = getFirestore();
        const userDocRef = doc(db, `users/${user.email.replace(/[.]/g, '_')}`);

        try {
            const submissionsSnap = await getDocs(collection(userDocRef, 'formData'));
            const submissions = submissionsSnap.docs.map(doc => ({
                ...doc.data(),
                submissionNumber: doc.id.split('_')[1]
            }));

            // Update state with submissions
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

    useEffect(() => {
        if (user && user.email) {
            fetchData();
        }
    }, [user]);

    return (
        <>
            <header className="bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md relative z-20">
                <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white" id='logo'>Locandu</h1>
                        <button className="sm:hidden text-white" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto`}>
                        {isAuthenticated ? (
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
                                <span className="flex items-center justify-center text-white">{user.email}</span>
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
                            <a href="" onClick={() => loginWithRedirect()} className="flex items-center justify-center text-white hover:text-green-100 transition-colors w-full sm:w-auto py-2 sm:py-0">
                                <LogIn className="w-5 h-5 mr-1" />
                                Login
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
                <aside className={`lg:block w-full lg:w-64 bg-white p-6 shadow-md ${isSidebarOpen ? "block" : "hidden"}`}>
                    <h2 className="text-xl font-bold mb-6">Menu</h2>
                    <nav className="space-y-2">
                        <Link to="/Listing" className="flex items-center space-x-2 text-white bg-green-500 p-2 rounded">
                            <List size={20} />
                            <span>My Listings</span>
                        </Link>
                        <Link to="/Profile" className="flex items-center space-x-2 bg-white text-gray-500 p-2 rounded  hover:text-gray-900">
                            <User size={20} />
                            <span>Wallet</span>
                        </Link>
                    </nav>
                </aside>

                <div className="flex-1 max-w-xl mx-auto py-3 w-8/12">
                    {submissionData.length === 0 ? (
                        <p className="text-gray-500 text-center">No submissions available.</p>
                    ) : (
                        submissionData.map((data) => (
                            <div key={data.submissionNumber} className="max-w-2xl mx-auto p-4 mb-4">
                                <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                                    <div className="flex items-start space-x-4 p-4">
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-lg font-semibold text-gray-900 truncate">{data.title || "Title"}</h2>
                                            <p className="text-sm text-gray-500">
                                                <span className="mr-2">{data.state}</span>
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Location: {data.city || "City"}
                                            </p>
                                            <p>
                                                {data.day}
                                            </p>
                                            <div className="mt-2">
                                                {data.imageUrl && (
                                                    <img src={data.imageUrl} alt="Submission" className="w-24 h-24 rounded-md" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 sm:px-6 flex justify-end space-x-2">
                                        <button 
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            onClick={() => deleteSubmission(data.submissionNumber)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Listing;
