using System;
using Microsoft.AspNetCore.Mvc;

namespace survey.Controllers
{
    public class TheController : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
        return View("Index");
        }
        [HttpPost("postForm")]
        public IActionResult postForm(string name, string location, string language, string comments)
        {
            Console.WriteLine($"Name is {name}");
            Console.WriteLine($"Location is {location}");
            Console.WriteLine($"Favorite Language is {language}");
            Console.WriteLine($"Comments are {comments}");
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.language = language;
            ViewBag.comments = comments;
            return View("Result");
        }

    }
}