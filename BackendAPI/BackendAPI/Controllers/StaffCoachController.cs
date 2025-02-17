using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Data;
using VotingApp.Models;
using VotingApp.Models.Services;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffCoachController : ControllerBase
    {
        private readonly BackendAPIContext _context;
        private readonly PinService _pinService;

        public StaffCoachController(BackendAPIContext context, PinService pinService)
        {
            _context = context;
            _pinService = pinService;
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
        [HttpPost]
        public async Task<ActionResult<StaffCoach>> PostStaffCoach(StaffCoach staffCoach)
        {
            
            // Create The General
            var general = new General
            {
                // auto set the username in the General
                Name = staffCoach.Username
            };
            
            // Save
            _context.General.Add(general);
            await _context.SaveChangesAsync();
            
            
            // generate pin
            staffCoach.Password = _pinService.GeneratePin();
            
            _context.StaffCoach.Add(staffCoach);
            await _context.SaveChangesAsync();
            
            // Set the Voter and StaffCoach id's and save them.
            general.Voter_Id = general.Id;
            general.StaffCoach_id = staffCoach.Id;
            _context.General.Update(general);
            await _context.SaveChangesAsync();
            
            // return
            return CreatedAtAction("GetStaffCoach", new { id = staffCoach.Id }, staffCoach);
        }

        // DELETE: api/StaffCoach/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffCoach(int id)
        {

            // Get the StaffCoach with the id
            var staffCoach = await _context.StaffCoach
                .Include(s => s.General)
                .FirstOrDefaultAsync(s => s.Id == id);
            
            // Make Sure they both exist 
            if (staffCoach == null)
            {
                return NotFound();
            }
            
            var general = staffCoach.General;
            if (general != null)
            {
                _context.General.Remove(general);
            }
            
            // Remove and Save
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
