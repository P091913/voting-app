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
    public class BusinessController : ControllerBase
    {
        private readonly BackendAPIContext _context;
        private readonly PinService _pinService;

        public BusinessController(BackendAPIContext context, PinService pinService)
        {
            _context = context;
            _pinService = pinService;
        }

        // GET: api/Business
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Business>>> GetBusiness()
        {
            var businesses = await _context.Business
                .Include(b => b.BusinessLogin)
                .ToListAsync();

            return Ok(businesses);
        }

        // GET: api/Business/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Business>> GetBusiness(int id)
        {
            var business = await _context.Business.FindAsync(id);

            if (business == null)
            {
                return NotFound();
            }

            return business;
        }

        // PUT: api/Business/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusiness(int id, Business business)
        {
            if (id != business.BusinessId)
            {
                return BadRequest();
            }

            _context.Entry(business).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Business>> PostBusiness(Business business)
        {
            Console.WriteLine($"Received Business: {business.BusinessName}, NumberOfPeople: {business.NumberOfPeople}");
            try
            {
                var createdBusinesses = new List<Business>(); // Store all Businesses

                // Create the number of businesses on NumberOfPeople
                for (var i = 1; i <= business.NumberOfPeople; i++)
                {
                    
                        var businesslogin = new BusinessLogin
                        {
                            Username = $"{business.BusinessName} Account {i}",
                            Password = _pinService.GeneratePin() 
                        };
                        
                    

                    

                    // Create General for each loop
                    var general = new General
                    {
                        Name = $"{business.BusinessName} Account {i}"
                    };
                    
                   
                    _context.BusinessLogin.Add(businesslogin);
                    _context.General.Add(general);
                    // Save 
                    await _context.SaveChangesAsync();

                    // Set the Voter Id 
                    general.Voter_Id = general.Id;
                    _context.General.Update(general);
                    
                    var newBusiness = new Business
                    {
                        BusinessName = businesslogin.Username,
                        BusinessLogin = businesslogin,
                        General = general
                    };
                    general.BusinessLogin_id = businesslogin.Id;
                    _context.General.Update(general);
                    _context.Business.Add(newBusiness);
                    createdBusinesses.Add(newBusiness);
                }

                // 2 extra businesses 
                for (var i = 1; i <= 2; i++)
                {
                    var extraBusinessName = $"{business.BusinessName} Account Extra {i}";

                    var businesslogin = new BusinessLogin
                    {
                        Username = extraBusinessName,
                        Password = _pinService.GeneratePin()
                    };
                    var general = new General
                    {
                        Name = extraBusinessName
                    };
                    
                    _context.BusinessLogin.Add(businesslogin);
                    _context.General.Add(general);
                    //Save
                    await _context.SaveChangesAsync();

                    // Set the Voter Id 
                    general.Voter_Id = general.Id;
                    _context.General.Update(general);

                    // Create the Business entity and link
                    var newBusiness = new Business
                    {
                        BusinessName = businesslogin.Username,
                        BusinessLogin = businesslogin,
                        General = general
                    };

                    general.BusinessLogin_id = businesslogin.Id;
                    _context.General.Update(general);
                    _context.Business.Add(newBusiness);

                    // Add to the list
                    createdBusinesses.Add(newBusiness);
                }
                await _context.SaveChangesAsync();

                // Return
                return CreatedAtAction("GetBusiness", new { id = createdBusinesses.Last().BusinessId }, createdBusinesses);

            }
            catch (Exception ex)
            {
                // Log the exception for debugging
                Console.WriteLine($"Error occurred: {ex.Message}");
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        
}


        // DELETE: api/Business/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusiness(int id)
        {
            var business = await _context.Business
                .Include(b => b.BusinessLogin) 
                .Include(b => b.General)
                .FirstOrDefaultAsync(b => b.BusinessId == id);

            if (business == null)
            {
                return NotFound();
            }

            // Check BusinessLogin and General 
            var businessLogin = business.BusinessLogin;
            var general = business.General;

            // If BusinessLogin and General exist, remove them
            if (businessLogin != null)
            {
                _context.BusinessLogin.Remove(businessLogin);
            }

            if (general != null)
            {
                _context.General.Remove(general);
            }

            // Delete Business
            _context.Business.Remove(business);

            // Save changes
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool BusinessExists(int id)
        {
            return _context.Business.Any(e => e.BusinessId == id);
        }
    }
}
