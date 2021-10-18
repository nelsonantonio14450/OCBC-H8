using Microsoft.EntityFrameworkCore;
using TodoApp.Models;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TodoAppWithJWT.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using TodoAppWithJWT.Models;

namespace TodoApp.Data
{
    public class ApiDBContext : IdentityDbContext
    {
        public virtual DbSet<ItemData> Items { get; set; }
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public ApiDBContext(DbContextOptions<ApiDBContext> options) : base(options)
        {
        }
    }


}