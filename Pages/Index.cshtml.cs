using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Options;
using You.RazorCMS.Services.Settings;

namespace You.RazorCMS.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly SecurityOptions _securityOpts;

        public IndexModel(ILogger<IndexModel> logger, IOptions<SecurityOptions> securityOpts)
        {
            _logger = logger;
            _securityOpts = securityOpts.Value;
        }

        public void OnGet()
        {
            string adminAreaName = _securityOpts.AdminAreaName;
        }
    }
}