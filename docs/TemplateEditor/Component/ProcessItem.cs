using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace You.CMS.Frameworkd.TemplateEditor.Component
{
    /// <summary>
    /// 流程项
    /// </summary>
    public class ProcessItem
    {
        /// <summary>
        /// 图标名称
        /// </summary>
        public string IconName { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string? Title { get; set; }

        /// <summary>
        /// 正文
        /// </summary>
        public string? Body { get; set; }

        /// <summary>
        /// 线条样式
        /// </summary>
        public ProcessItemBorderStyle BorderStyle { get; set; }

        /// <summary>
        /// 线条颜色
        /// </summary>
        public string BorderColor { get; set; }

        /// <summary>
        /// 显示箭头
        /// </summary>
        public bool ShowArrow { get; set; }
    }

    public enum ProcessItemBorderStyle
    {
        Solid,

        Dashed
    }
}
