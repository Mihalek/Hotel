using HotelApi.DTO;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.IServices
{
    public interface IReservationService
    {
        Task<IEnumerable<ReservationDTO>> BrowseAsync();
        Task<IEnumerable<ReservationToGetDTO>> BrowseAsyncOfUser(int idOfUser);
        Task<ReservationDTO> GetAsync(int id);
        Task AddAsync(Reservation reservation);
        Task DeleteAsync(int id);
        Task CancelAsync(int id);
    }
}
