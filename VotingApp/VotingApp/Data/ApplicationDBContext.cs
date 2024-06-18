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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Admin>()
            .HasNoKey()
            .ToView("Admin");

            modelBuilder.Entity<BusinessLogin>()
            .HasNoKey()
            .ToView("BusinessLogin");

            modelBuilder.Entity<Teams>()
            .HasNoKey()
            .ToView("Teams");
        }

        //public DbSet<Admin> Admins { get; set; }
        public DbSet<Business> Businesses { get; set; }
        //public DbSet<BusinessLogin> BusinessLogins { get; set; }
        public DbSet<General> Voters { get; set; }
        //public DbSet<Teams> Teams { get; set; }
    }
}
