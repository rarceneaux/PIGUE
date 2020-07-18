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
    public class PlayRepository
    {
        const string ConnectionString = "Server=localhost;Database=PiguePen;Trusted_Connection=True;";
        //GET ALL PLAYS
        public IEnumerable<Play> GetAllPlays()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Play>("select * from plays");
            }
        }
        public Play AddNewPlay(Play play)
        {
            var sql = @"insert into Plays(Name,Type,FormationName)
                output inserted.*
                 values(@Name,@Type,@FormationName)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Play>(sql, play);
                return result;
            }
        }
        public Play GetPlayById(int id)
        {
            var play = new Play();
            var sql = @"select *
                         from Plays
                            where Id = @id";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Id = id };
                play = db.QueryFirstOrDefault<Play>(sql, parameters);
            }
                return play;
        }
    }
}
