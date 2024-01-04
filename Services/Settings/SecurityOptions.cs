namespace You.RazorCMS.Services.Settings
{
    public class SecurityOptions
    {
        public SecurityOptions()
        {
            this.AdminAreaName = "Admin";
            this.AdministratorAccount = "admin";
            this.AdministratorPassword = "admin";
        }

        /// <summary>
        /// 后台入口名称
        /// </summary>
        public string AdminAreaName { get; set; }

        /// <summary>
        /// 超级管理员帐号
        /// </summary>
        public string AdministratorAccount { get; set; }

        /// <summary>
        /// 超级管理员密码
        /// </summary>
        public string AdministratorPassword { get; set; }

    }
}
