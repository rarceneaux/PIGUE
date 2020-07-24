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
        const string ConnectionString = "Server=localhost;Database=PiguePen;Trusted_Connection=True;";
        //GET ALL FORMATIONS
        public IEnumerable<Formations> GetAllFormations()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Formations>("select * from Formations");
            }
        }
        public Formations GetFormationById(int id)
        {
            var formation = new Formations();
            var sql = @"select *
                         from Formations
                            where Id = @id";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Id = id };
                formation = db.QueryFirstOrDefault<Formations>(sql, parameters);
            }
                return formation;
           
        }
    }
}
