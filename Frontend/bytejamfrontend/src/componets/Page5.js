import React from 'react';

const AdminPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-red-800 text-white">
                <div className="flex flex-wrap items-center justify-between px-4 py-3">
                    <h1 className="text-xl font-bold">Admin Page</h1>
                    <div className="flex space-x-4">
                        <a href="page1.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Sign Up</a>
                        <a href="page2.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Login</a>
                        <a href="page3.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Bits</a>
                        <a href="page4.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Bytes</a>
                        <a href="page5.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Pins</a>
                        <a href="page6.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Companies</a>
                        <a href="page7.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">School Rep</a>
                        <a href="page8.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Results</a>
                        <a href="page9.html" className="hover:bg-gray-300 hover:text-black px-3 py-2 rounded">Settings</a>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="p-6">
                {/* Pins Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Company Pins</h3>
                    <div className="bg-white shadow p-4 rounded mb-4">
                        <div className="flex justify-between items-center">
                            <span>Company 1 - Pin1</span>
                            <div className="space-x-2">
                                <button 
                                    onClick={() => alert('Edit functionality pending')} 
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                    Edit
                                </button>
                                <button 
                                    onClick={() => alert('Delete functionality pending')} 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                                <button 
                                    onClick={() => alert('Export functionality Pending')} 
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">School Pins</h3>
                    <div className="bg-white shadow p-4 rounded mb-4">
                        <div className="flex justify-between items-center">
                            <span>School 1 - Pin1</span>
                            <div className="space-x-2">
                                <button 
                                    onClick={() => alert('Edit functionality pending')} 
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                    Edit
                                </button>
                                <button 
                                    onClick={() => alert('Delete functionality pending')} 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                                <button 
                                    onClick={() => alert('Export functionality Pending')} 
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
