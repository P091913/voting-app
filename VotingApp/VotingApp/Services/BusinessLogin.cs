using Microsoft.EntityFrameworkCore;
using VotingApp.Data;
using VotingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace VotingApp.Services {
public class BusinessLoginService
{
    private readonly ApplicationDbContext _context;

    public BusinessLoginService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<BusinessLogin>> GetBusinessLogins()
    {
        return await _context.BusinessLogins.ToListAsync();
    }

    public async Task<BusinessLogin> GetBusinessLogin(int id)
    {
        return await _context.BusinessLogins.FindAsync(id);
    }

    public async Task<BusinessLogin> AddBusinessLogin(BusinessLogin businessLogin)
    {
        _context.BusinessLogins.Add(businessLogin);
        await _context.SaveChangesAsync();
        return businessLogin;
    }

    public async Task<BusinessLogin> UpdateBusinessLogin(BusinessLogin businessLogin)
    {
        _context.Entry(businessLogin).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return businessLogin;
    }

    public async Task DeleteBusinessLogin(int id)
    {
        var businessLogin = await _context.BusinessLogins.FindAsync(id);
        if (businessLogin != null)
        {
            _context.BusinessLogins.Remove(businessLogin);
            await _context.SaveChangesAsync();
        }
    }
}
}

