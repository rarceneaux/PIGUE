using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PIGUE.DataAccess;
using PIGUE.Models;

namespace PIGUE.Controllers
{
    [Route("api/roster")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        PlayerRepository _playerRepository = new PlayerRepository();

        /*GET ALL PLAYERS*/
        [HttpGet]
            public IActionResult GetAllPlayers()
            {
                var allPlayers = _playerRepository.GetAllPlayers();
                return Ok(allPlayers);
            }
        }
}