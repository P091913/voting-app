using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackendAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBusinessModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "BusinessLogin",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Business_BusinessLogin_id",
                table: "Business",
                column: "BusinessLogin_id");

            migrationBuilder.CreateIndex(
                name: "IX_Business_General_id",
                table: "Business",
                column: "General_id");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Business_BusinessLogin_BusinessLogin_id",
                table: "Business");

            migrationBuilder.DropForeignKey(
                name: "FK_Business_General_General_id",
                table: "Business");

            migrationBuilder.DropIndex(
                name: "IX_Business_BusinessLogin_id",
                table: "Business");

            migrationBuilder.DropIndex(
                name: "IX_Business_General_id",
                table: "Business");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "BusinessLogin",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
