using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    public class BusinessLogin
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Business> Businesses { get; set; }
        public ICollection<General> Generals { get; set; }
    }
}
