using HotelApi.Data;
using HotelApi.DTO;
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
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService userService;
        public UsersController(IUserService _usersService)
        {
            userService = _usersService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var users = await userService.BrowseAsync();
            return Ok(users);
        }

        
        [HttpPut("updateuser/{id}")]
        public async Task<IActionResult> UpdateAsync(int id, UserToUpdateDTO userToUpdateDTO)
        {
            await userService.UpdateUserAsync(id, userToUpdateDTO);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var user = await userService.GetAsync(id);
            return Ok(user);
        }

        [HttpPost("removeuser")]
        public async Task<IActionResult> RemoveUser(NumberDTO number)
        {
            await userService.DeleteAsync(number.Id);
            return Ok();
        }

        [HttpPost("changerole")]
        public async Task<IActionResult> ChangeRoleOfUser(UserForChangeRoleDTO userForChangeRoleDTO)
        {
            await userService.ChangeRoleAsync(userForChangeRoleDTO.Id, userForChangeRoleDTO.Role);
            return Ok();
        }
    }
}
