namespace You.RazorCMS.Middlewares
{
    public class AdminAreaSecurityMiddleware : IMiddleware
    {
        public AdminAreaSecurityMiddleware()
        {

        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            string? path = context.Request.Path.Value?.ToLower();
            if (!String.IsNullOrEmpty(path))
            {
                if (path == "/admin" || path.StartsWith("/admin/"))
                {
                    context.Response.Clear();
                    context.Response.StatusCode = 404;
                    await context.Response.WriteAsync("PAGE NOT FOUND");
                    return;
                }
            }

            await next(context);
        }
    }
}
