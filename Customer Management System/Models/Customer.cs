using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Customer_Management_System.Models
{
    [Table("Customer")]
    public class Customer
    {
        [Key]
        [Required]
        public int CustomerId { get; set; }
        [MaxLength(50)]
        [Required]
        public string FirstName { get; set; }
        [MaxLength(50)]
        [Required]
        public string LastName { get; set; }
        [MaxLength(80)]
        [Required]
        public string Email { get; set; }
        [MaxLength(30)]
        [Required]
        public string Phone { get; set; }
        [MaxLength(50)]
        [Required]
        public string Address { get; set; }


    }
}
