using Microsoft.EntityFrameworkCore;
using VotingApp.Data;
using VotingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

public class GeneralService
{
    private readonly ApplicationDbContext _context;

    public GeneralService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<General>> GetVoters()
    {
        return await _context.Voters.ToListAsync();
    }

    public async Task<General> GetVoter(int id)
    {
        return await _context.Voters.FindAsync(id);
    }

    public async Task<General> AddVoter(General voter)
    {
        _context.Voters.Add(voter);
        await _context.SaveChangesAsync();
        return voter;
    }

    public async Task<General> UpdateVoter(General voter)
    {
        _context.Entry(voter).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return voter;
    }

    public async Task DeleteVoter(int id)
    {
        var voter = await _context.Voters.FindAsync(id);
        if (voter != null)
        {
            _context.Voters.Remove(voter);
            await _context.SaveChangesAsync();
        }
    }
}
