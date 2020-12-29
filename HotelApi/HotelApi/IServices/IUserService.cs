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
        Task <IEnumerable<UserToGetDTO>>  BrowseAsync();
        Task<UserToGetDTO> GetAsync(int id);
        Task AddAsync(string name, string surname);
        Task DeleteAsync(int id);
        Task UpdateUserAsync(int id, UserToUpdateDTO userToUpdateDTO);
        Task ChangeRoleAsync(int id, string role);

    }
}
