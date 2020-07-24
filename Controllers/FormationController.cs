using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PIGUE.DataAccess;
using PIGUE.Models;


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