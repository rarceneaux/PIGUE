using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PIGUE.Models
{
    public class Play
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int FormationId { get; set; }

        public string FormationName { get; set; }
    }

    public class PlayerSelectOption
    {
        public string Label { get; set; }

        public int Value { get; set; }
    }

    public class PlayForm
    {
        public string Name { get; set; }

        public string Type { get; set; }

        public List<PlayerSelectOption> Players { get; set; }

        public int FormationId { get; set; }
    }
}
