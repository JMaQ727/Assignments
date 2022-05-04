using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace exam.Models
{
    public class Rsvp
    {
        [Key]
        public int RsvpId {get; set;}
        public int UserId {get; set;}
        public int MeetUpId {get; set;}
        public User User {get;set;}
        public MeetUp MeetUp {get;set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}