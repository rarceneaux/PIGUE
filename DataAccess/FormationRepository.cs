using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using PIGUE.Models;
using System.Data.Common;

namespace PIGUE.DataAccess
{
    public class FormationRepository
    {
        const string ConnectionString = "Server=localhost;Database=Pigue;Trusted_Connection=True;";
        //GET ALL FORMATIONS
        public IEnumerable<Formations> GetAllFormations()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Formations>("select * from Formations");
            }
        }
    }
}
