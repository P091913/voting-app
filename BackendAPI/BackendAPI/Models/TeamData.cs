using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class TeamData
    {
        [Key]
        public int Id { get; set; }
        public float AdAppealBusiness {  get; set; }
        public float ProjectDesign {  get; set; }
        public float ThemeIntegration { get; set; }
        public float Creativity { get; set; }
        public float ProfCom { get; set; }
        public float PerfFunc { get; set; }
        public float AdAppeal {  get; set; }
        public float Amazement { get; set; }
        public float Theme { get; set; }
        public float Performance { get; set; }
        [ForeignKey("Teams")]
        public int Team_id { get; set; }
        
    }

