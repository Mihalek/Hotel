using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Services
{
    public class AuthService : IAuthService
    {
        public Task<UserForLoginDTO> Login(string login, string password)
        {
            throw new NotImplementedException();
        }

        public Task<UserForRegisterDTO> Register(User user, string password)
        {
            throw new NotImplementedException();
        }
    }
}
