using System.ComponentModel.DataAnnotations;

namespace SpotCollection.Api.Models;

public class Wall
{
    [Key]
    public int Id { get; set; }
    public required string WallName { get; set; }
    public string? Description { get; set; }
    public int RoutesCount { get; set; }
    public required virtual Location Location { get; set; }
}