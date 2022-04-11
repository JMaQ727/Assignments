using System;
using System.ComponentModel.DataAnnotations;

namespace dojosurvey.Models
{
    public class Survey 
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
        public string name {get;set;}

        [Required (ErrorMessage = "This field is required.")]
        public string location {get;set;}

        [Required (ErrorMessage = "This field is required.")]
        public string language {get;set;}

        [MinLength(20, ErrorMessage = "This field must contain at least 20 characters.")]
        public string comments {get;set;}
    }
}