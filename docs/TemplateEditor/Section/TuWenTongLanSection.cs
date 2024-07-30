using You.CMS.Frameworkd.TemplateEditor.SectionField;

namespace You.CMS.Frameworkd.TemplateEditor.Section
{
    /// <summary>
    /// 图文通栏区块
    /// </summary>
    public class TuWenTongLanSection : TemplateSection
    {
        /// <summary>
        /// 展示方式
        /// </summary>
        public TuWenTongLanSectionShowMode ShowMode { get; set; }

        /// <summary>
        /// 静态项
        /// </summary>
        public SectionMediaBannerItem? StaticItem { get; set; }

        /// <summary>
        /// 轮播间隔时间
        /// </summary>
        public int CarouseIntervalTime { get; set; }

        /// <summary>
        /// 轮播项
        /// </summary>
        public SectionMediaBannerItem[] CarouselItems { get; set; }

    }

    public enum TuWenTongLanSectionShowMode
    {
        /// <summary>
        /// 静态
        /// </summary>
        Static,

        /// <summary>
        /// 轮播
        /// </summary>
        Carsoule
    }
}
