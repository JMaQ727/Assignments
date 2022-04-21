using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using prodcat.Models;
using Microsoft.EntityFrameworkCore;

namespace prodcat.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Products")]
        public IActionResult Products()
        {
            ViewBag.AllProducts = _context.Products.ToList();
            return View();
        }

        [HttpPost("Products")]
        public IActionResult AddProduct(Product newProduct)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newProduct);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            } else {
                return View("Products");
            }
        }

        [HttpGet("Categories")]
        public IActionResult Categories()
        {
            ViewBag.AllCats = _context.Categories.ToList();
            return View();
        }

        [HttpPost("Categories")]
        public IActionResult AddCategory(Category newCategory)
        {
            if (ModelState.IsValid)
            {
                _context.Add(newCategory);
                _context.SaveChanges();
                return RedirectToAction("Products");
            } else {
                return View("Categories");
            }
        }

        [HttpGet("/products/{ProductId}")]
        public IActionResult ViewProd(int ProductId)
        {
            ViewBag.OneProd = _context.Products.Include(s => s.OfCats).ThenInclude(d => d.Category).FirstOrDefault(j => j.ProductId == ProductId);
            ViewBag.AllCats = _context.Categories.ToList();
            return View();
        }
        [HttpGet("/categories/{CategoryId}")]
        public IActionResult ViewCat(int CategoryId)
        {
            ViewBag.OneCat = _context.Categories.Include(s => s.ProdsInCat).ThenInclude(d => d.Product).FirstOrDefault(j => j.CategoryId == CategoryId);
            ViewBag.AllProds = _context.Products.ToList();
            return View();
        }

        [HttpPost("/ass/add")]
        public IActionResult AddAss(Association newAss)
        {
            _context.Associations.Add(newAss);
            _context.SaveChanges();
            return RedirectToAction("Products");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
