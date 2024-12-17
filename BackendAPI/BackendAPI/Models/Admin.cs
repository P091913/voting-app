using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;
    public class Admin
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        [ForeignKey("General")]
        public int General_id { get; set; }
    }

