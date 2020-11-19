using HotelApi.DTO;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.IServices
{
    public interface IAuthService
    {
        Task<UserForRegisterDTO> Register(User user, string password);
        Task<UserForLoginDTO> Login(string login, string password);
    }
}
