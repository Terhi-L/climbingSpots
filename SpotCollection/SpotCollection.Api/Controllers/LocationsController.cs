using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpotCollection.Api.Models;

namespace SpotCollection.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LocationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> GetLocation()
        {
            if (_context.Location is null)
            {
                return NotFound();
            }
            return await _context.Location.ToListAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<Location> GetLocation(string name)
        {
            var location = _context.Location.Where(location => location.Name == name).FirstOrDefault();
            if (location is null)
            {
                return NotFound();
            }
            return location;
        }

        // PUT: api/Locations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPatch("{id}")]
        public ActionResult<Location> ModifyLocation(AddLocationRequest request)
        {
            var location = _context.Location.Where(location => location.Name == request.Name).Where(country => country.Country == request.Country).FirstOrDefault();
            if (location is null || request is null)
            {
                return BadRequest();
            }
            if (request.Name != null || request.Name != "string") location.Name = request.Name!;
            if (request.Country != null || request.Country != "string") location.Country = request.Country!;
            if (request.Description != null || request.Description != "string") location.Description = request.Description;
            if (request.RecommendedBook != null || request.RecommendedBook != "string") location.RecommendedBook = request.RecommendedBook;
            if (request.Image != null || request.Image != "string") location.Image = request.Image;
            if (request.FavoriteRoute != null || request.FavoriteRoute != "string") location.FavoriteRoute = request.FavoriteRoute;

            _context.Entry(location).State = EntityState.Modified;
            _context.SaveChanges();
            return location;
        }

        [HttpPost]
        public async Task<ActionResult<Location>> PostLocation(AddLocationRequest request)
        {
            var newLocation = new Location
            {
                Name = request.Name,
                Country = request.Country,
                Description = request.Description,
                RecommendedBook = request.RecommendedBook,
                Image = request.Image,
                FavoriteRoute = request.FavoriteRoute,
            };
            _context.Location.Add(newLocation);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLocation), new { id = newLocation.Id }, newLocation);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation(string name)
        {
            var location = _context.Location.Where(location => location.Name == name).FirstOrDefault();
            if (location is null) return NotFound();
            
            _context.Location.Remove(location);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
