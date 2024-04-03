using IMSystem.Model;
using Microsoft.EntityFrameworkCore;

namespace IMSystem.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> products { get; set; }
    }
}
