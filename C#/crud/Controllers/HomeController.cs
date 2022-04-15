using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using crud.Models;
using Microsoft.EntityFrameworkCore;

namespace crud.Controllers
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
            ViewBag.AllDishes = _context.Dishes.ToList();
            return View();
        }

        [HttpGet("/dishes/view/{DishId}")]
        public IActionResult Details(int DishId)
        {
            Dish oneDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            ViewBag.what = oneDish;
            return View(oneDish);
        }

        [HttpGet("/dishes/edit/{DishId}")]
        public IActionResult Edit(int DishId)
        {
            Dish aDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            return View(aDish);
        }

        [HttpPost("/dishes/update/{DishId}")]
        public IActionResult Update(int DishId, Dish someDish)
        {
            if (ModelState.IsValid)
            {
                Dish OldDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
                OldDish.Name = someDish.Name;
                OldDish.Chef = someDish.Chef;
                OldDish.Calories = someDish.Calories;
                OldDish.Tastiness = someDish.Tastiness;
                OldDish.Description = someDish.Description;
                OldDish.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("Edit", someDish);
            }
        }

        [HttpGet("/dishes/delete/{DishId}")]
        public IActionResult Delete(int DishId)
        {
            Dish delDish = _context.Dishes.FirstOrDefault(i => i.DishId == DishId);
            _context.Remove(delDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet("New")]
        public IActionResult New()
        {
            return View();
        }
        
        [HttpPost("/dishes/add")]
        public IActionResult AddDish(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("New");
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
