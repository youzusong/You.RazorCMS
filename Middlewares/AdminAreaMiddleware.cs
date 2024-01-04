using Microsoft.Extensions.Options;
using You.RazorCMS.Services.Settings;

namespace You.RazorCMS.Middlewares
{
    public class AdminAreaMiddleware : IMiddleware
    {
        private const string DEFAULT_AREA_NAME = "admin";

        private readonly SecurityOptions _securityOpts;

        public AdminAreaMiddleware(IOptions<SecurityOptions> securityOpts)
        {
            _securityOpts = securityOpts.Value;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            string? path = context.Request.Path.Value?.ToLower();
            if (!String.IsNullOrEmpty(path))
            {
                if (path.StartsWith("/" + DEFAULT_AREA_NAME))
                {
                    context.Response.StatusCode = 404;
                    await context.Response.WriteAsync("PAGE NOT FOUND");
                    return;
                }

                string adminAreaName = _securityOpts.AdminAreaName.ToLower();

                if (path == "/" + adminAreaName)
                    path += "/";

                if (path.StartsWith("/" + adminAreaName + "/"))
                {
                    string pageName = path.Substring(adminAreaName.Length + 1);
                    context.Request.Path = "/" + DEFAULT_AREA_NAME + pageName;
                }
            }

            await next(context);
        }
    }
}
