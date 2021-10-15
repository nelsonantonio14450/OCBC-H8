using Microsoft.EntityFrameworkCore;
using TodoApp.Models;

namespace TodoApp.Data
{
    public class ApiDBContext : DbContext
    {
        public virtual DbSet<ItemData> Items { get; set; }

        public ApiDBContext(DbContextOptions<ApiDBContext> options) : base(options)
        {

        }
    }
}