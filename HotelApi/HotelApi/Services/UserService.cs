using AutoMapper;
using HotelApi.Data;
using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace HotelApi.Services
{
    public class UserService : IUserService
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;
        public UserService(DataContext _dataContext, IMapper _mapper)
        {
            dataContext = _dataContext;
            mapper = _mapper;
        }
        public async Task AddAsync(string name, string surname)
        {
            User client = new User
            {
                Name = name,
                Surname = surname
            };
            await dataContext.Users.AddAsync(client);
            await dataContext.SaveChangesAsync();
        }

        public async Task <IEnumerable<UserToGetDTO>> BrowseAsync()
        {
            var clients = await dataContext.Users.ToListAsync();

            return mapper.Map<IEnumerable<UserToGetDTO>>(clients);
        }

        public async Task DeleteAsync(int id)
        {
           var client =  dataContext.Users.FirstOrDefault(x => x.Id ==id);
           dataContext.Users.Remove(client);
           await dataContext.SaveChangesAsync();

        }
        public async Task UpdateUserAsync(int id, UserToUpdateDTO userToUpdateDTO)
        {
            var user = await dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user != null)
            {
                user.Name = userToUpdateDTO.Name;
                user.Surname = userToUpdateDTO.Surname;
                user.Role = userToUpdateDTO.Role;
                user.Address = userToUpdateDTO.Address;
                user.DateOfBirth = userToUpdateDTO.DateOfBirth.ToLocalTime();
                user.Email = userToUpdateDTO.Email;
                dataContext.Users.Update(user);
                await dataContext.SaveChangesAsync();
            };

        }

        public async Task ChangeRoleAsync(int id, string role)
        {
            var user = await dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user != null && user.Role != "main")
            {
                user.Role = role;
                dataContext.Users.Update(user);
                await dataContext.SaveChangesAsync();
            };

        }
        public async Task<UserToGetDTO> GetAsync(int id)
        {
            var client = await dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            return mapper.Map<UserToGetDTO>(client);
        }
    }
}
