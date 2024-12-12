using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class Teams
    {     
        [Key]
        public int Id { get; set; }
        public int Team_Id { get; set; }
        public string TeamName { get; set; }
        public string CompeteLevel { get; set; }
        public int MemberCount { get; set; }
        public int VotesReceived { get; set; }
        [ForeignKey("TeamData")]
        public int TeamData_id { get; set; }
    }

