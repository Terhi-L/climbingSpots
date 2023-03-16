
namespace SpotCollection.Tests;

public abstract class SpotCollectionUnitTests
{
    protected SpotCollectionUnitTests(DbContextOptions<ApplicationDbContext> contextOptions)
    {
        ContextOptions = contextOptions;
        Seed();
    }
    protected DbContextOptions<ApplicationDbContext> ContextOptions { get; }

    private void Seed()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            var oneLocation = new Location
            {
                Name = "Lofoten",
                Country = "Norway",
                Description = "Lofoten is a magnificient destination: Its edgy mountains, wild sea and Northern climate are all taking your breath away. Mountain tops are a morning hike away, which allows you to also climb to gorgeous viewpoints. This destination will not let you down - it has amazing climbing walls for everyone - beginners and pros! Recommended visit time: Spring or autumn. Very crowded during the summer months. Type of climbing: Trad, Sport, Top Rope",
                RecommendedBook = "Lofoten Climbs, Rockfax, Chris Craggs",
                FavoriteRoute = "Svolværgeita",
            };

            context.AddRange(oneLocation);
            context.SaveChanges();
        }
    }


    [Fact]
    public void GET_GetAllLocationss_Gets_All_Locations()
    {
        using (var context = new ApplicationDbContext(ContextOptions))
        {
            //arrange
            var controller = new LocationsController(context);

            //act
            var Locations = controller.GetAllLocations().ToList();

            //assert
            Assert.Equal(1, Locations.Count());
        }
    }


}