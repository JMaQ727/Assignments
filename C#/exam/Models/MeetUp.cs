using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace exam.Models
{
    public class MeetUp
    {
        [Key]
        public int MeetUpId {get;set;}

        [Required]
        public string Title {get;set;}

        [Required]
        public DateTime Date {get;set;}

        [Required]
        public int Duration {get;set;}

        [Required]
        public string DurationLength {get;set;}

        [Required]
        public string Description {get;set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public List<Rsvp> MeetingUsers {get;set;}

        public int UserId {get;set;}

        public User Meeter {get;set;}
    }
}