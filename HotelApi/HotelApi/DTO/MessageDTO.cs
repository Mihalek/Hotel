using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.DTO
{
    public class MessageDTO
    {
        public int Id { get; set; }
        public DateTime DateOfSend { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string EmailAddress { get; set; }
        public string MessageContent { get; set; }
        public bool IsRead { get; set; }
    }
}
