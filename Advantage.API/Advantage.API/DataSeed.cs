using System;
using System.Collections.Generic;
using System.Linq;
using Advantage.API.Models;

namespace Advantage.API
{
    public class DataSeed
    {
        private readonly ApiContext _ctx;

        public DataSeed(ApiContext ctx)
        {
            _ctx = ctx;
        }

        public void SeedData(int numberCustomers, int numberOrders)
        {
            if (!_ctx.Customers.Any())
            {
                SeedCustomers(numberCustomers);
                _ctx.SaveChanges();
            }

            if (!_ctx.Orders.Any())
            {
                SeedOrders(numberOrders);
                _ctx.SaveChanges();
            }

            if (!_ctx.Servers.Any())
            {
                SeedServers();
                _ctx.SaveChanges();
            }

        }

        private void SeedCustomers(int numberCustomers)
        {
            var customers = BuildCustomerList(numberCustomers);

            foreach (var customer in customers)
            {
                _ctx.Customers.Add(customer);
            }
        }
        private List<Customer> BuildCustomerList(int number)
        {
            var customers = new List<Customer>();

            for (var i = 1; i <= number; i++)
            {
                var name = Helpers.MakeCustomerName();
                customers.Add(new Customer
                {
                    Id = i,
                    Name = name,
                    Email = Helpers.MakeEmail(name),
                    State = Helpers.GetState()
                });
            }

            return customers;
        }

        private void SeedOrders(int numberOrders)
        {
            var orders = BuildOrderList(numberOrders);

            foreach (var order in orders)
            {
                _ctx.Orders.Add(order);
            }
        }
        private List<Order> BuildOrderList(int number)
        {
            var orders = new List<Order>();

            for (var i = 1; i <= number; i++)
            {
                var placed = Helpers.GetRandOrderPlaced();
                orders.Add(new Order
                {
                    Id = i,
                    Customer = Helpers.GetRandomCustomer(_ctx),
                    Total = Helpers.GetRandomOrderTotal(),
                    Placed = placed,
                    Completed = Helpers.GetRandOrderCompleted(placed)
                });
            }

            return orders;
        }

        private void SeedServers()
        {
            var servers = BuildServerList();

            foreach (var server in servers)
            {
                _ctx.Servers.Add(server);
            }
        }
        private List<Server> BuildServerList()
        {
            return new List<Server>()
            {
                new Server
                {
                    Id = 1,
                    Name = "DEV",
                    IsOnline = true
                },
                new Server
                {
                    Id = 2,
                    Name = "QA",
                    IsOnline = true
                },
                new Server
                {
                    Id = 3,
                    Name = "STAGE",
                    IsOnline = false
                },
                new Server
                {
                    Id = 4,
                    Name = "PROD",
                    IsOnline = true
                }
            };
        }
    }
}