using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace You.CMS.Frameworkd.TemplateEditor.Component
{
    public class Link
    {
        public LinkOpenType OpenType { get; set; }

        public LinkUrlType UrlType { get; set; }

        public string? Url { get; set; }
    }

    public enum LinkUrlType
    {
        None,

        Inner,

        Outer
    }

    public enum LinkOpenType
    {
        CurrentPage,

        NewPage
    }
}
