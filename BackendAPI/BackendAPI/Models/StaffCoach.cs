using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class StaffCoach
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public StaffCoachType StaffCoachType { get; set; }
        public string? Password { get; set; }
        public General General { get;set; }
    }
