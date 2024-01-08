using You.RazorCMS.Middlewares;
using You.RazorCMS.Mvc.ApplicationModels;
using You.RazorCMS.Services.Settings;

var builder = WebApplication.CreateBuilder(args);

var securityOpts = builder.Configuration.GetSection("Security");

// Add services to the container.
builder.Services
    .AddRazorPages(opts =>
    {
        opts.Conventions.Add(new AdminAreaPageRouteModelConvention(securityOpts["AdminAreaName"]));
    })
    .AddRazorRuntimeCompilation();

builder.Services.Configure<SecurityOptions>(securityOpts);

// Middlewares
builder.Services.AddScoped<AdminAreaSecurityMiddleware>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseMiddleware<AdminAreaSecurityMiddleware>();


app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
