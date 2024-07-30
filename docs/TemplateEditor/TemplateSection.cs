using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace You.CMS.Frameworkd.TemplateEditor
{
    /// <summary>
    /// 模板区块
    /// </summary>
    public class TemplateSection
    {
        /// <summary>
        /// 版式
        /// </summary>
        public string Mode { get; set; }

        /// <summary>
        /// 配色方案
        /// </summary>
        public string Color { get; set; }

        /// <summary>
        /// 对齐方式
        /// </summary>
        public string Align { get; set; }

        /// <summary>
        /// 样式
        /// </summary>
        public TemplateSectionStyle Style { get; set; }


    }

    public class TemplateSectionStyle
    {
        public TemplateSectionStyleBackgroundType BackgroundType { get; set; }
        
        public string? BackgroundColor { get; set; }

        public string? BackgroundImage { get; set; }

        /// <summary>
        /// 水平间距
        /// </summary>
        public int MarginHorizon { get; set; }

        /// <summary>
        /// 垂直间距
        /// </summary>
        public int MarginVertical { get; set; }

        public int MarginLeft { get; set; }

        public int MarginTop { get; set; }

        public int MarginRight { get; set; }

        public int MarginBottom { get; set; }
    }

    public enum TemplateSectionStyleBackgroundType
    {
        Color,

        Image
    }
}
