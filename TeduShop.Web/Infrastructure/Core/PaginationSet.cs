using System.Collections.Generic;
using System.Linq;

namespace TeduShop.Web.Infrastructure.Core
{
    public class PaginationSet<T>
    {
        public int Page { set; get; }

        public int Count
        {
            get
            {
                return (Items != null) ? Items.Count() : 0;
            }
        }

        public int TotalPages { set; get; }// tong so trang
        public int TotalCount { set; get; }// tong so ban ghi
        public IEnumerable<T> Items { set; get; }
    }
}