using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class Business
    {
        [Key]
        public int BusinessId { get; set; }
        public string BusinessName { get; set; }
        public int NumberOfPeople { get; set; }
        [ForeignKey("BusinessLogin")]
        public int BusinessLogin_id { get; set; }
    }

