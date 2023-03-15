using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpotCollection.Api.Migrations
{
    /// <inheritdoc />
    public partial class addFavoriteRoute : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WallsCount",
                table: "Location");

            migrationBuilder.AddColumn<string>(
                name: "FavoriteRoute",
                table: "Location",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FavoriteRoute",
                table: "Location");

            migrationBuilder.AddColumn<int>(
                name: "WallsCount",
                table: "Location",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
