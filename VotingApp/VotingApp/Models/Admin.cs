using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace VotingApp.Models
{
    [Keyless]
    public class Admin
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
