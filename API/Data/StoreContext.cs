using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole { Id = "08603f0a-eb32-4f0e-bb61-14571f9460c3", Name = "Admin", NormalizedName = "ADMIN" },
            new IdentityRole { Id = "365ee8d5-a914-4dd0-866f-5c6ef6a82df3", Name = "Member", NormalizedName = "MEMBER" }
        );
    }
}
