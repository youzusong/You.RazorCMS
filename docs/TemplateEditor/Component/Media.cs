namespace You.CMS.Frameworkd.TemplateEditor.Component
{
    /// <summary>
    /// 媒体
    /// </summary>
    public class Media
    {
        /// <summary>
        /// 类型
        /// </summary>
        public MediaType Type { get; set; }

        /// <summary>
        /// 来源
        /// </summary>
        public string? Source { get; set; }

        /// <summary>
        /// 视频循环播放
        /// </summary>
        public bool IsVedioPlayCircle { get; set; }
    }

    public enum MediaType
    {
        Image,

        Vedio
    }
}
