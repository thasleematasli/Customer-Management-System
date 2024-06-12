using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Customer_Management_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Customer_Management_System.DAL
{
    public class CMSDb : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public CMSDb():base()
        {

        }
        public CMSDb(DbContextOptions options):base(options)
        {

        }
    }
}
