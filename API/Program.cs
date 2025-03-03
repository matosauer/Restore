using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseSqlite(connectionString);
});

builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();
builder.Services.AddIdentityApiEndpoints<User>(opt =>
    {
        opt.User.RequireUniqueEmail = true;
        //opt.Password.Required...
    })
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<StoreContext>();

    
var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(opt => 
{  
    opt
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("https://localhost:3000");
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapGroup("api").MapIdentityApi<User>(); // api/login

await DbInitializer.InitDb(app);

app.Run();
