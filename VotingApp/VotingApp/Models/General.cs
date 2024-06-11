using System.ComponentModel.DataAnnotations;

namespace VotingApp.Models
{
    public class General
    {
        [Key]
        public int VoterId { get; set; }
        public string Name { get; set; }
        public bool VotedForCollege { get; set; }
        public bool VotedForBytes { get; set; }
        public bool VotedForBits { get; set; }
        public ICollection<Admin> Admins { get; set; }
        public ICollection<BusinessLogin> Blogs { get; set; }
    }
}
