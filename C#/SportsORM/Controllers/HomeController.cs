using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomensLeague = _context.Leagues
                .Where(i => i.Name.Contains("Women"))
                .ToList();
            ViewBag.HockeyLeague = _context.Leagues.Where(j => j.Sport.Contains("Hockey")).ToList();
            ViewBag.NotFootball = _context.Leagues.Where(j => !j.Sport.Contains("Football")).ToList();
            ViewBag.Test = _context.Leagues.Where(j => j.Name.Contains("Conference")).ToList();
            ViewBag.Atlantic = _context.Leagues.Where(j => j.Name.Contains("Atlantic")).ToList();
            ViewBag.Dallas = _context.Teams.Where(j => j.Location.Contains("Dallas")).ToList();
            ViewBag.Raptors = _context.Teams.Where(j => j.TeamName.Contains("Raptor")).ToList();
            ViewBag.LocCity = _context.Teams.Where(j => j.Location.Contains("City")).ToList();
            ViewBag.TeamT = _context.Teams.ToList().Where(j => j.TeamName[0] == 'T');
            ViewBag.AL = _context.Teams.OrderBy(j => j.Location).ToList();
            ViewBag.Reverse = _context.Teams.OrderByDescending(j => j.Location).ToList();
            ViewBag.Cooper = _context.Players.Where(j => j.LastName.Contains("Cooper")).ToList();
            ViewBag.Josh = _context.Players.Where(j => j.FirstName.Contains("Josh")).ToList();
            ViewBag.JoshCoop = _context.Players.Where(j => j.LastName.Contains("Cooper") && !j.FirstName.Contains("Josh")).ToList();
            ViewBag.AlexWyatt = _context.Players.Where(j => j.FirstName.Contains("Alex") || j.FirstName.Contains("Wyatt")).ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}