import React from "react";

const ResultsPage = () => {
    const resultsData = [
        {
            title: "High School teams top three",
            results: [
                { name: "Team #1", votes: 10 },
                { name: "Team #2", votes: 9 },
                { name: "Team #3", votes: 9 },
            ],
        },
        {
            title: "The College teams top three",
            results: [
                { name: "Team #1", votes: 9 },
                { name: "Team #2", votes: 5 },
                { name: "Team #3", votes: 3 },
            ],
        },
        {
            title: "The top three companies were",
            results: [
                { name: "Company #1", votes: 8 },
                { name: "Company #2", votes: 7 },
                { name: "Company #3", votes: 6 },
            ],
        },
        {
            title: "The top three School Reps were",
            results: [
                { name: "Rep #1", votes: 9 },
                { name: "Rep #2", votes: 8 },
                { name: "Rep #3", votes: 7 },
            ],
        },
        {
            title: "Student Choice Top Three",
            results: [
                { name: "Team #1", votes: 8 },
                { name: "Team #2", votes: 6 },
                { name: "Team #3", votes: 4 },
            ],
        },
        {
            title: "Bits Top Three",
            results: [
                { name: "Team #1", votes: 3 },
                { name: "Team #2", votes: 5 },
                { name: "Team #3", votes: 7 },
            ],
        },
        {
            title: "Bytes Top Three",
            results: [
                { name: "Team #1", votes: 6 },
                { name: "Team #2", votes: 6 },
                { name: "Team #3", votes: 6 },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-yellow-100 p-8">
            {/* Header */}
            <div className="bg-brown-900 text-white py-4 px-8 rounded-md mb-4">
                <h1 className="text-3xl font-bold">Admin Page - Results</h1>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resultsData.map((section, index) => (
                    <div key={index} className="rounded-2xl bg-white shadow-xl p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h2>
                        <ul className="space-y-2">
                            {section.results.map((item, idx) => (
                                <li key={idx} className="flex justify-between text-lg">
                                    <span>{item.name}</span>
                                    <span className="font-semibold">[{item.votes} votes]</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Buttons Section */}
            <div className="mt-8 flex justify-around">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Show All</button>
                <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">Export</button>
                <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700">Print</button>
            </div>
        </div>
    );
};

export default ResultsPage;
