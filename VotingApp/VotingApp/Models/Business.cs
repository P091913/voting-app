using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    public class Business
    {
        public int BusinessId { get; set; }
        public string BusinessName { get; set; }
        public int NumberOfPeople { get; set; }
        public int NumCurrentLogins { get; set; }
    }
}
