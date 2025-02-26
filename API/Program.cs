using API.Controllers;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseSqlite(connectionString);
});

builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();

var app = builder.Build();


app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(opt => 
{  
    opt
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("https://localhost:3000");
});

app.MapControllers();

DbInitializer.InitDb(app);

app.Run();
