using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models
{
    public class Admin
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public General General { get; set; }
    }
}
