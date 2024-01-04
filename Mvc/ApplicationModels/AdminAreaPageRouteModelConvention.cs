using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace You.RazorCMS.Mvc.ApplicationModels
{
    public class AdminAreaPageRouteModelConvention : IPageRouteModelConvention
    {
        public void Apply(PageRouteModel model)
        {
            foreach (SelectorModel selector in model.Selectors)
            {
                if (selector?.AttributeRouteModel?.Template is null)
                    continue;

                selector.AttributeRouteModel.Template.Replace("admin/", "manage/");
            }
        }
    }
}
