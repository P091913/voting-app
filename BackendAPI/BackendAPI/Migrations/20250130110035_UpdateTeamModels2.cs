using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTeamModels2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "Team_Id",
                table: "Teams",
                newName: "TeamDataId");

            migrationBuilder.RenameColumn(
                name: "TeamData_id",
                table: "Teams",
                newName: "FinalTeamScoresId");

            migrationBuilder.RenameColumn(
                name: "TeamsId",
                table: "TeamData",
                newName: "Teams_id");

            migrationBuilder.RenameColumn(
                name: "TeamsId",
                table: "FinalTeamScores",
                newName: "Teams_id");

            migrationBuilder.CreateIndex(
                name: "IX_Teams_FinalTeamScoresId",
                table: "Teams",
                column: "FinalTeamScoresId");

            migrationBuilder.CreateIndex(
                name: "IX_Teams_TeamDataId",
                table: "Teams",
                column: "TeamDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teams_FinalTeamScores_FinalTeamScoresId",
                table: "Teams",
                column: "FinalTeamScoresId",
                principalTable: "FinalTeamScores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teams_TeamData_TeamDataId",
                table: "Teams",
                column: "TeamDataId",
                principalTable: "TeamData",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teams_FinalTeamScores_FinalTeamScoresId",
                table: "Teams");

            migrationBuilder.DropForeignKey(
                name: "FK_Teams_TeamData_TeamDataId",
                table: "Teams");

            migrationBuilder.DropIndex(
                name: "IX_Teams_FinalTeamScoresId",
                table: "Teams");

            migrationBuilder.DropIndex(
                name: "IX_Teams_TeamDataId",
                table: "Teams");

            migrationBuilder.RenameColumn(
                name: "TeamDataId",
                table: "Teams",
                newName: "Team_Id");

            migrationBuilder.RenameColumn(
                name: "FinalTeamScoresId",
                table: "Teams",
                newName: "TeamData_id");

            migrationBuilder.RenameColumn(
                name: "Teams_id",
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
    }
}
