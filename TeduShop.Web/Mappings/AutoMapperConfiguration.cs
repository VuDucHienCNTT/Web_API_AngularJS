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
                cfg.CreateMap< List<ProductCategory>, List<ProductCategoryViewModel>>();
                cfg.CreateMap< List<Product>, List<ProductViewModel>>();
                cfg.CreateMap< List<ProductTag>, List<ProductTagViewModel>>();
                cfg.CreateMap< List<Footer>, List<FooterViewModel>>();
                cfg.CreateMap< List<Slide>, List<SlideViewModel>>();
            });
        }
    }
}