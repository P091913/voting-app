using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    public class Teams
    {     
        public int Id { get; set; }
        public int Team_Id { get; set; }
        public string TeamName { get; set; }
        public string CompeteLevel { get; set; }
        public int MemberCount { get; set; }
        public int VotesReceived { get; set; }
        public TeamData TeamData { get; set; }
    }
}
