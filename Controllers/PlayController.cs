using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PIGUE.DataAccess;
using PIGUE.Models;

namespace PIGUE.Controllers
{
    [Route("api/plays")]
    [ApiController]
    public class PlayController : ControllerBase
    {
        PlayRepositiory _playRepository = new PlayRepositiory();

        [HttpGet]
        public IActionResult GetAllPlays()
        {
            var allPlays = _playRepository.GetAllPlays();
            return Ok(allPlays);
        }




    }
}
