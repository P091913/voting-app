import React from 'react';


{/*Page: 5*/}



const PinsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            
            {/* Content */}
            <div className="p-6">
                {/* Pins Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Company Pins</h3>
                    <div className="bg-white shadow p-4 rounded mb-4">
                        <div className="flex justify-between items-center">
                            <span>Company 1 - Pin1</span>
                            <div className="space-x-2">
                                
                            {/*Edits Will Be Made Here With Backend*/}    
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

export default PinsPage;
