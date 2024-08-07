using Microsoft.EntityFrameworkCore;
using VotingApp.Data;
using VotingApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace VotingApp.Services {

public class AdminService
{
    private readonly ApplicationDbContext _context;

    public AdminService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Admin>> GetAdmins()
    {
        return await _context.Admins.ToListAsync();
    }

    public async Task<Admin> GetAdmin(int id)
    {
        return await _context.Admins.FindAsync(id);
    }

    public async Task<Admin> AddAdmin(Admin admin)
    {
        _context.Admins.Add(admin);
        await _context.SaveChangesAsync();
        return admin;
    }

    public async Task<Admin> UpdateAdmin(Admin admin)
    {
        _context.Entry(admin).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return admin;
    }

    public async Task DeleteAdmin(int id)
    {
        var admin = await _context.Admins.FindAsync(id);
        if (admin != null)
        {
            _context.Admins.Remove(admin);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<Admin?> ValidateCredentials(string email, string username, string password)
    {
        return await _context.Admins.FirstOrDefaultAsync(a =>
            a.Email == email && a.Username == username && a.Password == password);

    }
}
}

