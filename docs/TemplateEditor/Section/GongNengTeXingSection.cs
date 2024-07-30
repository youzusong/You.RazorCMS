using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using You.CMS.Frameworkd.TemplateEditor.Component;

namespace You.CMS.Frameworkd.TemplateEditor.Section
{
    public class GongNengTeXingSection : TemplateSection
    {
        /// <summary>
        /// 标题
        /// </summary>
        public Text Title { get; set; }

        /// <summary>
        /// 正文
        /// </summary>
        public Text Description { get; set; }

        /// <summary>
        /// 媒体
        /// </summary>
        public Media Media { get; set; }
    }
}
