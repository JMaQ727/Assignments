using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using exam.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace exam.Controllers
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
            HttpContext.Session.Clear();
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
                return RedirectToAction("MeetUp");
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
                    ModelState.AddModelError("LoginEmail", "Invalid Email/Password");
                    return View("Index");
                }
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LoginPassword);
                if(result == 0)
                {
                    ModelState.AddModelError("LoginPassword", "Invalid Email/Password");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("MeetUp");
            } else {
                return View("Index");
            }
        }

        [HttpGet("MeetUp")]
        public IActionResult MeetUp()
        {
            if(HttpContext.Session.GetInt32("UserId") == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = HttpContext.Session.GetInt32("UserId");
            ViewBag.UserLogged = _context.Users.FirstOrDefault(j => j.UserId == HttpContext.Session.GetInt32("UserId"));
            ViewBag.AllMeets = _context.MeetUps.Include(k => k.Meeter).Include(j => j.MeetingUsers).ThenInclude(u => u.User).OrderBy(z => z.Date).ToList();
            return View();
        }

        [HttpGet("/meetups/new")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("/meetups/new")]
        public IActionResult NewMeet(MeetUp newMeet)
        {
            if(ModelState.IsValid)
            {
                if (newMeet.Date < DateTime.Now)
                {
                    ModelState.AddModelError("Date", "Date cannot be in the past.");
                    return View("New");
                }
                newMeet.UserId = (int)HttpContext.Session.GetInt32("UserId");
                _context.Add(newMeet);
                _context.SaveChanges();
                return RedirectToAction("MeetUp");
            } else {
                return View("New");
            }
        }

        [HttpGet("/meetups/{MeetUpId}")]
        public IActionResult ViewMeet(int MeetUpId)
        {
            ViewBag.LoggedInUser = HttpContext.Session.GetInt32("UserId");
            ViewBag.Coordinator = _context.MeetUps.Include(j => j.Meeter).FirstOrDefault(j => j.MeetUpId == MeetUpId);
            ViewBag.OneMeeting = _context.MeetUps.Include(k => k.MeetingUsers).ThenInclude(u => u.User).FirstOrDefault(j => j.MeetUpId == MeetUpId);
            return View();
        }

        [HttpPost("/meetups/rsvp")]
        public IActionResult Respond(Rsvp newRSVP)
        {
            _context.Add(newRSVP);
            _context.SaveChanges();
            return RedirectToAction("MeetUp");
        }

        [HttpPost("/meetups/update/{MeetUpId}")]
        public IActionResult UnRSVP(int MeetUpId)
        {
            Rsvp removeUser = _context.Rsvps.SingleOrDefault(i => i.MeetUpId == MeetUpId && i.UserId == (int)HttpContext.Session.GetInt32("UserId"));
            _context.Remove(removeUser);
            _context.SaveChanges();
            return RedirectToAction("MeetUp");
        }

        [HttpPost("/meetups/delete/{MeetUpId}")]
        public IActionResult Delete(int MeetUpId)
        {
            MeetUp delMeet = _context.MeetUps.FirstOrDefault(i => i.MeetUpId == MeetUpId);
            _context.Remove(delMeet);
            _context.SaveChanges();
            return RedirectToAction("MeetUp");
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
