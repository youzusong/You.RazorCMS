using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace You.RazorCMS.Mvc.ApplicationModels
{
    public class AdminAreaPageRouteModelConvention : IPageRouteModelConvention
    {
        private readonly string _areaName;

        public AdminAreaPageRouteModelConvention(string areaName)
        {
            _areaName = areaName;
        }

        public void Apply(PageRouteModel model)
        {
            foreach (SelectorModel selector in model.Selectors)
            {
                if (selector?.AttributeRouteModel?.Template is null)
                    continue;

                selector.AttributeRouteModel.Template = selector.AttributeRouteModel.Template.Replace("Admin/", _areaName + "/");
            }
        }
    }
}
