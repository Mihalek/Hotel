using AutoMapper;
using HotelApi.Data;
using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Services
{
    public class MessageService : IMessageService
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;

        public MessageService(DataContext _dataContext, IMapper _mapper)
        {
            dataContext = _dataContext;
            mapper = _mapper;
        }
        public Task AcceptAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task AddAsync(Message message)
        {
            await dataContext.Messages.AddAsync(message);
            await dataContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<MessageDTO>> BrowseAsync()
        {
            var messages = await dataContext.Messages.OrderByDescending(x=>x.DateOfSend).ToListAsync();

            return mapper.Map<IEnumerable<MessageDTO>>(messages);
        }

        public async Task<IEnumerable<MessageDTO>> BrowseAsyncOfUser(int id )
        {
            var messages = await dataContext.Messages.Where(x => x.Id == id).ToListAsync();
            return mapper.Map<IEnumerable<MessageDTO>>(messages);
        }

        public async Task ReadMessageAsync(int id)
        {
            var message = await dataContext.Messages.FirstOrDefaultAsync(x => x.Id == id);
            if (message != null)
            {
                message.IsRead = true;
                dataContext.Messages.Update(message);
                await dataContext.SaveChangesAsync();
            };
        }




        public async Task DeleteAsync(int id)
        {
            var message = dataContext.Messages.FirstOrDefault(x => x.Id == id);
            dataContext.Messages.Remove(message);
            await dataContext.SaveChangesAsync();
        }

        public async Task<MessageDTO> GetAsync(int id)
        {
            var message = await dataContext.Messages.FirstOrDefaultAsync(x => x.Id == id);
            return mapper.Map<MessageDTO>(message);
        }
    }
}
