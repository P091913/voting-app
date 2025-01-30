import React, { useState, useEffect } from "react";

const BitsPage = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        competeLevel: 'Bits', // Default to Bits
        memberCount: 0,
        votesReceived: 0,
        teamData: {
            adAppealBusiness: 0,
            projectDesign:0,
            themeIntegration: 0,
            creativity: 0,
            profCom: 0,
            perfFunc: 0,
            adAppeal: 0,
            amazement: 0,
            theme: 0,
            performance: 0
        },
        finalTeamScores: {
            averageScore: 0,
            rank: 0
        }
    });

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5276/api/Teams', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
   
            if (response.ok) {
                alert('Team information submitted successfully!');
            } else {
                const errorResponse = await response.json();
                console.error('Error Response:', errorResponse);  // Log the response to get details
                alert('Submission failed: ' + errorResponse.message || 'Bad Request');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
   

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5276/api/Teams/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTeams(teams.filter((team) => team.id !== id));
                alert('Team deleted successfully');
            } else {
                alert('Failed to delete team');
            }
        } catch (error) {
            console.error('Error deleting team:', error);
            alert('Error deleting team');
        }
    };

    const fetchTeams = async () => {
        try {
            const response = await fetch("http://localhost:5276/api/Teams");

            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data)) {
                    setTeams(data);
                } else {
                    alert("Unexpected response format.");
                }
                setLoading(false);
            } else {
                alert("Failed to fetch teams.");
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching teams:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    return (
        <div>
            <div className="form-container">
                <h2>Team Management (Bits)</h2>

                <form onSubmit={handleSubmit}>
                    <label>Team Name:</label>
                    <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        required
                    />

                    <label>Member Count:</label>
                    <input
                        type="number"
                        name="memberCount"
                        value={formData.memberCount}
                        onChange={handleChange}
                        required
                    />

                    {/* Add more inputs for other fields within teamData and finalTeamScores if needed */}

                    <button type="submit">Add Team</button>
                </form>

                <div className="team-list">
                    <h3>Current Teams</h3>
                    {loading ? (
                        <p>Loading Teams...</p>
                    ) : (
                        <div>
                            {teams.length > 0 ? (
                                <ul>
                                    <h4>Name</h4>
                                    {teams
                                    .filter(team => team.competeLevel === "Bits")
                                    .map((team) => (
                                        <li key={team.id}>
                                            <strong>{team.teamName} - Member Count: {team.memberCount}</strong>
                                            <button onClick={() => handleDelete(team.id)}>Delete</button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No Teams found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BitsPage;
