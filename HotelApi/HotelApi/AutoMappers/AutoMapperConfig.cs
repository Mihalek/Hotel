using AutoMapper;
using HotelApi.DTO;
using HotelApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.AutoMappers
{
    public static class AutoMapperConfig
    {
        public static IMapper Initialize() => new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserForRegisterDTO>();
            cfg.CreateMap<User, UserForLoginDTO>();
            cfg.CreateMap<Room, RoomDTO>();
            cfg.CreateMap<Reservation, ReservationDTO>();
        }).CreateMapper();

    }
}
