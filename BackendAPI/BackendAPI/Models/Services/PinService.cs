namespace VotingApp.Models.Services;

public class PinService
{
    private static readonly char[] Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".ToCharArray();

    public string GeneratePin(int length = 6)
    {
        var random = new Random();
        return new string(Enumerable.Range(0, length).Select(_ => Characters[random.Next(Characters.Length)])
            .ToArray());
    }
}