using Microsoft.AspNetCore.Mvc;
using PIGUE.DataAccess;

namespace PIGUE.Controllers
{
    [Route("api/formations")]
    [ApiController]
    public class FormationController : ControllerBase
    {
        FormationRepository _formationRepository = new FormationRepository();

        /*GET ALL FORMATIONS*/
        [HttpGet]
        public IActionResult GetAllFormations()
        {
            var allFormations = _formationRepository.GetAllFormations();
            return Ok(allFormations);
        }
        [HttpGet("{formationId}")]
        public IActionResult GetFormationById(int formationId)
        {
            var formation = _formationRepository.GetFormationById(formationId);
            if (formation == null) return NotFound("Illegal Formation On The Offense.");
            return Ok(formation);
        }
    }
}