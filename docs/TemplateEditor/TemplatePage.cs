namespace You.CMS.Frameworkd.TemplateEditor
{
    /// <summary>
    /// 模板页面
    /// </summary>
    public class TemplatePage
    {
        /// <summary>
        /// 页面名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 页面路径
        /// </summary>
        public string Path { get; set; }

        /// <summary>
        /// SEO标题
        /// </summary>
        public string? SeoTitle { get; set; }

        /// <summary>
        /// SEO关键字
        /// </summary>
        public string? SeoKeywords { get; set; }

        /// <summary>
        /// SEO描述
        /// </summary>
        public string? SeoDescription { get; set; }

        /// <summary>
        /// 区块
        /// </summary>
        public TemplateSection[] Sections { get; set; }
    }
}
