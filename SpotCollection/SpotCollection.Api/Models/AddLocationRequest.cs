
namespace SpotCollection.Api.Models;

public class AddLocationRequest
{
    public required string Name { get; set; }
    public required string Country { get; set; }
    public string? Description { get; set; }
    public string? RecommendedBook { get; set; }
    public string? Image { get; set; }
    public string? FavoriteRoute { get; set; }
}


