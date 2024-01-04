using Microsoft.Extensions.Options;
using You.RazorCMS.Services.Settings;

namespace You.RazorCMS.Middlewares
{
    public class AdminAreaMiddleware : IMiddleware
    {
        private readonly SecurityOptions _securityOpts;

        public AdminAreaMiddleware(IOptions<SecurityOptions> securityOpts)
        {
            _securityOpts = securityOpts.Value;
        }

        public Task InvokeAsync(HttpContext context, RequestDelegate next)
        {

            return next(context);
        }
    }
}
