using HotelApi.DTO;
using HotelApi.IServices;
using HotelApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {

        private readonly IMessageService messageService; 
        public MessagesController(IMessageService _messageService)
        {
            messageService=_messageService ;
        }

        [HttpPost("sendmessage")]
        public async Task<IActionResult> AddAsync(MessageDTO messageDTO)
        {
            Message message = new Message
            {
                DateOfSend = messageDTO.DateOfSend,
                EmailAddress = messageDTO.EmailAddress,
                MessageContent = messageDTO.MessageContent,
                IsRead = false,
                Name = messageDTO.Name,
                Surname = messageDTO.Surname,
                Title = messageDTO.Title
            };

            await messageService.AddAsync(message);
            return Ok();
        }


        [HttpPost("readmessage")]
        public async Task<IActionResult> ReadMessage(NumberDTO numberDTO)
        {
            await messageService.ReadMessageAsync(numberDTO.Id);
            return Ok();
        }


        [HttpGet]
        public async Task<IActionResult> GetAllMessages()
        {
            var messages = await messageService.BrowseAsync();
            return Ok(messages);
        }


    }
}
