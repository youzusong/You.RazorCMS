using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using You.CMS.Frameworkd.TemplateEditor.Component;

namespace You.CMS.Frameworkd.TemplateEditor.Section
{
    public class ShiJianZhouSection : TemplateSection
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 正文
        /// </summary>
        public string Body { get; set; }

        /// <summary>
        /// 流程项
        /// </summary>
        public ProcessItem ProcessItems { get; set; }

    }
}
