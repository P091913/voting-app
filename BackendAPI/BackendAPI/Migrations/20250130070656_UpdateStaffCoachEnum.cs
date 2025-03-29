using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateStaffCoachEnum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "StaffCoach");

            migrationBuilder.AddColumn<int>(
                name: "StaffCoachType",
                table: "StaffCoach",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StaffCoachType",
                table: "StaffCoach");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "StaffCoach",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
