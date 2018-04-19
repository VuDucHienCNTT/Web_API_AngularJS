using System;
using System.Collections.Generic;
using TeduShop.Data.Infrastructure;
using TeduShop.Data.Repositories;
using TeduShop.Model.Models;

namespace TeduShop.Service
{
    public interface IProductService
    {
        Product Add(Product product);

        void Update(Product product);

        void Delete(int id);

        IEnumerable<Product> GetAll();

        IEnumerable<Product> GetAll(string keyword);

        Product GetById(int id);

        void Save();
    }

    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;
        private IUnitOfWork _unitOfWork;

        public ProductService(IProductRepository productService, IUnitOfWork unitOfWork)
        {
            this._productRepository = productService;
            this._unitOfWork = unitOfWork;
        }

        public Product Add(Product product)
        {
            return _productRepository.Add(product);
        }

        public void Delete(int id)
        {
            _productRepository.Delete(id);
        }

        public IEnumerable<Product> GetAll(string keyword)
        {

            if (!string.IsNullOrEmpty(keyword))
            {
                return _productRepository.GetMulti(x => x.Name.Contains(keyword) || x.Description.Contains(keyword));
            }
            else
            {
                return _productRepository.GetAll();
            }
        }

        public IEnumerable<Product> GetAll()
        {
            return _productRepository.GetAll();
        }

        public Product GetById(int id)
        {
            return _productRepository.GetSingleById(id);
        }

        public void Save()
        {
            _unitOfWork.Commit();
        }

        public void Update(Product product)
        {
            _productRepository.Update(product);
        }
    }
}