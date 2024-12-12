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
    public class GeneralController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public GeneralController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/General
        [HttpGet]
        public async Task<ActionResult<IEnumerable<General>>> GetGeneral()
        {
            return await _context.General.ToListAsync();
        }

        // GET: api/General/5
        [HttpGet("{id}")]
        public async Task<ActionResult<General>> GetGeneral(int id)
        {
            var general = await _context.General.FindAsync(id);

            if (general == null)
            {
                return NotFound();
            }

            return general;
        }

        // PUT: api/General/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGeneral(int id, General general)
        {
            if (id != general.Id)
            {
                return BadRequest();
            }

            _context.Entry(general).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GeneralExists(id))
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

        // POST: api/General
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<General>> PostGeneral(General general)
        {
            _context.General.Add(general);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGeneral", new { id = general.Id }, general);
        }

        // DELETE: api/General/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGeneral(int id)
        {
            var general = await _context.General.FindAsync(id);
            if (general == null)
            {
                return NotFound();
            }

            _context.General.Remove(general);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GeneralExists(int id)
        {
            return _context.General.Any(e => e.Id == id);
        }
    }
}
