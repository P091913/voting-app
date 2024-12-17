using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VotingApp.Models;

namespace BackendAPI.Data
{
    public class BackendAPIContext : DbContext
    {
        public BackendAPIContext (DbContextOptions<BackendAPIContext> options)
            : base(options)
        {
        }

        public DbSet<VotingApp.Models.General> General { get; set; } = default!;
        public DbSet<VotingApp.Models.BusinessLogin> BusinessLogin { get; set; } = default!;
        public DbSet<VotingApp.Models.Admin> Admin { get; set; } = default!;
        public DbSet<VotingApp.Models.Business> Business { get; set; } = default!;
        public DbSet<VotingApp.Models.StaffCoach> StaffCoach { get; set; } = default!;
        public DbSet<VotingApp.Models.Teams> Teams { get; set; } = default!;
        public DbSet<VotingApp.Models.TeamData> TeamData { get; set; } = default!;
        public DbSet<VotingApp.Models.FinalTeamScores> FinalTeamScores { get; set; } = default!;
    }
}
