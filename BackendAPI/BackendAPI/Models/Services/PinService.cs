namespace VotingApp.Models.Services;

public class PinService
{
    // This is the Characters in the passwords
    private static readonly char[] Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".ToCharArray();

    public string GeneratePin(int length = 4)
    {
        // Choose 4 random ones and return them in a string
        var random = new Random();
        return new string(Enumerable.Range(0, length).Select(_ => Characters[random.Next(Characters.Length)])
            .ToArray());
    }
}