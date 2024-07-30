namespace You.CMS.Frameworkd.TemplateEditor.Component
{
    /// <summary>
    /// 菜单项
    /// </summary>
    public class MenuItem
    {
        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 链接
        /// </summary>
        public Link Link { get; set; }

        /// <summary>
        /// 子菜单项
        /// </summary>
        public MenuItem[] SubItems { get; set; }
    }
}
