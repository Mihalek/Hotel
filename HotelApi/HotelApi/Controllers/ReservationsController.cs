﻿using HotelApi.DTO;
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
                DateOfReservation = reservationToAddDTO.DateOfReservation.ToLocalTime(),
                StartReservation = reservationToAddDTO.StartReservation.ToLocalTime().AddHours(12),
                EndReservation = reservationToAddDTO.EndReservation.ToLocalTime().AddHours(10),
                IdOfRoom = reservationToAddDTO.IdOfRoom,
                IdOfUser = reservationToAddDTO.IdOfUser,
                IsCanceled = false,
                IsAccepted = false
            };

            await reservationService.AddAsync(reservation);
            return Ok();
        }
        [HttpGet("{idOfUser}")]
        public async Task<IActionResult> GetAsync(int idOfUser)
        {
            var reservations = await reservationService.BrowseAsyncOfUser(idOfUser);
            return Ok(reservations);
        }





    }
}
