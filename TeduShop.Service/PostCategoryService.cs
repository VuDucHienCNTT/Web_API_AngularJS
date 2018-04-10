using System.Collections.Generic;
using TeduShop.Data.Infrastructure;
using TeduShop.Data.Repositories;
using TeduShop.Model.Models;

namespace TeduShop.Service
{
    public interface IPostCategoryService
    {
        void Add(PostCategory postCategory);

        void Update(PostCategory postCategory);

        void Delete(int id);

        IEnumerable<PostCategory> GetAll();

        IEnumerable<PostCategory> GetAllByParentId(int parentId);

        PostCategory GetById(int id);

        void Save();
    }

    public class PostCategoryService : IPostCategoryService
    {
        private IPostCategoryRepository _postCategoryReporsitory;
        private IUnitOfWork _unitOfWork;

        public PostCategoryService(IPostCategoryRepository postCategoryReporsitory, IUnitOfWork unitOfWork)
        {
            this._postCategoryReporsitory = postCategoryReporsitory;
            this._unitOfWork = unitOfWork;
        }

        public void Add(PostCategory postCategory)
        {
            _postCategoryReporsitory.Add(postCategory);
        }

        public void Delete(int id)
        {
            _postCategoryReporsitory.Delete(id);
        }

        public IEnumerable<PostCategory> GetAll()
        {
            return _postCategoryReporsitory.GetAll();
        }

        public IEnumerable<PostCategory> GetAllByParentId(int parentId)
        {
            return _postCategoryReporsitory.GetMulti(x => x.Status && x.ParentID == parentId);
        }
          
        public PostCategory GetById(int id)
        {
            return _postCategoryReporsitory.GetSingleById(id);
        }

        public void Save()
        {


            _unitOfWork.Commit();
        }

        public void Update(PostCategory postCategory)
        {
            _postCategoryReporsitory.Update(postCategory);
        }
    }
}