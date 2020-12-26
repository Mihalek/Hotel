using HotelApi.DTO;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.IServices
{
    public interface IMessageService
    {
        Task<IEnumerable<MessageDTO>> BrowseAsync();
        Task<IEnumerable<MessageDTO>> BrowseAsyncOfUser(int idOfUser);
        Task<MessageDTO> GetAsync(int id);
        Task AddAsync(Message message);
        Task ReadMessageAsync(int id);
        Task DeleteAsync(int id);
        Task AcceptAsync(int id);
    }
}
