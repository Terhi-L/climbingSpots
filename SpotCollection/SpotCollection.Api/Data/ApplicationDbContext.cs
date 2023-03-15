using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SpotCollection.Api.Models;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<SpotCollection.Api.Models.Location> Location { get; set; } = default!;

        public DbSet<SpotCollection.Api.Models.Wall> Wall { get; set; } = default!;
    }
