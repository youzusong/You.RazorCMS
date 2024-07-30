namespace You.CMS.Frameworkd.TemplateEditor.SectionField
{
    public class SectionMediaBannerItem
    {
        /// <summary>
        /// 媒体类型
        /// </summary>
        public SectionMediaBannerItemMediaType MediaType { get; set; }

        /// <summary>
        /// 图片
        /// </summary>
        public string? MediaImage { get; set; }

        /// <summary>
        /// 视频
        /// </summary>
        public string? MediaVedio { get; set; }

        /// <summary>
        /// 视频是否循环播放
        /// </summary>
        public bool IsVedioPlayCircle { get; set; }

        /// <summary>
        /// 标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 正文
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 主按钮
        /// </summary>
        public SectionButtonField MainButton { get; set; }

        /// <summary>
        /// 次级按钮
        /// </summary>
        public SectionButtonField SecondaryButton { get; set; }
    }

    public enum SectionMediaBannerItemMediaType
    {
        Image,

        Vedio
    }
}
