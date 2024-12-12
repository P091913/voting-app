using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class FinalTeamScores
    {
        [Key]
        public int Id { get; set; }
        public float AverageScore { get; set; }
        public int Rank { get; set; }
        [ForeignKey("Teams")]
        public int Teams_id { get; set; }
    }

