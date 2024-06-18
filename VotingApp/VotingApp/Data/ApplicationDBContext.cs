using Microsoft.EntityFrameworkCore;
using VotingApp.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace VotingApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Business> Businesses { get; set; }
        public DbSet<BusinessLogin> BusinessLogins { get; set; }
        public DbSet<General> Voters { get; set; }
        public DbSet<Teams> Teams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BusinessLogin>()
            .HasMany(c => c.Businesses)
            .WithOne(e => e.BusinessLogin);

            modelBuilder.Entity<BusinessLogin>()
            .HasMany(c => c.Generals)
            .WithOne(e => e.BusinessLogin);

            modelBuilder.Entity<General>()
            .HasOne(a => a.Admin)
            .WithOne(b => b.General)
            .HasForeignKey<Admin>(b => b.Voter_id);
        }

        
    }
}
