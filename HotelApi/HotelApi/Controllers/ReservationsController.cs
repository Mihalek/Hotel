using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservationsController : ControllerBase
    {
        private readonly IReservationService reservationService;
        private readonly IRoomService roomService;
        private readonly IUserService userService;
        public ReservationsController(IReservationService reservationService_, IRoomService roomService_, IUserService userService_)
        {
            reservationService = reservationService_;
            roomService = roomService_;
            userService = userService_;
        }
        
        [HttpPost("reserve")]
        public async Task<IActionResult> AddAsync(ReservationToAddDTO reservationToAddDTO) 
        {
            Reservation reservation = new Reservation
            {
                DateOfReservation = reservationToAddDTO.DateOfReservation,
                StartReservation = reservationToAddDTO.StartReservation,
                EndReservation = reservationToAddDTO.EndReservation,
                IdOfRoom = reservationToAddDTO.IdOfRoom,
                IdOfUser = reservationToAddDTO.IdOfUser,
                IsCanceled = false
            };

            await reservationService.AddAsync(reservation);
            return Ok();
        }
        

        


    }
}
