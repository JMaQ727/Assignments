using Microsoft.EntityFrameworkCore;

namespace exam.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        public DbSet<User> Users {get;set;}
        public DbSet<MeetUp> MeetUps {get;set;}
        public DbSet<Rsvp> Rsvps {get;set;}
    }
}