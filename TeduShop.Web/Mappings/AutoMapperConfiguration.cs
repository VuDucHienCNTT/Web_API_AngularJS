using AutoMapper;
using System.Collections.Generic;
using TeduShop.Model.Models;
using TeduShop.Web.Models;

namespace TeduShop.Web.Mappings
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<List<Post>, List<PostViewModel>>();
                cfg.CreateMap<List<Tag>, List<TagViewModel>>();
                cfg.CreateMap<List<PostCategory>, List<PostCategoryViewModel>>();
            });
        }
    }
}