using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTeamModels1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Team_id",
                table: "TeamData",
                newName: "TeamsId");

            migrationBuilder.RenameColumn(
                name: "Teams_id",
                table: "FinalTeamScores",
                newName: "TeamsId");

            migrationBuilder.CreateIndex(
                name: "IX_TeamData_TeamsId",
                table: "TeamData",
                column: "TeamsId");

            migrationBuilder.CreateIndex(
                name: "IX_FinalTeamScores_TeamsId",
                table: "FinalTeamScores",
                column: "TeamsId");

            migrationBuilder.AddForeignKey(
                name: "FK_FinalTeamScores_Teams_TeamsId",
                table: "FinalTeamScores",
                column: "TeamsId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TeamData_Teams_TeamsId",
                table: "TeamData",
                column: "TeamsId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinalTeamScores_Teams_TeamsId",
                table: "FinalTeamScores");

            migrationBuilder.DropForeignKey(
                name: "FK_TeamData_Teams_TeamsId",
                table: "TeamData");

            migrationBuilder.DropIndex(
                name: "IX_TeamData_TeamsId",
                table: "TeamData");

            migrationBuilder.DropIndex(
                name: "IX_FinalTeamScores_TeamsId",
                table: "FinalTeamScores");

            migrationBuilder.RenameColumn(
                name: "TeamsId",
                table: "TeamData",
                newName: "Team_id");

            migrationBuilder.RenameColumn(
                name: "TeamsId",
                table: "FinalTeamScores",
                newName: "Teams_id");
        }
    }
}
