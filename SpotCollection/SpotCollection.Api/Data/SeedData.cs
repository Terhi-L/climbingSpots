using Microsoft.EntityFrameworkCore;
using SpotCollection.Api.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ApplicationDbContext(
    serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
        {
            if (context.Location.Any()) { return; }

            context.Location.AddRange(
                     new Location
                     {
                         Name = "Lofoten",
                         Country = "Norway",
                         Description = "Lofoten is a magnificient destination: Its edgy mountains, wild sea and Northern climate are all taking your breath away. Mountain tops are a morning hike away, which allows you to also climb to gorgeous viewpoints. This destination will not let you down - it has amazing climbing walls for everyone - beginners and pros! Recommended visit time: Spring or autumn. Very crowded during the summer months. Type of climbing: Trad, Sport, Top Rope",
                         RecommendedBook = "Lofoten Climbs, Rockfax, Chris Craggs",
                         FavoriteRoute = "Svolværgeita",
                     }
                 );

            context.SaveChanges();
        }
    }
}