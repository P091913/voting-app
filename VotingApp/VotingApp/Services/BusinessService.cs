using Microsoft.EntityFrameworkCore;
using VotingApp.Data;
using VotingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace VotingApp.Services {
public class BusinessService
{
    private readonly ApplicationDbContext _context;

    public BusinessService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Business>> GetBusinesses()
    {
        return await _context.Businesses.ToListAsync();
    }

    public async Task<Business> GetBusiness(int id)
    {
        return await _context.Businesses.FindAsync(id);
    }

    public async Task<Business> AddBusiness(Business business)
    {
        _context.Businesses.Add(business);
        await _context.SaveChangesAsync();
        return business;
    }

    public async Task<Business> UpdateBusiness(Business business)
    {
        _context.Entry(business).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return business;
    }

    public async Task DeleteBusiness(int id)
    {
        var business = await _context.Businesses.FindAsync(id);
        if (business != null)
        {
            _context.Businesses.Remove(business);
            await _context.SaveChangesAsync();
        }
    }
}
}
