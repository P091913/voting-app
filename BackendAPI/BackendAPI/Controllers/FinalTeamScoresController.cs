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
    public class FinalTeamScoresController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public FinalTeamScoresController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/FinalTeamScores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FinalTeamScores>>> GetFinalTeamScores()
        {
            return await _context.FinalTeamScores.ToListAsync();
        }

        // GET: api/FinalTeamScores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FinalTeamScores>> GetFinalTeamScores(int id)
        {
            var finalTeamScores = await _context.FinalTeamScores.FindAsync(id);

            if (finalTeamScores == null)
            {
                return NotFound();
            }

            return finalTeamScores;
        }

        // PUT: api/FinalTeamScores/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFinalTeamScores(int id, FinalTeamScores finalTeamScores)
        {
            if (id != finalTeamScores.Id)
            {
                return BadRequest();
            }

            _context.Entry(finalTeamScores).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FinalTeamScoresExists(id))
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

        // POST: api/FinalTeamScores
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FinalTeamScores>> PostFinalTeamScores(FinalTeamScores finalTeamScores)
        {
            _context.FinalTeamScores.Add(finalTeamScores);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFinalTeamScores", new { id = finalTeamScores.Id }, finalTeamScores);
        }

        // DELETE: api/FinalTeamScores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFinalTeamScores(int id)
        {
            var finalTeamScores = await _context.FinalTeamScores.FindAsync(id);
            if (finalTeamScores == null)
            {
                return NotFound();
            }

            _context.FinalTeamScores.Remove(finalTeamScores);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FinalTeamScoresExists(int id)
        {
            return _context.FinalTeamScores.Any(e => e.Id == id);
        }
    }
}
