using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Models
{
    public class Room
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int NumberOfRoom { get; set; }
        public int NumberOfPeople { get; set; }
        public int NumberOfBeds { get; set; }
        public string Description { get; set; }
        public bool IsViewOnMountains { get; set; }
        public bool IsBathroom { get; set; }
        public bool IsToilet { get; set; }
        public bool IsTv { get; set; }
        public decimal DayPrice { get; set; }
        public string UrlOfPhoto { get; set; }

    }
}
