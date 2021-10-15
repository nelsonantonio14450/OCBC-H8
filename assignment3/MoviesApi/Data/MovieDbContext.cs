using Microsoft.EntityFrameworkCore;
using Movies.Models;

namespace Movies.Data
{
    public class MovieDbContext : DbContext //apiDbContext
    {
        public virtual DbSet<MovieData> Movies { get; set; }

        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }


    }
}