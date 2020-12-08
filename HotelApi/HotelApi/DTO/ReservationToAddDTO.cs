using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.DTO
{
    public class ReservationToAddDTO
    {
        public DateTime DateOfReservation { get; set; }
        public DateTime StartReservation { get; set; }
        public DateTime EndReservation { get; set; }
        public int IdOfUser { get; set; }
        public int IdOfRoom { get; set; }
    }
}
