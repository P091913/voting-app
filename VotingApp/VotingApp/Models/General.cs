using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    public class General
    {
        public int Id { get; set; }
        public int VoterId { get; set; }
        public string Name { get; set; }
        public bool VotedForCollege { get; set; }
        public bool VotedForBytes { get; set; }
        public bool VotedForBits { get; set; }
        public BusinessLogin BusinessLogin { get; set; }
        public Admin Admin { get; set; }

    }
}
