using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PIGUE.Models
{
    public class CompletePlayViewModel
    {
        public string PlayName { get; set; }
        public string FormationName { get; set; }
        public List<Player> Players { get; set; }
    }
}
