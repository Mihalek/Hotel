using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.DTO
{
    public class UserToUpdateDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Username { get; set; }
        public string Role { get; set; }
        public string Address { get; set; }
    }
}
