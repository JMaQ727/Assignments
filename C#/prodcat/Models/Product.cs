using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace prodcat.Models
{
    public class Product
    {
        [Key]
        public int ProductId {get; set;}
        [Required]
        public string Name {get; set;}
        [Required]
        public string Description {get;set;}
        [Required]
        public int Price {get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Association> OfCats {get;set;}
    }
}