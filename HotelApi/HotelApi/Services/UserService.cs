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

        public async Task <IEnumerable<UserDTO>> BrowseAsync()
        {
            var clients = await dataContext.Users.ToListAsync();

            return mapper.Map<IEnumerable<UserDTO>>(clients);
        }

        public async Task DeleteAsync(int id)
        {
           var client =  dataContext.Users.FirstOrDefault(x => x.Id ==id);
           dataContext.Users.Remove(client);
           await dataContext.SaveChangesAsync();

        }

        public async Task<UserDTO> GetAsync(int id)
        {
            var client = await dataContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            return mapper.Map<UserDTO>(client);
        }
    }
}
