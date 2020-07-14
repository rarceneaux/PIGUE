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
    [Route("api/playbook")]
    [ApiController]
    public class PlayController : ControllerBase
    {
        PlayRepository _playRepository = new PlayRepository();

        /*GET ALL PLAYS*/
        [HttpGet]
        public IActionResult GetAllPlays()
        {
            var allPlays = _playRepository.GetAllPlays();
            return Ok(allPlays);
        }

        /*ADD NEW PLAY*/
        [HttpPost]
        public IActionResult AddNewPlay(Play playToAdd)
        {
            try
            {
                var playAdded = _playRepository.AddNewPlay(playToAdd);
                return Created("", playAdded);
            }
            catch(Exception e)
            {
                Console.Write(e.Message);
                return Created("", new object());

            }
        }
    }
}
