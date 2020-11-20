using HotelApi.DTO;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.IServices
{
    public interface IUserService
    {
        Task <IEnumerable<UserForLoginDTO>>  BrowseAsync();
        Task<UserForLoginDTO> GetAsync(int id);
        Task AddAsync(string name, string surname);
        Task DeleteAsync(int id);
    }
}
