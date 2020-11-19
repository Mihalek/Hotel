﻿using HotelApi.Data;
using HotelApi.IServices;
using HotelApi.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Controllers
{
    [ApiController]
    [Route("Clients")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService userService;
        public UsersController(IUserService _usersService)
        {
            userService = _usersService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var clients = await userService.BrowseAsync();
            await userService.AddAsync("Wojtek", "Kowalski");
            return Ok(clients);
        }
    }
}
