using Fist_ReactJs.Model;
using Microsoft.EntityFrameworkCore;

namespace Fist_ReactJs.Configuration
{
    public class Context : DbContext
    {
        public DbSet<Produto> Produto { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Produto>().HasKey(m => m.ID);
            base.OnModelCreating(builder);
        }
    }
}
