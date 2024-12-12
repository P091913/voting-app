using System.ComponentModel.DataAnnotations;
namespace VotingApp.Models;

    public class BusinessLogin
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }

