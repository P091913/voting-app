using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    [Keyless]
    public class BusinessLogin
    {

        public string Username { get; set; }
        public string Password { get; set; }
    }
}
