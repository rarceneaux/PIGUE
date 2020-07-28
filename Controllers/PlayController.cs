using System;
using Microsoft.AspNetCore.Mvc;
using PIGUE.DataAccess;
using PIGUE.Models;

namespace PIGUE.Controllers
{
    [Route("api/playbook")]
    [ApiController]
    public class PlayController : ControllerBase
    {
        PlayRepository _playRepository = new PlayRepository();
        PlayerRepository _playerRepository = new PlayerRepository();

        /*GET ALL PLAYS*/
        [HttpGet]
        public IActionResult GetAllPlays()
        {
            var allPlays = _playRepository.GetAllPlays();
            return Ok(allPlays);
        }

        /*ADD NEW PLAY*/
        [HttpPost]
        public IActionResult AddNewPlay(PlayForm playToAdd)
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

        [HttpGet("{playId}")]
        public IActionResult GetPlayById(int playId)
        {
            var play = _playRepository.GetPlayById(playId);
            var playviewmodel = new CompletePlayViewModel()
            {
                PlayName = play.Name,
                FormationName = play.FormationName,
                Players = _playerRepository.GetPlayersFor(playId)
            };
            if (play == null) return NotFound("This Play is not in our playbook coach.");
            return Ok(playviewmodel); 
        }
    }
}
