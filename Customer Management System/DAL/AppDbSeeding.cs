using Microsoft.AspNetCore.Builder;
using System.Collections.Generic;
using System;
using Microsoft.Extensions.DependencyInjection;
using Customer_Management_System.Models;
using System.Linq;

namespace Customer_Management_System.DAL
{
    public class AppDbSeeding
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<CMSDb>();

                context.Database.EnsureCreated();

                //Customer Details
                if (!context.Customers.Any())
                {
                    context.Customers.AddRange(new List<Customer>()
                    {
                        new Customer()
                        {
                            CustomerId=0,
                            FirstName="Hugo",
                            LastName="Lam",
                            Email="hugo@gmail.com",
                            Phone="578963152",
                            Address="Dubai"
                        },
                        new Customer()
                        {
                           CustomerId=0,
                            FirstName="Mimi",
                            LastName="Dol",
                            Email="mimi@gmail.com",
                            Phone="504586256",
                            Address="Sharjah"
                        },
                        new Customer()
                        {
                            CustomerId=0,
                            FirstName="Paco",
                            LastName="jan",
                            Email="paco@gmail.com",
                            Phone="523678945",
                            Address="Dubai"
                        },
                        new Customer()
                        {
                            CustomerId=0,
                            FirstName="Dina",
                            LastName="Dias",
                            Email="dina@gmail.com",
                            Phone="563254895",
                            Address="Abu dhabi"
                        },
                        new Customer()
                        {
                            CustomerId=0,
                            FirstName="Luis",
                            LastName="Kay",
                            Email="luis@gmail.com",
                            Phone="563278956",
                            Address="Dubai"
                        },
                    });
                    context.SaveChanges();
                }

            }

        }
    }
}
