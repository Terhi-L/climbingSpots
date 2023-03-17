using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpotCollection.Api.Migrations
{
    /// <inheritdoc />
    public partial class closestCity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClosestCity",
                table: "Location",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClosestCity",
                table: "Location");
        }
    }
}
