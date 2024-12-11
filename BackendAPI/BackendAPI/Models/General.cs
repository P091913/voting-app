namespace VotingApp.Models
{
    public class General
    {
        public int Id { get; set; }
        public int Voter_Id { get; set; }
        public string Name { get; set; }
        public BusinessLogin BusinessLogin { get; set; }
        public Admin Admin { get; set; }
        public StaffCoach StaffCoach { get; set; }

    }
}
