using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace HotelApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;
        private readonly IConfiguration config;
        public AuthController(IAuthService authService_, IConfiguration config_)
        {
            authService = authService_;
            config = config_;

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO userForLoginDTO)
        {
            var userFromService = await authService.Login(userForLoginDTO.Username.ToLower(), userForLoginDTO.Password);

            if (userFromService == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromService.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromService.Username)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddHours(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
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
                DateOfBirth = userForRegisterDTO.DateOfBirth.ToLocalTime(),
                Role = "client"
            };

            var createdUser = await authService.Register(userToCreate, userForRegisterDTO.Password);

            return StatusCode(201);

        }
    }
}
