using System.Web;
using System.Web.Mvc;

namespace castelar.parcial1.gonzalezmoro.juancruz
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
