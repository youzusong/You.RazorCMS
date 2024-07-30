namespace You.CMS.Frameworkd.TemplateEditor.Component
{
    /// <summary>
    /// 图标横幅
    /// </summary>
    public class IconBanner
    {
        /// <summary>
        /// 图标名称
        /// </summary>
        public string IconName { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public Text Title { get; set; }

        /// <summary>
        /// 正文
        /// </summary>
        public Text Description { get; set; }

        /// <summary>
        /// 链接
        /// </summary>
        public Link Link { get; set; }
    }
}
