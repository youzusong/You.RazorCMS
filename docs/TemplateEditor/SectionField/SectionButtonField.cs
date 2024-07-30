using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace You.CMS.Frameworkd.TemplateEditor.SectionField
{
    public class SectionButtonField
    {
        /// <summary>
        /// 
        /// </summary>
        public string Text { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ButtonFieldLinkOpenType LinkOpenType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public ButtonFieldLinkUrlType LinkUrlType { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string? LinkUrl { get; set; }


    }

    public enum ButtonFieldLinkUrlType
    {
        None,

        Inner,

        Outer
    }

    public enum ButtonFieldLinkOpenType
    {
        CurrentPage,

        NewPage
    }
}
