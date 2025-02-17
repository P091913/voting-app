using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Data;
using VotingApp.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public TeamsController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teams>>> GetTeams()
        {
            return await _context.Teams.ToListAsync();
        }

        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Teams>> GetTeams(int id)
        {
            var teams = await _context.Teams.FindAsync(id);

            if (teams == null)
            {
                return NotFound();
            }

            return teams;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeams(int id, Teams teams)
        {
            if (id != teams.Id)
            {
                return BadRequest();
            }

            _context.Entry(teams).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Teams
        [HttpPost]
        public async Task<ActionResult<Teams>> PostTeams(Teams teams)
        {
            // When Creating a team create a TeamData and FinalTeamScore
            var teamData = new TeamData();
            var finalTeamScore = new FinalTeamScores();
            
            // Set them to the team to easy calling
            teams.TeamData = teamData;
            teams.FinalTeamScores = finalTeamScore;
            
            // Update and save
            _context.Teams.Add(teams);
            await _context.SaveChangesAsync();
            ;

            return CreatedAtAction("GetTeams", new { id = teams.Id }, teams);
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeams(int id)
        {
            
            // TODO Finish Delete To Delete the TeamData and FinalTeamScore
            // Look at BusinessController, StaffCoachController, or AdminController for examples
            var teams = await _context.Teams.FindAsync(id);
            if (teams == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(teams);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamsExists(int id)
        {
            return _context.Teams.Any(e => e.Id == id);
        }
    }
}
