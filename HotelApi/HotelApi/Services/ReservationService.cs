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
    public class ReservationService : IReservationService
    {
        private readonly DataContext dataContext;
        private readonly IMapper mapper;

        public ReservationService(DataContext dataContext_, IMapper mapper_)
        {
            dataContext = dataContext_;
            mapper = mapper_;
        }
        public async Task AddAsync(Reservation reservation)
        {
           
            await dataContext.Reservations.AddAsync(reservation);
            await dataContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<ReservationDTO>> BrowseAsync()
        {
            var reservations = await dataContext.Reservations.ToListAsync();

            return mapper.Map<IEnumerable<ReservationDTO>>(reservations);
        }
        public async Task<IEnumerable<ReservationToGetDTO>> BrowseAsyncOfUser(int idOfUser)
        {
            var reservations = await dataContext.Reservations.Where(x=> x.IdOfUser== idOfUser).ToListAsync();
            return mapper.Map<IEnumerable<ReservationToGetDTO>>(reservations);
        }

        public async Task CancelAsync(int id)
        {
            var reservation = await dataContext.Reservations.FirstOrDefaultAsync(x => x.Id == id);
            if (reservation != null)
            {
                reservation.IsCanceled = true;
                dataContext.Reservations.Update(reservation);
                await dataContext.SaveChangesAsync();
            };
            
        }

        public async Task DeleteAsync(int id)
        {
            var reservation = dataContext.Reservations.FirstOrDefault(x => x.Id == id);
            dataContext.Reservations.Remove(reservation);
            await dataContext.SaveChangesAsync();
        }

        public async Task<ReservationDTO> GetAsync(int id)
        {
            var reservation = await dataContext.Reservations.FirstOrDefaultAsync(x => x.Id == id);
            return mapper.Map<ReservationDTO>(reservation);
        }
    }
}
