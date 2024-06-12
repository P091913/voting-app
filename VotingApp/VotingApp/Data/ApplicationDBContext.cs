using Microsoft.EntityFrameworkCore;
using VotingApp.Models;

namespace VotingApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Business> Businesses { get; set; }
        public DbSet<BusinessLogin> BusinessLogins { get; set; }
        public DbSet<General> Voters { get; set; }
        public DbSet<Teams> Teams { get; set; }
    }
}
