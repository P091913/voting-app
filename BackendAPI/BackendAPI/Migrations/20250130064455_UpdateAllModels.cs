using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAllModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Business_BusinessLogin_BusinessLogin_id",
                table: "Business");

            migrationBuilder.DropForeignKey(
                name: "FK_Business_General_General_id",
                table: "Business");

            migrationBuilder.RenameColumn(
                name: "General_id",
                table: "StaffCoach",
                newName: "GeneralId");

            migrationBuilder.RenameColumn(
                name: "General_id",
                table: "Business",
                newName: "GeneralId");

            migrationBuilder.RenameColumn(
                name: "BusinessLogin_id",
                table: "Business",
                newName: "BusinessLoginId");

            migrationBuilder.RenameIndex(
                name: "IX_Business_General_id",
                table: "Business",
                newName: "IX_Business_GeneralId");

            migrationBuilder.RenameIndex(
                name: "IX_Business_BusinessLogin_id",
                table: "Business",
                newName: "IX_Business_BusinessLoginId");

            migrationBuilder.RenameColumn(
                name: "General_id",
                table: "Admin",
                newName: "GeneralId");

            migrationBuilder.CreateIndex(
                name: "IX_StaffCoach_GeneralId",
                table: "StaffCoach",
                column: "GeneralId");

            migrationBuilder.CreateIndex(
                name: "IX_Admin_GeneralId",
                table: "Admin",
                column: "GeneralId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admin_General_GeneralId",
                table: "Admin",
                column: "GeneralId",
                principalTable: "General",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Business_BusinessLogin_BusinessLoginId",
                table: "Business",
                column: "BusinessLoginId",
                principalTable: "BusinessLogin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Business_General_GeneralId",
                table: "Business",
                column: "GeneralId",
                principalTable: "General",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_StaffCoach_General_GeneralId",
                table: "StaffCoach",
                column: "GeneralId",
                principalTable: "General",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admin_General_GeneralId",
                table: "Admin");

            migrationBuilder.DropForeignKey(
                name: "FK_Business_BusinessLogin_BusinessLoginId",
                table: "Business");

            migrationBuilder.DropForeignKey(
                name: "FK_Business_General_GeneralId",
                table: "Business");

            migrationBuilder.DropForeignKey(
                name: "FK_StaffCoach_General_GeneralId",
                table: "StaffCoach");

            migrationBuilder.DropIndex(
                name: "IX_StaffCoach_GeneralId",
                table: "StaffCoach");

            migrationBuilder.DropIndex(
                name: "IX_Admin_GeneralId",
                table: "Admin");

            migrationBuilder.RenameColumn(
                name: "GeneralId",
                table: "StaffCoach",
                newName: "General_id");

            migrationBuilder.RenameColumn(
                name: "GeneralId",
                table: "Business",
                newName: "General_id");

            migrationBuilder.RenameColumn(
                name: "BusinessLoginId",
                table: "Business",
                newName: "BusinessLogin_id");

            migrationBuilder.RenameIndex(
                name: "IX_Business_GeneralId",
                table: "Business",
                newName: "IX_Business_General_id");

            migrationBuilder.RenameIndex(
                name: "IX_Business_BusinessLoginId",
                table: "Business",
                newName: "IX_Business_BusinessLogin_id");

            migrationBuilder.RenameColumn(
                name: "GeneralId",
                table: "Admin",
                newName: "General_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Business_BusinessLogin_BusinessLogin_id",
                table: "Business",
                column: "BusinessLogin_id",
                principalTable: "BusinessLogin",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Business_General_General_id",
                table: "Business",
                column: "General_id",
                principalTable: "General",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
