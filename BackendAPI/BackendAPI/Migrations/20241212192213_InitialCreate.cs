using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admin",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false),
                    General_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admin", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Business",
                columns: table => new
                {
                    BusinessId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BusinessName = table.Column<string>(type: "TEXT", nullable: false),
                    NumberOfPeople = table.Column<int>(type: "INTEGER", nullable: false),
                    BusinessLogin_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Business", x => x.BusinessId);
                });

            migrationBuilder.CreateTable(
                name: "BusinessLogin",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessLogin", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FinalTeamScores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AverageScore = table.Column<float>(type: "REAL", nullable: false),
                    Rank = table.Column<int>(type: "INTEGER", nullable: false),
                    Teams_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinalTeamScores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "General",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Voter_Id = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    BusinessLogin_id = table.Column<int>(type: "INTEGER", nullable: false),
                    Admin_id = table.Column<int>(type: "INTEGER", nullable: false),
                    StaffCoach_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_General", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StaffCoach",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false),
                    General_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StaffCoach", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TeamData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AdAppealBusiness = table.Column<float>(type: "REAL", nullable: false),
                    ProjectDesign = table.Column<float>(type: "REAL", nullable: false),
                    ThemeIntegration = table.Column<float>(type: "REAL", nullable: false),
                    Creativity = table.Column<float>(type: "REAL", nullable: false),
                    ProfCom = table.Column<float>(type: "REAL", nullable: false),
                    PerfFunc = table.Column<float>(type: "REAL", nullable: false),
                    AdAppeal = table.Column<float>(type: "REAL", nullable: false),
                    Amazement = table.Column<float>(type: "REAL", nullable: false),
                    Theme = table.Column<float>(type: "REAL", nullable: false),
                    Performance = table.Column<float>(type: "REAL", nullable: false),
                    Team_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeamData", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Team_Id = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamName = table.Column<string>(type: "TEXT", nullable: false),
                    CompeteLevel = table.Column<string>(type: "TEXT", nullable: false),
                    MemberCount = table.Column<int>(type: "INTEGER", nullable: false),
                    VotesReceived = table.Column<int>(type: "INTEGER", nullable: false),
                    TeamData_id = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admin");

            migrationBuilder.DropTable(
                name: "Business");

            migrationBuilder.DropTable(
                name: "BusinessLogin");

            migrationBuilder.DropTable(
                name: "FinalTeamScores");

            migrationBuilder.DropTable(
                name: "General");

            migrationBuilder.DropTable(
                name: "StaffCoach");

            migrationBuilder.DropTable(
                name: "TeamData");

            migrationBuilder.DropTable(
                name: "Teams");
        }
    }
}
