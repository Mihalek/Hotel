using HotelApi.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.IServices
{
    public interface IRoomService
    {
        Task<IEnumerable<RoomDTO>> BrowseAsync();
        Task<RoomDTO> GetAsync(int id);
        Task DeleteAsync(int id);
        Task<IEnumerable<RoomDTO>> BrowseFreeRooms(DateTime startDate, DateTime endDate);


    }
}
