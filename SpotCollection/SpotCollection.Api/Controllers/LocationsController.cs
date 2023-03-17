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
        public async Task<ActionResult<IEnumerable<Location>>> GetAllLocations()
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

        [HttpPut("{id}/description")]
        public IActionResult ModifyDescription(AddDescriptionRequest request)
        {
            var location = _context.Location.Where(location => location.Name == request.Name).FirstOrDefault();
            if (request is null || location is null)
            {
                return BadRequest();
            }

            if (location.Description is null)
            {
                location.Description = request.Description;
                _context.SaveChanges();
                return Created(nameof(GetLocation), location);
            }

            location.Description = request.Description;
            _context.SaveChanges();
            return Ok(location);
        }

        [HttpPut("{id}/recommendedBook")]
        public ActionResult<Location> ModifyBook(AddBookRequest request)
        {
            var location = _context.Location.Where(location => location.Name == request.Name).FirstOrDefault();
            if (request is null || location is null) return BadRequest();

            if (location.RecommendedBook is null)
            {
                location.RecommendedBook = request.RecommendedBook;
                _context.SaveChanges();
                return Created(nameof(GetLocation), location);
            }

            location.RecommendedBook = request.RecommendedBook;
            _context.SaveChanges();
            return location;
        }

        [HttpPut("{id}/image")]
        public ActionResult<Location> ModifyImage(AddImageRequest request)
        {
            var location = _context.Location.Where(location => location.Name == request.Name).FirstOrDefault();
            if (request is null || location is null) return BadRequest();

            if (location.Image is null)
            {
                location.Image = request.Image;
                _context.SaveChanges();
                return Created(nameof(GetLocation), location);
            }

            location.Image = request.Image;
            _context.SaveChanges();
            return location;
        }

        [HttpPut("{id}/favoriteRoute")]
        public ActionResult<Location> ModifyFavoriteRoute(AddRouteRequest request)
        {
            var location = _context.Location.Where(location => location.Name == request.Name).FirstOrDefault();
            if (request is null || location is null) return BadRequest();

            if (location.FavoriteRoute is null)
            {
                location.FavoriteRoute = request.FavoriteRoute;
                _context.SaveChanges();
                return Created(nameof(GetLocation), location);
            }

            location.FavoriteRoute = request.FavoriteRoute;
            _context.SaveChanges();
            return location;
        }

        [HttpPost]
        public async Task<ActionResult<Location>> PostLocation(AddLocationRequest request)
        {
            if (request is null) return BadRequest();

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
