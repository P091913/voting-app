using Microsoft.EntityFrameworkCore;
using VotingApp.Data;
using VotingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace VotingApp.Services {
public class TeamsService
{
    private readonly ApplicationDbContext _context;

    public TeamsService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Teams>> GetTeams()
    {
        return await _context.Teams.ToListAsync();
    }

    public async Task<Teams> GetTeam(int id)
    {
        return await _context.Teams.FindAsync(id);
    }

    public async Task<Teams> AddTeam(Teams team)
    {
        _context.Teams.Add(team);
        await _context.SaveChangesAsync();
        return team;
    }

    public async Task<Teams> UpdateTeam(Teams team)
    {
        _context.Entry(team).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return team;
    }

    public async Task DeleteTeam(int id)
    {
        var team = await _context.Teams.FindAsync(id);
        if (team != null)
        {
            _context.Teams.Remove(team);
            await _context.SaveChangesAsync();
        }
    }
}
}

