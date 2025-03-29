using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class TeamsDataUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdAppeal",
                table: "TeamData");

            migrationBuilder.DropColumn(
                name: "AdAppealBusiness",
                table: "TeamData");

            migrationBuilder.DropColumn(
                name: "PerfFunc",
                table: "TeamData");

            migrationBuilder.RenameColumn(
                name: "ThemeIntegration",
                table: "TeamData",
                newName: "VisualDesign");

            migrationBuilder.RenameColumn(
                name: "ProjectDesign",
                table: "TeamData",
                newName: "Professionalism");

            migrationBuilder.RenameColumn(
                name: "ProfCom",
                table: "TeamData",
                newName: "Communication");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VisualDesign",
                table: "TeamData",
                newName: "ThemeIntegration");

            migrationBuilder.RenameColumn(
                name: "Professionalism",
                table: "TeamData",
                newName: "ProjectDesign");

            migrationBuilder.RenameColumn(
                name: "Communication",
                table: "TeamData",
                newName: "ProfCom");

            migrationBuilder.AddColumn<float>(
                name: "AdAppeal",
                table: "TeamData",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "AdAppealBusiness",
                table: "TeamData",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "PerfFunc",
                table: "TeamData",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);
        }
    }
}
