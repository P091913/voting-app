namespace VotingApp.Models
{
    public class FinalTeamScores
    {
        public int Id { get; set; }
        public float AverageScore { get; set; }
        public int Rank { get; set; }
        public int Team_Id { get; set; }
        public Teams Teams { get; set; }
    }
}
