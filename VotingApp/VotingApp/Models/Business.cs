using System.ComponentModel.DataAnnotations;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace VotingApp.Models
{
    public class Business
    {
        public int BusinessId { get; set; }
        public string BusinessName { get; set; }
        public int NumberOfPeople { get; set; }
        public BusinessLogin BusinessLogin { get; set; }
    }
}
