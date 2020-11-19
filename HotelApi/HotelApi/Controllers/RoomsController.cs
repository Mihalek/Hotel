using HotelApi.Data;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly IRoomService roomService;
        public RoomsController(IRoomService roomService_)
        {
            roomService = roomService_;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var rooms = await roomService.BrowseAsync();
            return Ok(rooms);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var room = await roomService.GetAsync(id);
            return Ok(room);
        }


    }
}
