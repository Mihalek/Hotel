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

    public class RoomService : IRoomService
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;

        public RoomService(DataContext _dataContext, IMapper _mapper)
        {
            dataContext = _dataContext;
            mapper = _mapper;
        }

        public async Task<IEnumerable<RoomDTO>> BrowseAsync()
        {
            var rooms = await dataContext.Rooms.ToListAsync();

            return mapper.Map<IEnumerable<RoomDTO>>(rooms);
        }

        public async Task DeleteAsync(int id)
        {
            var room = dataContext.Rooms.FirstOrDefault(x => x.Id == id);
            dataContext.Rooms.Remove(room);
            await dataContext.SaveChangesAsync();
        }
    
        public async Task<RoomDTO> GetAsync(int id)
        {
            var room = await dataContext.Rooms.FirstOrDefaultAsync(x => x.Id == id);
            return mapper.Map<RoomDTO>(room);
        }

        public async Task<IEnumerable<RoomDTO>> BrowseFreeRooms(DateTime startDate, DateTime endDate)
        {
            var reservatedRooms = await dataContext.Reservations
                .Where(x => (x.StartReservation >= startDate && x.StartReservation<=endDate && x.IsCanceled==false) || (x.EndReservation >= startDate && x.EndReservation <= endDate && x.IsCanceled == false))
                .Select(x=>x.IdOfRoom).Distinct().ToListAsync();
            var rooms = dataContext.Rooms.Where(y => !reservatedRooms.Contains(y.Id));

            return mapper.Map<IEnumerable<RoomDTO>>(rooms);
        }


    }
}
