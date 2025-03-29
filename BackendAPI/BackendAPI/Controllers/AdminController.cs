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
    public class AdminController : ControllerBase
    {
        private readonly BackendAPIContext _context;
        private readonly PinService _pinService;

        public AdminController(BackendAPIContext context, PinService pinService)
        {
            _context = context;
            _pinService = pinService;
        }

        // GET: api/Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
            return await _context.Admin.ToListAsync();
        }

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id)
        {
            var admin = await _context.Admin.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        // PUT: api/Admin/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmin(int id, Admin admin)
        {
            if (id != admin.Id)
            {
                return BadRequest();
            }

            _context.Entry(admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminExists(id))
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

        // POST: api/Admin 
        // TODO Make the admin create its own password (Currently it auto sets)
        [HttpPost]
        public async Task<ActionResult<Admin>> CreateAdmin(Admin admin)
        {
            // Create The New General
            var general = new General
            {
                // Set The Name Var To The Admin Username
                Name = admin.Username
            };
            // Save General
            _context.General.Add(general);
            await _context.SaveChangesAsync();
            
           
            //Create The Admins Extra Stuff
            admin.Password = _pinService.GeneratePin(); // Generate Pin (Must Remove)
            
            // Save Admin
            _context.Admin.Add(admin);
            await _context.SaveChangesAsync();

            // Set the Voter and Admin id's and save them.
            general.Admin_id = admin.Id;
            general.Voter_Id = general.Id;
            _context.General.Update(general);
            await _context.SaveChangesAsync();

            // And Return :)
            return CreatedAtAction("GetAdmin", new { id = admin.Id }, admin);
        }

        // DELETE: api/Admin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            // Get the admin and make sure it exist with general
            var admin = await _context.Admin
                .Include(a => a.General)
                .FirstOrDefaultAsync(a => a.Id == id);
            if (admin == null)
            {
                return NotFound();
            }
            
            // Same thing with the linked General
            var general = admin.General;
            if (general != null)
            {
                _context.General.Remove(general);
            }
            
            // Delete
            _context.Admin.Remove(admin);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool AdminExists(int id)
        {
            return _context.Admin.Any(e => e.Id == id);
        }
    }
}
