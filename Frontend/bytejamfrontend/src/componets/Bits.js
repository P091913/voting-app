import React, {useState} from "react";


{/*Page: 3*/}


const BitsPage = () => {
    const [teams, setTeams] = useState([
        { name: 'Team A', school: 'School A' },
        { name: 'Team B', school: 'School B' },
    ]);
    const [newTeam, setNewTeam] = useState({ name: '', school: '' });

    const handleAddTeam = (e) => {
        e.preventDefault();
        if (newTeam.name && newTeam.school) {
            setTeams([...teams, newTeam]);
            setNewTeam({ name: '', school: '' });
        }
    };

    const handleDeleteTeam = (index) => {
        const updatedTeams = teams.filter((_, i) => i !== index);
        setTeams(updatedTeams);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeam({ ...newTeam, [name]: value });
    };

    return (
        <div>
            <div className="form-container">
                <h2>Team Management (Bits)</h2>

                <form onSubmit={handleAddTeam}>
                    <label htmlFor="team-name">Team Name:</label>
                    <input
                        type="text"
                        id="team-name"
                        name="name"
                        value={newTeam.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="school-name">School Name:</label>
                    <input
                        type="text"
                        id="school-name"
                        name="school"
                        value={newTeam.school}
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit">Add Team</button>
                </form>

                <div className="team-list">
                    <h3>Current Teams</h3>
                    {teams.map((team, index) => (
                        <div className="team-item" key={index}>
                            <span>{team.name} - {team.school}</span>
                            <div>
                                <button onClick={() => alert('Edit functionality pending')}>
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteTeam(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BitsPage;
