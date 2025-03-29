using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    // Each team has a TeamData and a Team FinalTeamScore
    // This lets us change the voteing, names, ect

    // Go to TeamsController for the next stuff
    
    public class Teams
    {     
        [Key]
        public int Id { get; set; }
        public string TeamName { get; set; }
        public string CompeteLevel { get; set; }
        public int MemberCount { get; set; }
        public int VotesReceived { get; set; }
        
        public TeamData TeamData { get; set; }
        public FinalTeamScores FinalTeamScores { get; set; }
    }

