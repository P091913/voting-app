using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    // Each team has a TeamData and a Team FinalTeamScore
    // This lets us change the voteing, names, ect

    // Go to TeamsController for the next stuff

    public class FinalTeamScores
    {
        [Key]
        public int Id { get; set; }
        public float AverageScore { get; set; }
        public int Rank { get; set; }
        
        [ForeignKey("Teams")]
        public int Teams_id { get; set; }
    }

