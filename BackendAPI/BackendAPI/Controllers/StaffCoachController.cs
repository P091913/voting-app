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
    public class StaffCoachController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public StaffCoachController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/StaffCoach
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaffCoach>>> GetStaffCoach()
        {
            return await _context.StaffCoach.ToListAsync();
        }

        // GET: api/StaffCoach/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffCoach>> GetStaffCoach(int id)
        {
            var staffCoach = await _context.StaffCoach.FindAsync(id);

            if (staffCoach == null)
            {
                return NotFound();
            }

            return staffCoach;
        }

        // PUT: api/StaffCoach/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffCoach(int id, StaffCoach staffCoach)
        {
            if (id != staffCoach.Id)
            {
                return BadRequest();
            }

            _context.Entry(staffCoach).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffCoachExists(id))
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

        // POST: api/StaffCoach
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaffCoach>> PostStaffCoach(StaffCoach staffCoach)
        {
            _context.StaffCoach.Add(staffCoach);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStaffCoach", new { id = staffCoach.Id }, staffCoach);
        }

        // DELETE: api/StaffCoach/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffCoach(int id)
        {
            var staffCoach = await _context.StaffCoach.FindAsync(id);
            if (staffCoach == null)
            {
                return NotFound();
            }

            _context.StaffCoach.Remove(staffCoach);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffCoachExists(int id)
        {
            return _context.StaffCoach.Any(e => e.Id == id);
        }
    }
}
