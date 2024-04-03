using IMSystem.Context;
using IMSystem.Interface;
using IMSystem.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IMSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("CreateProduct")]
        public async Task<IActionResult> CreatProduct(Product product)
        {
          await _context.products.AddAsync(product);
          await _context.SaveChangesAsync();

            return Ok(product);
        }

        [HttpGet("GetAllProduct")]

        public async Task<IActionResult> GetAllProduct()
        {
          var product =   await _context.products.ToListAsync();
            if (product == null)
            {
                throw new Exception("Product not found. Please enter a valid number");
            }
            return Ok(product);
        }


        [HttpPut("UpdateProduct")]
        public async Task<int> UpdateProduct(Product product)
        {
            var result = await _context.products.Where(x => x.ID == product.ID).FirstOrDefaultAsync();
            if(result == null)
            {
                throw new Exception("Product not found. Please enter a valid number");
            }
            result.ProductName = product.ProductName;
            result.Description = product.Description;
            result.Quantity = product.Quantity;

            await _context.SaveChangesAsync();
            return product.ID;
        }

        [HttpDelete("DeleteProduct/{id}")]
        public async Task<int> DeleteProduct(int id)
        {
           var result =  await _context.products.Where(x => x.ID == id).FirstOrDefaultAsync();
            if(result == null)
            {
                throw new Exception("Product not found. Please enter a valid number");
            }
           _context.products.Remove(result);
            await _context.SaveChangesAsync();
            return result.ID;
        }

        [HttpGet("GetProductById/{id}")]

        public async Task<IActionResult> GetProductById(int id)
        {

            var product = await _context.products.Where(x => x.ID == id).FirstOrDefaultAsync();
            if (product == null)
            {
                throw new Exception("Product not found. Please enter a valid number");
            }
            return Ok(product);
        }

    }
}
