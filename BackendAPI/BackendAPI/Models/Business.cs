using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VotingApp.Models;

    public class Business
    {
        [Key]
        public int BusinessId { get; set; }
        public string BusinessName { get; set; }
        public int NumberOfPeople { get; set; }
        public BusinessLogin BusinessLogin { get; set; }
        public General General { get;set; }
        
    }

