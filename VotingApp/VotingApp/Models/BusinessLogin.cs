using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models
{
    public class BusinessLogin
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public General General { get; set; }
        public Business Business { get; set; }
    }
}
