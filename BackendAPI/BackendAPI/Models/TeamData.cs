using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class TeamData
    {
        [Key]
        public int Id { get; set; }
        // Used in with Teachers, Companies, and Advisors
        public float Creativity { get; set; }
        public float Communication { get; set; }
        public float Professionalism { get; set; }
        public float VisualDesign { get; set; }
        
        // Used with Students
        public float Amazement { get; set; }
        public float Theme { get; set; }
        
        // Used In All
        public float Performance { get; set; }
        
        [ForeignKey("Teams")]
        public int Teams_id { get; set; }
        
    }

