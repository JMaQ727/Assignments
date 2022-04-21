using System;
using System.ComponentModel.DataAnnotations;

namespace prodcat.Models
{
    public class Association
    {
        [Key]
        public int AsscociationId {get; set;}
        public int CategoryId {get; set;}
        public int ProductId {get; set;}
        public Product Product {get;set;}
        public Category Category {get;set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}