using IMSystem.Model;
using Microsoft.EntityFrameworkCore;

namespace IMSystem.Interface
{
    public interface IApplicationDbContext
    {
        DbSet<Product> products { get; set; }
    }
}
