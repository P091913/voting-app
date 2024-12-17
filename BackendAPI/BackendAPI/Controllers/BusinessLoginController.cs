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
    public class BusinessLoginController : ControllerBase
    {
        private readonly BackendAPIContext _context;

        public BusinessLoginController(BackendAPIContext context)
        {
            _context = context;
        }

        // GET: api/BusinessLogin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BusinessLogin>>> GetBusinessLogin()
        {
            return await _context.BusinessLogin.ToListAsync();
        }

        // GET: api/BusinessLogin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BusinessLogin>> GetBusinessLogin(int id)
        {
            var businessLogin = await _context.BusinessLogin.FindAsync(id);

            if (businessLogin == null)
            {
                return NotFound();
            }

            return businessLogin;
        }

        // PUT: api/BusinessLogin/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusinessLogin(int id, BusinessLogin businessLogin)
        {
            if (id != businessLogin.Id)
            {
                return BadRequest();
            }

            _context.Entry(businessLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessLoginExists(id))
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

        // POST: api/BusinessLogin
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BusinessLogin>> PostBusinessLogin(BusinessLogin businessLogin)
        {
            _context.BusinessLogin.Add(businessLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBusinessLogin", new { id = businessLogin.Id }, businessLogin);
        }

        // DELETE: api/BusinessLogin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusinessLogin(int id)
        {
            var businessLogin = await _context.BusinessLogin.FindAsync(id);
            if (businessLogin == null)
            {
                return NotFound();
            }

            _context.BusinessLogin.Remove(businessLogin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusinessLoginExists(int id)
        {
            return _context.BusinessLogin.Any(e => e.Id == id);
        }
    }
}
