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
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;
        public AuthController(IAuthService authService_)
        {
            authService = authService_;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDTO userForRegisterDTO)
        {
            userForRegisterDTO.Username = userForRegisterDTO.Username.ToLower();


            if (await authService.UserExists(userForRegisterDTO.Username))
            {
                return BadRequest("User is exists");
            }

            var userToCreate = new User
            {
                Username = userForRegisterDTO.Username,
                Name = userForRegisterDTO.Name,
                Surname = userForRegisterDTO.Surname,
                Address = userForRegisterDTO.Address,
                Email = userForRegisterDTO.Email,
                DateOfBirth = userForRegisterDTO.DateOfBirth,
                Role = "client"
            };

            var createdUser = await authService.Register(userToCreate, userForRegisterDTO.Password);

            return StatusCode(201);

        }
    }
}
