using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using weddingplan.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace weddingplan.Controllers
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

        [HttpPost("/user/create")]
        public IActionResult Create(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(a => a.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                _context.Add(newUser);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("Index");
            }
        }

        [HttpPost("/user/login")]
        public IActionResult Login(LoginUser loginUser)
        {
            if(ModelState.IsValid)
            {
                User userInDb = _context.Users.FirstOrDefault(j => j.Email == loginUser.LoginEmail);
                if(userInDb == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Index");
                }
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LoginPassword);
                if(result == 0)
                {
                    ModelState.AddModelError("Password", "Invalid Email/Password");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Dashboard");
            } else {
                return View("Index");
            }
        }

        [HttpGet("Dashboard")]
        public IActionResult Dashboard()
        {
            if(HttpContext.Session.GetInt32("UserId") == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = HttpContext.Session.GetInt32("UserId");
            ViewBag.AllWeds = _context.Weddings.Include(j => j.WeddingsRsvp).ToList();
            return View();
        }

        [HttpGet("New")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("New")]
        public IActionResult NewWedding(Wedding newWed)
        {
            if(ModelState.IsValid)
            {
                newWed.UserId = (int)HttpContext.Session.GetInt32("UserId");
                _context.Add(newWed);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            } else {
                return View("New");
            }
        }

        [HttpGet("/wedding/{WeddingId}")]
        public IActionResult ViewWed(int WeddingId)
        {
            ViewBag.OneWedding = _context.Weddings.Include(k => k.WeddingsRsvp).ThenInclude(u => u.User).FirstOrDefault(j => j.WeddingId == WeddingId);
            return View();
        }

        [HttpPost("/wedding/rsvp")]
        public IActionResult Respond(Rsvp newRSVP)
        {
            _context.Add(newRSVP);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpPost("/wedding/update/{WeddingId}")]
        public IActionResult UnRSVP(int WeddingId)
        {
            Rsvp removeUser = _context.Rsvps.SingleOrDefault(i => i.WeddingId == WeddingId && i.UserId == (int)HttpContext.Session.GetInt32("UserId"));
            _context.Remove(removeUser);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpPost("/wedding/delete/{WeddingId}")]
        public IActionResult Delete(int WeddingId)
        {
            Wedding delWed = _context.Weddings.FirstOrDefault(i => i.WeddingId == WeddingId);
            _context.Remove(delWed);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
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
