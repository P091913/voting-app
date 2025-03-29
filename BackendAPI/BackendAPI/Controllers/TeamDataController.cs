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
    public class TeamDataController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public TeamDataController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/TeamData
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamData>>> GetTeamData()
        {
            return await _context.TeamData.ToListAsync();
        }

        // GET: api/TeamData/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamData>> GetTeamData(int id)
        {
            var teamData = await _context.TeamData.FindAsync(id);

            if (teamData == null)
            {
                return NotFound();
            }

            return teamData;
        }

        // PUT: api/TeamData/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamData(int id, TeamData teamData)
        {
            if (id != teamData.Id)
            {
                return BadRequest();
            }

            _context.Entry(teamData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamDataExists(id))
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

        // POST: api/TeamData
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeamData>> PostTeamData(TeamData teamData)
        {
            _context.TeamData.Add(teamData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeamData", new { id = teamData.Id }, teamData);
        }

        // DELETE: api/TeamData/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeamData(int id)
        {
            var teamData = await _context.TeamData.FindAsync(id);
            if (teamData == null)
            {
                return NotFound();
            }

            _context.TeamData.Remove(teamData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamDataExists(int id)
        {
            return _context.TeamData.Any(e => e.Id == id);
        }
    }
}
