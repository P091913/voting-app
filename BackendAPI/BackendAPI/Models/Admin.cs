namespace VotingApp.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Voter_id { get; set; }
        public General General { get; set; }
    }
}
