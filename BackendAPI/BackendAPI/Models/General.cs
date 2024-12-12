using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using VotingApp.Models;

namespace VotingApp.Models;
    public class General
    {
        [Key]
        public int Id { get; set; }
        public int Voter_Id { get; set; }
        public string Name { get; set; }
        [ForeignKey("BusinessLogin")]
        public int BusinessLogin_id { get; set; }
        [ForeignKey("Admin")]
        public int Admin_id { get; set; }
        [ForeignKey("StaffCoach")]
        public int StaffCoach_id { get; set; }

    }

